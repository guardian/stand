# Separate layout and reset styles from design tokens

Date: October 2026

## Status

Accepted

## Context

Stand uses DTCG-formatted tokens and Style Dictionary to share design decisions across components and generated outputs. Component tokens have also included CSS implementation and reset defaults such as `display`, `cursor`, and `overflow`.

Tokenising every CSS property makes the model mirror implementation details, expanding generated APIs and making routine CSS changes appear to be design-system changes. It may also imply that low-level defaults are supported customization points.

Layout can still be intentional design: reusable spacing, dimensions, or alignment may belong in tokens and should not be removed simply because they affect layout.

## Options

- Keep all CSS properties in component tokens
  - Provides one token-driven source for component styles
  - Exposes implementation details and requires generated APIs to track low-level changes
- Move all layout and reset properties out of tokens
  - Simplifies tokens but may remove deliberate design choices and supported customization points
- Tokenise design decisions and keep implementation defaults in component CSS
  - Keeps tokens focused on meaningful visual choices
  - Requires judgment and removes theme customization for tokens that are deleted

## Decision

Tokenise reusable design decisions and values in a component's supported visual customization contract. Keep structural CSS and reset defaults in component styles when they describe implementation, not design intent.

Layout is not automatically excluded: consider a property's reuse, design meaning, and customization contract.

This distinction applies to both local component tokens and shared design-system tokens. Changes to shared tokens continue to follow the existing design-system ownership process.

## Consequences

- Tokens and generated outputs focus on design values rather than every CSS declaration.
- Component CSS owns implementation and reset defaults, whose changes no longer require token updates.
- Removing a token changes the theme API; document the migration and any deleted fields.
- Consumers should use supported theme APIs for design customization; this decision does not recommend CSS overrides as a replacement for removed tokens.
- Token guidance should distinguish hard-coded CSS implementation defaults from hard-coded design values; design values should continue to use appropriate tokens.
