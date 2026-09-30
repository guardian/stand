---
name: create-component
description: Generate and complete a new Stand component using the repository scaffold, DTCG design tokens, React Aria, Figma design context, Storybook, sandbox, export, and release conventions. Use when adding a new component to @guardian/stand.
---

Use this skill when creating a new component for `@guardian/stand`.

## Goal

Create a complete, publishable component contribution rather than stopping at the generated scaffold. Keep the component consistent with existing Stand components, design tokens, public exports, Storybook documentation, and sandbox examples.

## Gather component context

Before scaffolding, ask the user for any missing context needed to make the component correctly:

- Component name, purpose, intended users, and whether it belongs in the Tools Design System or Editorial Components. Use the Tools Design System category only for components verified by the design systems team. Use Editorial Components for shared components that do not fit the design system foundations or have not yet been fully verified and battle-tested by the design systems team.
- A Figma URL or node reference for the design, if one exists.
- The relevant React Aria component or API link, if the component maps to a React Aria pattern.
- Required sizes, states, variants, labels, icons, and interaction behavior.
- Any known usage constraints, peer dependencies, or related existing components to use as references.

Do not invent design or interaction requirements when this context is missing. If the user provides a Figma URL, load the Figma MCP server when needed and use its design context before implementation.

## Confirm high-impact changes

Before making a large or cross-cutting change, go back to the user with the proposed scope and wait for confirmation. This includes adding or changing dependencies or peer dependency ranges, changing existing public APIs, introducing new shared design tokens, modifying existing components, changing package or release configuration, or refactoring code outside the new component. Explain the impact and relevant alternatives before proceeding.

Routine work within the new component's generated files, its documented tokens, stories, sandbox, entrypoint, and required package wiring can proceed once the component context is clear.

## Required workflow

1. Read the repository guidance before making changes:
   - Read `README.md` for installation, compatibility, token, and development commands.
   - Read `CONTRIBUTING.md` for Tools Design System versus Editorial Components boundaries, generator follow-up steps, exports, accessibility, sandbox testing, and release requirements.
   - Treat both documents as the current repository conventions and reconcile any component-specific request with them before proceeding.

2. Run the generator:

   ```sh
   pnpm run create-component
   ```

   Enter the component name as separate words, such as `alert banner`. The generator creates the component folder, implementation templates, stories, MDX, sandbox, token source, and `src/<PascalName>.ts` entrypoint. It also runs `pnpm run build-styled` and prints a follow-up checklist.

3. Read the generated files and compare them with a nearby component of similar behavior. Do not assume the template's behavior, props, peer dependencies, or accessibility are sufficient.

## Design-led component requests

When a component request names a React Aria primitive or includes a design reference, use that information as part of the implementation contract.

- Identify the matching React Aria component and read its API documentation before choosing the component's props, states, and interaction model.
- When a Figma URL is provided, load the Figma MCP server if it is not already available, then load the Figma design context before implementing the visual details. If the Figma MCP server cannot be loaded, tell the user that it is needed and do not guess at the design details. Treat the returned design as a reference to adapt to Stand's existing tokens and component patterns, not as a reason to bypass the repository's conventions.
- Capture the design requirements explicitly in the stories and tokens: sizes, supported states, selected or unselected values, disabled and focus states, and any icon or label behavior.
- Use existing Stand icon and typography patterns. For icon requirements such as Material Symbols, use the project's existing icon/font exports rather than adding a one-off icon implementation.
- Verify the design in Storybook at every documented size and state, including the React, CSS, and JavaScript sandbox examples where those examples are meaningful.

For example, a request for a ToggleSwitch based on the React Aria Switch component should include the React Aria Switch link, DTCG tokens under `src/styleD/tokens/component`, a component under `src/components`, complete types and styling, Storybook states for small/medium and on/off, and design validation against the supplied Figma reference.

4. Complete the component implementation:
   - Implement the real behavior, states, and keyboard interactions.
   - Use an appropriate `react-aria-components` primitive when the component represents a supported React Aria pattern.
   - Add accessible names, semantics, focus behavior, and announcements where applicable.
   - Add or update unit and interaction tests where the behavior warrants them.

5. Review peer dependencies in `src/<PascalName>.ts`:
   - Trace imports through helper components and utilities.
   - List the packages required by the implementation, including indirect React Aria, Emotion, ProseMirror, or date packages.
   - Keep the entrypoint helper comment accurate.
   - Remove the generated peer-dependency TODO reminder after verifying the list.
   - Keep CSS-only consumers documented as not requiring React peers when applicable.

6. Define and build design tokens:
   - Edit `src/styleD/tokens/component/<camelName>.json`.
   - Prefer existing base and semantic tokens over hard-coded values.
   - Run `pnpm run build-styled` after token changes.
   - Review the generated CSS and TypeScript token output.

7. Complete the public entrypoint and package exports:
   - Use the existing uppercase subpath convention, such as `@guardian/stand/Button`.
   - Add the generated `src/<PascalName>.ts` entrypoint to `package.json` `exports` and `typesVersions`.
   - Add the component CSS export when a CSS build exists.
   - Export the component token object from `src/index.ts` when it belongs in the root token API.
   - Do not expose internal implementation files as package entrypoints.

8. Complete documentation and examples:
   - Add or update the component MDX using the `update-component-mdx-file` skill.
   - Add or update the sandbox using the `update-component-sandbox-file` skill.
   - Include real props, states, and variants from the implementation and stories.
   - Add the component to the relevant Storybook introduction page.
   - Ensure the MDX peer dependency section matches the implementation import chain.

9. Prepare the release:
   - Add a Changeset with `pnpm changeset` describing the user-facing change.
   - Review the generated changelog entry and migration implications.
   - Run the relevant Storybook, unit, E2E, typecheck, lint, formatting, build, and Knip checks.

10. Validate sandbox examples in Storybook when the canary workflow is available:

- The Changeset from the release preparation step is required before publishing a canary; the canary workflow needs it to create the snapshot version.
- If the branch can publish a canary and npm access is available, apply the repository's `🐥 Canaries` label to publish the branch snapshot to npm.
- Start Storybook against the snapshot:

  ```sh
  STORYBOOK_SANDBOX_STAND_VERSION=<version> pnpm run storybook
  ```

- Confirm React, CSS, and JavaScript examples render. For CSS and JavaScript examples, check styling similarity to the React version; functionality is not required.
- If the canary workflow or local npm access is unavailable, do not block the component on local sandbox verification. Use the available Storybook or CI checks instead and document the limitation in the PR.
- If a CSS or JavaScript sandbox is impractical, document that limitation and keep only the React example rather than adding an unrealistic example.

## Validation checklist

Before considering the component complete, verify:

- The component works with the supported React, Emotion, TypeScript, and React Aria versions.
- Peer dependencies and the entrypoint comment are accurate.
- Design-token source and generated outputs are committed and synchronized.
- Uppercase JavaScript exports, legacy `typesVersions`, CSS exports, and root token exports are correct.
- Stories cover the meaningful variants and edge cases.
- MDX props, peer dependencies, usage examples, and custom build examples match the implementation.
- Sandbox examples have been checked against a canary when available, or the inability to verify them locally is documented with the available alternative checks.
- The Changeset and release notes describe the public change.

Do not publish a component based only on the generated scaffold. The generator intentionally leaves package exports, root exports, behavior, accessibility, documentation quality, and release metadata for review.
