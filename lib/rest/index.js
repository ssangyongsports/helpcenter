import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { chain, get, groupBy } from 'lodash-es'
import { allVersions, allVersionKeys } from '../all-versions.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, 'static/decorated')
export const operations = {}
fs.readdirSync(schemasPath).forEach((filename) => {
  const key = filename.replace('.json', '')
  const value = JSON.parse(fs.readFileSync(path.join(schemasPath, filename)))
  operations[key] = value
})

// Get initial set of keys that will be deleted once new keys are set
const openApiOperationKeys = Object.keys(operations)

let allCategories = []
allVersionKeys.forEach((currentVersion) => {
  // Translate the versions from the openapi to versions used in the docs
  const openApiVersion = allVersions[currentVersion].openApiVersionName

  // Check that the openApiVersion is configured in OpenAPI
  if (!operations[openApiVersion]) return

  operations[currentVersion] = operations[openApiVersion]

  // This list is generated for use in the tests,
  // so we can verify that the names of the markdown files
  // in content/rest/reference/*.md are congruous with the
  // set of REST resource names like activity, gists, repos, etc.
  allCategories = allCategories.concat(
    chain(operations[currentVersion]).map('category').sort().uniq().value()
  )

  // Attach convenience properties to each operation that can't easily be created in Liquid
  operations[currentVersion].forEach((operation) => {
    operation.hasRequiredPreviews = get(operation, 'x-github.previews', []).some(
      (preview) => preview.required
    )
  })
})

// Get the unique set of categories
const categories = [...new Set(allCategories)]

// Remove openapi base name keys that have been replaced with version key
openApiOperationKeys.forEach((openApiVersionName) => {
  delete operations[openApiVersionName]
})

// This is a collection of operations that have `enabledForGitHubApps = true`
// It's grouped by resource title to make rendering easier
const operationsEnabledForGitHubApps = allVersionKeys.reduce((acc, currentVersion) => {
  acc[currentVersion] = chain(operations[currentVersion] || [])
    .filter((operation) => operation['x-github'].enabledForGitHubApps)
    .orderBy('category')
    .value()
  acc[currentVersion] = groupBy(acc[currentVersion], 'category')
  return acc
}, {})

export default {
  categories,
  operations,
  operationsEnabledForGitHubApps,
}
