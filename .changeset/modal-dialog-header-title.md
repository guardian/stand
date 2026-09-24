---
'@guardian/stand': patch
---

Fix `Dialog.Header` crashing with react-aria-components 1.20.0 ("Invalid slot "title""). `Dialog.Header` now also provides the dialog's accessible name on all supported react-aria-components versions.
