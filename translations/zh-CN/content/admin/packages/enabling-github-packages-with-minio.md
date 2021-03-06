---
title: 使用 MinIO 启用 GitHub Packages
intro: '以 MinIO 作为外部存储设置 {% data variables.product.prodname_registry %} 。'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: 使用 MinIO 启用包
---

{% warning %}

**警告：**
- 为存储桶设置所需的限制性访问策略至关重要，因为 {% data variables.product.company_short %} 不会将特定对象权限或其他访问控制列表 (ACL) 应用于存储桶配置。 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

## 基本要求

在 {% data variables.product.product_location_enterprise %} 上启用和配置 {% data variables.product.prodname_registry %} 之前，您必须准备 MinIO 存储桶。 为了帮助您快速设置 MinIO 桶并导航 MinIO 的自定义选项，请参阅“[为 {% data variables.product.prodname_registry %} 配置 MinIO 存储桶快速入门](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)”。

确保您的 MinIO 外部存储访问密钥 ID 和密码具有以下权限：
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## 使用 MinIO 外部存储启用 {% data variables.product.prodname_registry %}

Although MinIO does not currently appear in the user interface under "Package Storage", MinIO is still  supported by {% data variables.product.prodname_registry %} on {% data variables.product.prodname_enterprise %}. 另请注意，MinIO 的对象存储与 S3 API 兼容，您可以输入MinIO 存储桶详细信息代替 AWS S3 详细信息。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. 在“Packages Storage（包存储）”下，选择 **Amazon S3**。
1. 在 AWS 存储设置中输入 MinIO 存储桶的详细信息。
    - **AWS 服务 URL：**MinIO 存储桶的主机 URL。
    - **AWS S3 桶：**专用于 {% data variables.product.prodname_registry %} 的 S3 标准 MinIO 存储桶的名称。
    - **AWS S3 访问密钥**和 **AWS S3 密钥**：输入 MinIO 访问密钥 ID 和访问存储桶的密钥。

    ![S3 AWS 桶详细信息的输入框](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

## 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
