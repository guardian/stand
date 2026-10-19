---
'@guardian/stand': minor
---

### Summary

Migrates Stand's shared design tokens to Tokens Studio in a like-for-like update. The generated CSS custom properties and TypeScript token exports are refreshed, but existing token values and component styling are intended to remain equivalent, so consumers should not see a visual or behavioural difference nor should they need to make any changes.

### What consumers need to do

Upgrade `@guardian/stand` to this release and rebuild your application to include the refreshed token exports. No token renaming or code migration should be required.

#### If something goes wrong

If the upgrade causes unexpected visual or build issues check what's causing the issue, and contact the design systems team with details of the affected component and token.
