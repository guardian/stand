# Challenges:

1. A large estate of tools has been built using a variety of UI frameworks and patterns. This inconsistency creates a steep learning curve for users using those tools and engineers developing them.
1. The designs and implementations of many tools are old and may not meet modern accessibility standards.
1. There is no clear path for how to develop UI or implement UX when building new tools, especially with limited design support.
1. There is unlikely to be a team dedicated to maintaining a design system long term.

# Vision:

The goal of Stand is to provide a single design system that creates [consistency](#consistency) within Guardian tools, ensuring [clarity](#clarity) and reducing friction while being [inclusive by design](#inclusive-by-design), so that everyone can use and contribute to our tools.

## Clarity

End users should immediately understand the purpose, state and consequence of Stand components.

Each component defines when designers and engineers should use it. Its behaviour, interactions, logic and design decisions are explicit and documented.

### KPIs:

- User feedback.
- New UI is built using Stand
- Existing UI migrated to use Stand

## Consistency

Stand components should work universally across tools. Components should increase efficiency by reducing friction in user interactions and improving delivery speed for engineers and designers.

Stand should provide clear defaults to reduce repeated design decisions and avoid one-off customisations that increase maintenance costs. Their design should feel familiar but distinct across tools. Components should be modular and composable.

There should be a source of truth that is easy to find. This should mitigate issues from divergence between design and code.

### KPIs:

- Adoption of Stand
- Stand components used instead of custom components built
- If a new component is required, it should be implemented within Stand first and then used within the consumer (there might be a better way of phrasing this)

## Inclusive by design

Accessibility in Stand is not optional. Designs should meet our accessibility standards. All colleagues should be able to work effectively in tools, regardless of role, ability or context.

Components should be well documented so designers and engineers can adopt them quickly. There should be contribution guidelines for extending the system.

### KPIs:

- Number of engineers contributing to the design system
- Passes accessibility testing
