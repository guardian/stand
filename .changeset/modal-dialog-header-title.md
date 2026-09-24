---
'@guardian/stand': patch
---

Fix `Dialog.Header` crashing with react-aria-components 1.20.0 ("Invalid slot "title""). `Dialog.Header` now renders a react-aria-components `Heading` with `slot="title"`, so it also provides the dialog's accessible name on all supported react-aria-components versions. `element` is now restricted to `h1`–`h6`, and props are now `Heading` props rather than `Typography` props.
