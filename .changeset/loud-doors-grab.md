---
'@guardian/stand': major
---

# Summary

TODO: Next major update branch. Update this with the relevant summary of changes for the next major release.

# Changes

TODO: List all the changes included in this major update and PRs.

- Rename the CSS override prop to `dangerouslyOverrideCss` across all components. Prefer `theme` for customisation; CSS overrides make components harder to maintain and update, and may break design system conventions.

# Migration Guide

TODO: List all the steps required to migrate from the previous major version to this one.

- Replace existing `cssOverrides` prop name with `dangerouslyOverrideCss`, including nested component props. The previous prop name is no longer supported. Where possible, move custom styling into the component's `theme` prop instead.
