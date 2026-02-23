# Why build a design system and UI library?

Date: October 2025

## Status

Accepted

## Context

Engineers working on tools have to make decisions on what the look and feel of a tool should be, whether to use an existing external UI library and which one. This often happens without much support from a designer, and no existing design system exists for Guardian journalism tools. This leads to tools being inconsistent and a steeper learning curve for engineers moving between working on different tools. Journalist productivity and accuracy suffers when there are duplicate, inconsistent or hard to use UX patterns.

Having a go to design system (DS) reduces friction, improves developer efficiency and creates consistency for engineers and journalists working on these tools.

## Options

- Adopt an existing design system as a standard, e.g. Elastic UI
  - Some teams may have existing familiarity with it
  - Gives an existing set of design and UX patterns
  - The design will not align with the Guardian's brand
  - No design or engineering effort needed to be able to use
  - Less control over the future direction that the DS takes
- Create a Guardian design system from scratch
  - Maximum flexibility in terms of design
  - Significant up front design and engineering work to build out a DS that has enough breadth to use
  - A lot of time would be spent building basic design patterns that already exist elsewhere
- Build design foundations from scratch and apply them to an existing UI library
  - Customise the look and feel to match Guardian branding
  - Gives an initial breadth of components to apply a custom design to
  - Requires some engineering resource to customise a library in code

Any option that we take would need to focus on the ability to build and share Guardian journalism specific components, e.g. byline editor.

## Decision

Build design foundations from scratch and apply them to an existing UI library. We have evaluated multiple UI libraries; Material UI, Elastic UI and React-Aria. We have not yet made a decision on which one we will use as a foundation for a component library.

## Consequences

By building the foundations separately from an existing UI library they could applied to and used by any project regardless of underlying technology.

Our long term aim will be to provide a customised UI library that follows the design foundations.
