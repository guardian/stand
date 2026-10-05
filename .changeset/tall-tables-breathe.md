---
'@guardian/stand': minor
---

Table: larger column headers and new `boldColumnHeaders` prop.

**Visual change:** column headers on every `Table` now use 14px `bodyBoldSm` typography (previously 12px `headingXs`) and have a 48px minimum height with vertically centred text. Body rows and cells are unchanged.

- New `boldColumnHeaders` prop on `Table`: `'all'` (default) keeps every column header bold; `'first'` bolds only the first column header in DOM order and shows the rest at regular weight.
- New `columnHeader.minHeight`, `columnHeader.paddingBlock` and `columnHeader.regularTypography` tokens. `columnHeader.typography` remains the default header typography, and column headers continue to share `cell.paddingInline` so they stay aligned with their cells.
