---
'@guardian/stand': patch
---

BREAKING: React components now use PascalCase e.g `import { AlertBanner } from '@guardian/stand/alert-banner';` -> `import { AlertBanner } from '@guardian/stand/AlertBanner';`. For css, everything is now camelCase (this only affects TopBar css), i.e `import '@guardian/stand/component/TopBar.css'` -> `import '@guardian/stand/component/topBar.css'`.
