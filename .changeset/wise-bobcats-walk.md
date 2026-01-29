---
'@guardian/stand': patch
---

BREAKING: use subpath exports for components

Old:

```ts
import { Byline, TagAutocomplete, TagTable } from '@guardian/stand';
```

New:

```ts
import { Byline } from '@guardian/stand/byline';
import { TagAutocomplete, TagTable } from '@guardian/stand/tag-picker';
```
