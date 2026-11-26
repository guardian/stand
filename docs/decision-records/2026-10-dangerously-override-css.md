# Make arbitrary CSS overrides an explicit escape hatch

Date: October 2026

## Status

Accepted

Supersedes parts of [API for custom styling](2026-02-custom-styling.md)

## Context

Stand components expose a typed `theme` prop for design-token customisation and an Emotion `cssOverrides` for exceptional, instance-specific styling. But the name `cssOverrides` does not communicate that arbitrary CSS is less stable than the theme API. Overrides can depend on internal markup or styles, so component changes can break them without a type error. They can also diverge from design system conventions and make components harder to maintain and update.

We plan to create a global theme provider/interface, so consumers can customise most components in one place instead of configuring each instance individually.

The February 2026 ADR adopted `theme` and CSS overrides as styling options without establishing a preference between them. This ADR keeps both options, but makes `theme` the recommended approach for customising individual components and frames arbitrary CSS as an escape hatch, with the risks explicit. The planned provider will make theme-based customisation practical across most components without configuring each instance individually.

## Decision

Rename the public prop to `dangerouslyOverrideCss` throughout Stand, without keeping the old name as an alias. Recommend `theme` for individual components and the planned global theme provider for project-level customisation; reserve the renamed prop for cases these cannot cover. Document its maintenance and design-system trade-offs.

Keep the escape hatch for legitimate needs not covered by theme tokens, such as local layout adjustments.

## Alternatives considered

### Keep `cssOverrides` and improve the documentation

Documentation alone leaves a neutral name that presents arbitrary CSS as an ordinary alternative to `theme`.

### Remove the CSS override API

Removing the API would make legitimate instance-specific styling harder without providing a replacement for needs not covered by themes.

### Keep `cssOverrides` as a deprecated alias

An alias would preserve the neutral name and add API surface. This rename is part of the next major update, so a migration is preferable.

## Consequences

- Prefer the component `theme` API for individual components and, when available, the global theme interface/provider for project level customisation. Use `dangerouslyOverrideCss` only for styling those APIs cannot express.
- Consumers must replace `cssOverrides` with `dangerouslyOverrideCss` when upgrading; the old prop is unsupported, including on nested components.
- The new name signals risk but cannot prevent breakage. Consumers remain responsible for reviewing overrides when updating Stand.
