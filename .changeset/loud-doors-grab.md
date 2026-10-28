---
'@guardian/stand': major
---

# Summary

Layout and reset styles are no longer exposed as design tokens. Component CSS now owns implementation defaults, while Style Dictionary tokens focus on reusable visual design decisions.

# Changes

- Removed layout and reset properties from component tokens and updated generated CSS and TypeScript token outputs.
- Moved the affected layout and reset styles into component styles across the component library.
- Removed theme customization and theme types from `Tabs.TabList`, `Tabs.TabPanels`, and `Tabs.TabPanel`. `Tabs` and `Tabs.Tab` retain their theme props.

# Migration Guide

- Remove references to deleted layout and reset properties from custom component themes and direct token imports; those properties are no longer part of the generated token API.
- Remove references to layout and reset values from token overrides; these implementation defaults are no longer part of the token customization API.
- Remove `theme` props and `TabListTheme`, `TabPanelsTheme`, and `TabPanelTheme` type imports from Tabs sub-components. Use `theme` on `Tabs` or `Tabs.Tab` for supported design-token customization.
