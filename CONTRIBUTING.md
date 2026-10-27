# Contributing

See the [Getting Started docs](https://guardian.github.io/stand/?path=/docs/getting-started--docs) for an overview of the project and setup guidelines.

`@guardian/stand` is a design system and shared component library for Guardian internal tooling.

If you think you have a component that could be useful across multiple tools, or would like to contribute to the design system, please consider contributing it here! The general guidelines and principles are outlined below.

If you want to make changes to existing components, or have suggestions for improvements, please also feel free to contribute - reach out to the Design Systems team if you want to discuss the changes or raise a issue/PR!

## Choosing a collection

**Stand contains two collections:** the **Tools Design System**, our core foundations and UI components, and **Shareable non-Design System Components**, reusable components that sit outside the design system. Both are available through `@guardian/stand`; inclusion in Stand does not imply design system membership.

Use this guide when adding a component:

- **Core UI building block governed by the Tools Design System?**
  - Discuss its placement with the design system team and use the Tools Design System collection. Follow its foundations, accessibility expectations, and review process.
- **Reusable across two or more Guardian tools, but does not need design system governance?**
  - Use Shareable non-Design System Components.
- **Unsure?**
  - Start in the shareable collection and flag the placement for discussion.

Using design tokens or composing design system components does not automatically make a component part of the Tools Design System. Collection membership and verification are separate: a design system component may be awaiting review, while verification is not required for the shareable collection.

In either collection, keep components reusable and API-agnostic. Consumers should supply external integrations through props or callbacks rather than coupling components to specific services.

## Guidelines

The following guidelines apply to all components:

- **Frameworks**
  - Components should work with the versions of React, Emotion, and TypeScript specified in `peerDependencies` in `package.json`.
  - Styling is managed via **Emotion**.

- **Styling**
  - Components should ship with **unstyled** or **sensible default styles**.
  - Consumers should customise appearance through the `theme` prop.
  - Provide `dangerouslyOverrideCss` as an escape hatch for styling that the theme cannot express. CSS overrides make components harder to maintain and update, and may cause them to no longer follow design system conventions.
  - Each component should define its own design tokens, which are used to generate both CSS custom properties and typed TypeScript/JavaScript exports.

- **Performance**
  - Follow general React good practices (e.g. avoid unnecessary re-renders).

### Tools Design System

Components for the Tools Design System should also:

- Be verified by the design systems team before being treated as part of the supported design system.

- **Follow the design system foundations**
  - Use semantic tokens to build UI; do not use base tokens or hard-coded design values directly unless explicitly stated in the design
  - Component tokens should reference semantic tokens. If no semantic token fits, ask the design systems team about adding one.

- **Framework agnostic**
  - Components are built with React, Emotion and possibly React Aria, but must also be stylable without these dependencies via CSS and/or TS/JS exports.
  - Document CSS-only and TS/JS usage in the component's MDX file (see existing components for the "Custom Component Build" pattern).

### Shareable non-Design System Components

Shareable non-Design System Components should also:

- Be applicable to be shared across multiple tools but don't need to fit the design system or be verified by the design systems team.

- **Component-focused**
  - Focus on shared UI components that could be reused across multiple (2+) Guardian tools.
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
  - The naming convention for stories should follow the pattern of existing components, `Stand/Tools Design System/<Type>/<Name>` or `Stand/Shareable non-Design System Components/<Component Name>`.
  - Create an accompanying MDX file for documentation, following the pattern of existing components (e.g. `Avatar.mdx`).
  - Include `MetaTable` in the component docs to show collection membership and verification separately. For Tools Design System components, set `designSystemTeamVerified` to `false` until verified. For shareable components, use `collection="Shareable non-Design System Components"` without a verification flag.
  - Update the component list in the relevant introduction page ([Tools Design System](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-introduction--docs) or [Shareable non-Design System Components](https://guardian.github.io/stand/?path=/docs/stand-shareable-non-design-system-components-introduction--docs)).
- Be accessible (see below).

### Scaffold a component

Use the component generator to create the initial source files and component token file:

```sh
pnpm run create-component
```

When prompted, enter the component name in words, for example `alert banner`. The generator creates the component folder, React component templates, Storybook documentation and stories, sandbox, design-token file, and the public `src/AlertBanner.ts` entrypoint. It also runs Style Dictionary and prints the remaining publication checklist.

**Note:** Separate words in the component name with spaces rather than camel or Pascal casing as this conversion happens automatically when the files are created. eg. 'alert banner'. If you supply a pre-cased name the created files will not be properly cased.

The script does not add the component to the package exports or root token exports. Follow the steps in the [Exports](#exports) section and complete the checklist printed by the generator.

The scaffold uses the Tools Design System story title by default; this does not imply approval or verification. Before publishing, follow [Choosing a collection](#choosing-a-collection), update the story title if needed, and set the matching collection and verification status in the generated MDX metadata.

## Style Dictionary - Design Tokens

### Token ownership

These files are managed in [Tokens Studio](https://tokens.studio/) and are the source of truth for shared Tools Design System tokens:

- `src/styleD/tokens/base/base.json`
- `src/styleD/tokens/semantic/semantic.json`
- `src/styleD/tokens/component/component.json`

Do not edit these files directly. Coordinate any changes with the design systems team. Until the planned automated workflow is available, the team pulls updates with the [Tokens Studio CLI](https://documentation-v2.tokens.studio/cli/overview.html) from the project root:

```sh
studio tokens pull
pnpm run build-styled
```

Review both the pulled token files and generated output before committing. Pulling from Figma variables is no longer supported.

All other token JSON files under `src/styleD/tokens/` are local to this project. Contributors should create or edit local component token files only when adding a new component, or changing an unverified Tools Design System component or a Shareable non-Design System Component. Use existing semantic tokens in component tokens wherever possible. Edit the relevant JSON file using `$type` and `$value` in the [W3C Design Token Community Group format](https://design-tokens.github.io/community-group/format/), then run:

```sh
pnpm run build-styled
```

Commit the source JSON and generated files in `src/styleD/build/` together.

Shareable non-Design System Components and unverified Tools Design System components keep their component token files local under `src/styleD/tokens/component/`. When an unverified Tools Design System component is verified, the design systems team moves its tokens to [Tokens Studio](https://tokens.studio/) and removes its local token file. Changes to base or semantic tokens should go through the design systems team; contributors should not edit those token files themselves.

The generated outputs include CSS custom properties under `src/styleD/build/css/` and typed JS/TS token objects under `src/styleD/build/typescript/`.

### Choosing token levels

When building Tools Design System components or single-use components in a consuming project:

- Use semantic tokens to build UI; they express the purpose of a design choice.
- Do not use base tokens or hard-coded design values directly in UI. Base tokens are the raw foundations used by semantic tokens.
- Component tokens should reference semantic tokens, and only use base tokens when explicitly necessary by designs.
- If no semantic token fits the need, ask the design systems team about adding one rather than using a base token or hard-coded value. Contributors should not add or change base or semantic tokens themselves.

These token-level guidelines apply whether tokens are managed in Tokens Studio or locally. Shareable components are outside the Tools Design System governance; their local component tokens may follow the needs of the component.

## Exports

Each component is published as its own **subpath export** (e.g. `@guardian/stand/Avatar`) so that consumers only bundle what they use. When adding a new component, the following files must all be updated together:

1. **Create `src/<component-name>.ts`**: the tsdown entry point and public API for the subpath. It should re-export the component, its props type, its theme type, and the style dictionary token variable/type:

```ts
// use src/Avatar.ts or another component as a template
export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps } from './components/Avatar/types';
export type { PartialAvatarTheme as AvatarTheme } from './components/Avatar/styles';
export { componentAvatar } from './styleD/build/typescript/component/avatar';
export type { ComponentAvatar } from './styleD/build/typescript/component/avatar';
```

2. **Update `package.json`**: Three separate sections must be updated:

   **`exports`**: add the JS subpath and, if a CSS build exists, the CSS subpath:

   ```json
   "./Avatar": {
     "import": {
       "types": "./dist/Avatar.d.ts",
       "default": "./dist/Avatar.js"
     },
     "require": {
       "types": "./dist/Avatar.d.cts",
       "default": "./dist/Avatar.cjs"
     }
   },
   "./component/avatar.css": "./dist/styleD/build/css/component/avatar.css"
   ```

**`typesVersions`**: Required for TypeScript consumers using `moduleResolution: node` (legacy):

```json
"Avatar": ["./dist/Avatar.d.ts"]
```

3. **Update `src/index.ts`**: Add any token exports that should be available from the root `@guardian/stand` entry point (typically the style dictionary variable and its type):

   ```ts
   export { componentAvatar } from './styleD/build/typescript/component/avatar';
   export type { ComponentAvatar } from './styleD/build/typescript/component/avatar';
   ```

4. **Check the build**: Run `pnpm run build` and verify that the new component's JS and CSS files are generated in `dist/` and that the exports are correct.

## Testing

- Write tests where applicable using:
  - [Jest](https://jestjs.io/) for unit tests.
  - [Playwright](https://playwright.dev/) for end-to-end testing of components in Storybook.

- Ensure compatibility with the latest versions of:
  - Chrome
  - Firefox
  - Safari

- Ensure that your component works in another project when you build it e.g. using canaries (add the `🐥 Canaries` label to a PR with a changeset to do this), using `pnpm link`, or using the `file:` dependency in `package.json`

### Testing sandboxes locally

It is worth testing sandbox examples locally in Storybook first to make sure the React, CSS, and JavaScript playground/sandbox examples render correctly.

To do this, first release a canary version of the branch by applying the `🐥 Canaries` label to the PR. This publishes a snapshot version to npm and leaves a comment on the PR with the snapshot version. Then run Storybook locally against that canary:

```sh
STORYBOOK_SANDBOX_STAND_VERSION=<version> pnpm run storybook

# e.g.
# STORYBOOK_SANDBOX_STAND_VERSION=0.0.0-canary-20260827105140 pnpm run storybook
```

The Storybook documentation will load each sandbox against that version of Stand, allowing you to test the examples.

For CSS and JavaScript examples, test the styling and check that it looks reasonably similar to the React version. Their functionality does not need to be tested.

If setting up a sandbox for the CSS or JavaScript example is too complicated, leave a note explaining that it is not easily possible. The [Modal documentation](https://github.com/guardian/stand/blob/main/src/components/Modal/Modal.mdx?rgh-link-date=2026-09-29T07%3A30%3A53Z#custom-component-build) is an example where the sandbox is missing for the CSS/JavaScript build. If a sandbox is not easily possible, remove the HTML/CSS/JavaScript example from the sandbox file and keep only the React example.

## Accessibility

- Follow the [Source accessibility guidelines](https://github.com/guardian/csnx/blob/main/docs/source/contributing.md#accessibility).
  - Test for keyboard navigation, screen reader support, and sensible defaults.

## Versioning and Releases

- We use **changesets** for versioning and publishing.

- Follow [semver](https://semver.org/) principles, as per Source guidelines:
  - **Patch**: bug fixes and backwards-compatible changes.
  - **Minor**: backwards-compatible new features.
  - **Major**: breaking changes.
    - This includes removing or renaming a public export, changing a public type incompatibly, altering required peer dependencies, or otherwise requiring consumer changes.
    - Breaking changes should include migration guidance in the changelog or release notes.

- Run `npx changeset` to create a changeset when you make changes that should be included in a release.
  - Follow the prompts to describe your changes and select the appropriate version bump (patch, minor, major).
  - This will generate a markdown file in the `.changeset` directory.
  - Commit the changeset file along with your code changes.

- Once your changes are merged, the changeset will be picked up in the next release cycle, and the version will be bumped accordingly when we merge the generated `🦋 Release package updates` PR

---

For generic contribution guidelines, please refer to the [Guardian Source contributing guidelines](https://github.com/guardian/csnx/blob/main/docs/source/contributing.md).
