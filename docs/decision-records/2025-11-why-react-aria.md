# Why did we choose React Aria as a base library?

Date: November 2025

## Status

Accepted

## Context

In order to implement a design system and component library we need a base set of components and patterns. This can range from common simple components, such as a button, to more complex patterns such as drag and drop.

Building a design system from scratch with the breadth of components needed, that are also accessible, would be a much larger project than the team has resource to implement. The decision to build design foundations from scratch and apply them to an existing UI library is discussed more in ["Why build a design system and UI library?" ADR](2025-10-why-design-system.md). This discusses which library to choose.

We created a shortlist of potential libraries and considered them against the following criteria:

- What is the current developer experience of using it at the Guardian?
- How well is it supported?
- How easy is it to customise?
- Does it have the breadth of components we need?

## Options

- React-Aria
  - Pros:
    - unstyled components, allowing greater flexibility to implement our own design
    - a specific focus on accessibility
    - exposes hooks and components that can be composed into our own components
  - Cons:
    - requires styling foundations before a base set of components can be published
    - not used by any team at the Guardian
- Elastic UI
  - Pros:
    - breadth of components
    - familiar to many teams at the Guardian
  - Cons:
    - harder to customise styling outside themes
- Material UI
  - Pros:
    - breadth of components
    - already used in Composer
  - Cons:
    - uncertainty over Material design changes vs the UI library
    - some advanced components are published in a separate library, MuiX,such as Date/Time pickers

## Decision

Use React-Aria as a base library for building components. Apply our own design foundations to common core components and build out more complex components by composing components and hooks.

## Consequences

The components published in `stand` should feel familiar to developers in terms of theming and props. There may be some learning curve for developers contributing to this library.
