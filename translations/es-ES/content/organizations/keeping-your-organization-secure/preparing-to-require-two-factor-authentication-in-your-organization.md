---
title: Prepararse para requerir autenticación de dos factores en tu organización
intro: 'Antes de requerir la autenticación de dos factores (2FA), puedes notificar a los usuarios acerca del futuro cambio y verificar quien ya utiliza 2FA.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepararse para requerir 2FA
---

Recomendamos que notifiques a {% ifversion fpt or ghec %}los miembros de la organización, a los colaboradores externos y a los gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} por lo menos una semana antes de requerir 2FA en tu organización.

Cuando solicitas que se use la autenticación de dos factores para tu organización, los miembros, los colaboradores externos y los gerentes de facturación (incluidas las cuentas bot) que no utilizan 2FA se eliminarán de tu organización y perderán acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización.

Antes de solicitar 2FA en tu organización, recomendamos que:
  - [Habilites 2FA](/articles/securing-your-account-with-two-factor-authentication-2fa/) en tu cuenta personal
  - Le solicites a las personas en tu organización que configuren 2FA en sus cuentas
  - Consultes si [los usuarios en tu organizacipon tienen habilitado el 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - Le adviertas a los usuarios que una vez que el 2FA esté habilitado, aquellos sin 2FA se eliminarán automáticamente de la organización
