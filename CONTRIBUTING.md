# Contributing

See the [Getting Started docs](https://guardian.github.io/stand/?path=/docs/getting-started--docs) for an overview of the project and setup guidelines.

`@guardian/stand` is a shared component library for Guardian internal/editorial tooling.

If you think you have a component that could be useful across multiple tools, or would like to contribute to the design system, please consider contributing it here! The general guidelines and principles are outlined below.

If you want to make changes to existing components, or have suggestions for improvements, please also feel free to contribute - reach out to the team if you want to discuss the changes or raise a issue/PR!

## Guidelines

The following guidelines apply to all components:

- **Frameworks**
  - Components should work with the versions of React, Emotion, and TypeScript specified in `peerDependencies` in `package.json`.
  - Styling is managed via **Emotion**.

- **Styling**
  - Components should ship with **unstyled** or **sensible default styles**.
  - Consumers must be able to easily customise appearance via Emotion `cssOverrides` or their own theming.
  - Each component should define its own design tokens, which are used to generate both CSS custom properties and typed TypeScript/JavaScript exports.

- **Performance**
  - Follow general React good practices (e.g. avoid unnecessary re-renders).

### Tools Design System

Components for the Tools Design System should also:

- **Follow the design system foundations**
  - Use the established design tokens (base, semantic, and component-level) rather than hard-coded values.
  - Prefer [semantic tokens over base tokens](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-semantic-color--docs) wherever possible.

- **Framework agnostic**
  - Components are built with React, Emotion and possibly React Aria, but must also be stylable without these dependencies via CSS and/or TS/JS exports.
  - Document CSS-only and TS/JS usage in the component's MDX file (see existing components for the "Custom Component Build" pattern).

### Editorial Components

Editorial components should also:

- **Component-focused**
  - Focus on shared UI components that could be reused across multiple (2+) Guardian tools.
  - Avoid tool-specific components or features.
  - Shared utility functions, hooks, or methods are allowed only if they directly support components.

- **External APIs**
  - Components must not directly interact with APIs.
  - Instead, expose functions/props so that consumers can provide their own API behaviour.
    - Example: the `Byline` component is API-agnostic, while `ContentByline` in Composer/flexible-frontend wires it into the Tag Manager API.

## Adding new components

All new components must:

- Be developed and showcased in **Storybook**.
  - `pnpm run storybook`
  - Create stories that demonstrate the component's functionality, variations, and edge cases.
  - The naming convention for stories should follow the pattern of existing components, `Stand/Tools Design System/<Type>/<Name>` or `Stand/Editorial Components/<Component Name>`.
  - Create an accompanying MDX file for documentation, following the pattern of existing components (e.g. `Avatar.mdx`).
  - Update the component list in the relevant introduction page ([Tools Design System](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-introduction--docs) or [Editorial Components](https://guardian.github.io/stand/?path=/docs/stand-editorial-components-introduction--docs)).
- Be accessible (see below).

## Style Dictionary - Design Tokens

If you are adding or modifying design tokens:

1. **Create or edit the token JSON** in `src/styleD/tokens/<group>/<name>.json`.
   - Use `$type` and `$value` following the [W3C Design Token Community Group format](https://design-tokens.github.io/community-group/format/).
   - Reference other tokens with `{path.to.token}` syntax (e.g. `"{base.colors.cyan.200}"`).
   - See `src/styleD/tokens/component/` for existing examples.

2. **Register the token file** in `src/styleD/config.js` by adding to `fileList`:

   ```js
   {
     group: 'component',
     component: 'avatar',
   },
   ```

3. **Run the style dictionary build** to regenerate the output files:

   ```sh
   pnpm run build-styled
   ```

   This produces:
   - `src/styleD/build/css/component/<name>.css` – CSS custom properties
   - `src/styleD/build/typescript/component/<name>.ts` – typed JS/TS token object

4. **Commit the generated files**: the build outputs in `src/styleD/build/` are committed to the repository and must be kept in sync with the token sources.

## Exports

Each component is published as its own **subpath export** (e.g. `@guardian/stand/avatar`) so that consumers only bundle what they use. When adding a new component, the following files must all be updated together:

1. **Create `src/<component-name>.ts`**: the Rollup entry point and public API for the subpath. It should re-export the component, its props type, its theme type, and the style dictionary token variable/type:

   ```ts
   // use src/avatar.ts or another component as a template
   export { Avatar } from './components/avatar/Avatar';
   export type { AvatarProps } from './components/avatar/types';
   export type { AvatarTheme } from './components/avatar/styles';
   export { componentAvatar } from './styleD/build/typescript/component/avatar';
   export type { ComponentAvatar } from './styleD/build/typescript/component/avatar';
   ```

2. **Update `rollup.config.js`**: Add the new entry point to the `input` object so Rollup picks it up during the build:

   ```js
   // under the appropriate section (tools design system or editorial components)
   avatar: 'src/avatar.ts',
   ```

3. **Update `package.json`**: Three separate sections must be updated:

   **`exports`**: add the JS subpath and, if a CSS build exists, the CSS subpath:

   ```json
   "./avatar": {
     "types": "./dist/types/avatar.d.ts",
     "import": "./dist/avatar.js",
     "require": "./dist/avatar.cjs"
   },
   "./component/avatar.css": "./dist/styleD/build/css/component/avatar.css"
   ```

   **`typesVersions`**: Required for TypeScript consumers using `moduleResolution: node` (legacy):

   ```json
   "avatar": ["./dist/types/avatar.d.ts"]
   ```

4. **Update `src/index.ts`**: Add any token exports that should be available from the root `@guardian/stand` entry point (typically the style dictionary variable and its type):

   ```ts
   export { componentAvatar } from './styleD/build/typescript/component/avatar';
   export type { ComponentAvatar } from './styleD/build/typescript/component/avatar';
   ```

5. **Check the build**: Run `pnpm run build` and verify that the new component's JS and CSS files are generated in `dist/` and that the exports are correct.

## Testing

- Write tests where applicable using:
  - [Jest](https://jestjs.io/) for unit tests.
  - [Playwright](https://playwright.dev/) for end-to-end testing of components in Storybook.

- Ensure compatibility with the latest versions of:
  - Chrome
  - Firefox
  - Safari

- Ensure that your component works in another project when you build it e.g. using canaries (add the `🐥 Canaries` label to a PR with a changeset to do this), using `pnpm link`, or using the `file:` dependency in `package.json`

## Accessibility

- Follow the [Source accessibility guidelines](https://github.com/guardian/csnx/blob/main/docs/source/contributing.md#accessibility).
  - Test for keyboard navigation, screen reader support, and sensible defaults.

## Versioning and Releases

- We use **changesets** for versioning and publishing.

- Follow [semver](https://semver.org/) principles, as per Source guidelines:
  - **Patch**: bug fixes and backwards-compatible changes.
  - **Minor**: backwards-compatible new features.
  - **Major**: breaking changes.

- Run `npx changeset` to create a changeset when you make changes that should be included in a release.
  - Follow the prompts to describe your changes and select the appropriate version bump (patch, minor, major).
  - This will generate a markdown file in the `.changeset` directory.
  - Commit the changeset file along with your code changes.

- Once your changes are merged, the changeset will be picked up in the next release cycle, and the version will be bumped accordingly when we merge the generated `🦋 Release package updates` PR

---

For generic contribution guidelines, please refer to the [Guardian Source contributing guidelines](https://github.com/guardian/csnx/blob/main/docs/source/contributing.md).
