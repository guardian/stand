---
'@guardian/stand': patch
---

BREAKING: Removes the `GlobalResetStyles` export from `index.ts`

Instead:

- For consumers using emotion - `import { GlobalResetStyles } from @guardian/stand/utils`
- For consumers using css styling - `import '@guardian/stand/util/reset.css'`
