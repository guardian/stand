---
'@guardian/stand': patch
---

HtmlPreview / HtmlPreviewLoader: switch preview widths with a `SegmentedControl` (plain number labels) instead of a `RadioGroup`. The control now sits below the title, aligned with the left edge of the centred preview, and moves with it. The layout also follows the updated design: a 1px border, 16px padding and gap on the container, a Heading 2xl string title, and a transparent preview frame. New `borderColor`, `borderStyle`, `borderWidth` and `gap` theme tokens were added.
