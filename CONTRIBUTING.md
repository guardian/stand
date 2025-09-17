# Contributing to Stand

See the [README](./README.md) for an overview of the project and setup guidelines.

`@guardian/stand` is a shared component library for Guardian internal/editorial tooling.

If you think you have a component that could be useful across multiple tools, please consider contributing it here! The general guidelines and principles are outlined below.

## Guidelines

- **Component-focused**
    - Focus on shared UI components that could be reused across multiple (2+) Guardian tools.
    - Avoid tool-specific components or features.
    - Shared utility functions, hooks, or methods are allowed only if they directly support components.

- **Frameworks**
    - Components should work with **React 17+**.
    - Styling is managed via **Emotion**.

- **Styling**
    - Components should ship with **unstyled** or **sensible default styles**.
    - Consumers must be able to easily customise appearance via Emotion `cssOverrides` or their own theming.

- **External APIs**
    - Components must not directly interact with APIs.
    - Instead, expose functions/props so that consumers can provide their own API behaviour.
        - Example: the `Byline` component is API-agnostic, while `ContentByline` in Composer/flexible-frontend wires it into the Tag Manager API.

- **Performance**
    - Follow general React good practices (e.g. avoid unnecessary re-renders).

---

## Adding a New Component

All new components must:

- Be developed and showcased in **Storybook**.
    - `pnpm run storybook`
- Be accessible (see below).

---

## Testing

- Write tests where applicable using:
    - [Jest](https://jestjs.io/)
    - [React Testing Library](https://testing-library.com/)

- Ensure compatibility with the latest versions of:
    - Chrome
    - Firefox
    - Safari

- Ensure that your component works in another project when you build it e.g. using `pnpm link` or using the `file:` dependency in `package.json`

---

## Accessibility

- Follow the [Source accessibility guidelines](https://github.com/guardian/csnx/blob/main/docs/source/contributing.md#accessibility).
    - Test for keyboard navigation, screen reader support, and sensible defaults.

---

## Versioning and Releases

- We use **changesets** for versioning and publishing.

- Follow [semver](https://semver.org/) principles, as per Source guidelines:
    - **Patch**: bug fixes and backwards-compatible changes.
    - **Minor**: backwards-compatible new features.
    - **Major**: breaking changes.

---

For generic contribution guidelines, please refer to the [Guardian Source contributing guidelines](https://github.com/guardian/csnx/blob/main/docs/source/contributing.md).
