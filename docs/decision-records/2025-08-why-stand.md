# Why create @guardian/stand

Date: August 2025

## Status

Accepted

## Context

Across the journalism tools there are components/patterns that are repeated and implemented individually but are not easily sharable. Examples include Byline inputs, tag search, rich text editing, Grid image picker etc.

## Options

- Do nothing
  - No change to existing components
  - Any improvements to a single component isn't shared between similar components
  - New instances will have to reimplement or copy and paste existing code
- Publish flexible-frontend
  - Components already almost in a sharable state
  - Components are designed with a look and feel for composer with not much room to modify
  - Reliant on dependencies matching flexible-frontend/composer
- Create a new component library with the shared components
  - Single place to contribute and share components
  - Flexibility in how components can be created and shared e.g. web components
  - Separation of concerns, independent from any existing project

## Decision

Create a new component library, `@guardian/stand`, to house the shared components.

## Consequences

- New components can be developed and shared more easily
- Existing components can be migrated to the new library if they are applicable for multiple tools
- Reduced duplication of effort
- Requires initial effort to set up the library and migrate existing components in order for it to be useful
