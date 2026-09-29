---
'@guardian/stand': major
---

- Release `1.0.0` establishes the stable public API for `@guardian/stand`
- Update compatible version of `react-aria-components` to `>= 1.14.0 <= 1.21.1`
- Fix attw issue: "No resolution (node10) at @guardian/stand/PickerIframeModal"

## What v1.0.0 means

- Documented components, their public props and types, design-token exports, CSS entrypoints, and JavaScript package subpath exports are supported public APIs.
- Backwards-compatible bug fixes and features will continue to use patch and minor releases. Changes that require consumer changes will use a major release and MUST include migration guidance.

## Migration notes

Most consumers will not need to make changes when upgrading to v1.0.0, especially if they're using a recent v0.0.x version of stand.

This release is distributed under the Apache License 2.0.
