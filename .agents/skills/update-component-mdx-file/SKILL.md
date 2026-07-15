---
name: update-component-mdx-file
description: Create or update a component usage MDX document that follows the existing structure and style of the component docs in this repository, such as src/components/Select/Select.mdx. Use this when a component needs a documentation page describing its usage, props, and examples from the component's stories.
---

Use this skill to author or revise a component documentation file in MDX format for a component implementation and its stories.

## Goal

Populate or update an MDX document so it explains how to use a component, mirrors the structure of the existing component docs, and includes examples sourced from the component's story files.

## Required approach

- Follow the same document structure and headings as the reference component docs, especially the patterns used in existing component docs such as src/components/Select/Select.mdx, src/components/Button/Button.mdx, and src/components/Avatar/Avatar.mdx.
- If the component is based on [React Aria](https://react-aria.adobe.com/getting-started), then also include a link to the React Aria docs for that component e.g. https://react-aria.adobe.com/Button for the Button component
- When identifying peer dependencies for the MDX file, trace the component's import chain through its implementation and any helper components it uses, not just the top-level component file, so that indirect dependencies are included. This is a required step, not an optional review.
- Treat any package imported by the implementation chain as a required peer dependency unless it is already bundled or provided by the package itself. This includes indirect dependencies such as `react-aria-components` when a component or its helper components rely on React Aria primitives. Where a package is listed under peer dependencies because it is an indirect dependency, it is not necessary to specify why it was included.
- Use the same high-level sections in order:
  1. Overview/introductory description
  2. When to use
  3. Peer dependencies
  4. Example usage
  5. Props
  6. Stories
  7. Customisation
  8. Custom Component Build
- Keep the wording concise, practical, and implementation-focused.
- Use the component's actual implementation file and its story file as the primary sources of truth.
- Include examples from the stories where appropriate, especially in the Stories section and any customisation or usage examples.
- Prefer importing story exports from the component's stories file, then rendering them in the MDX document with Storybook blocks such as Meta, Canvas, and Story exports.
- Do not add paragraphs linking to https://codesandbox.io.

## Props table requirements

- Format the props table in the same style as the Select docs:
  - Columns: Name, Type, Required, Default, Description
  - Use markdown table syntax
  - Keep the table aligned and readable
- For each prop, infer a short description when it is clear from the component implementation or stories.
- If the meaning or purpose of a prop cannot be confidently inferred, leave the Description cell blank rather than guessing.
- If the prop is clearly optional or required, reflect that in the Required column using wording such as "No", "Yes", or "Conditional".
- Use the component's TypeScript props interface or type definitions to populate the Type column accurately.
- If the component is based on [React Aria](https://react-aria.adobe.com/getting-started), then also include a link to the React Aria docs for that component API for additional props/prop information e.g. https://react-aria.adobe.com/Button#api for the Button component API

## Content expectations

- The document should explain the component's purpose and typical use cases.
- The Example usage section should include a small, copy-pasteable example showing the component in use.
- The Stories section should include one subsection per meaningful story, using Canvas blocks for each story export.
- The Customisation section should show how the component can be customised through theme or CSS overrides when applicable.
- The Custom Component Build section should describe how to build the component without React/Emotion if relevant, using the same style and tone as the reference docs.
- After editing the MDX file, run the configured Prettier command for that file so the document is formatted consistently.

## Example

Use existing component docs in src/components as the model for structure and formatting. Good examples include src/components/Select/Select.mdx, src/components/Button/Button.mdx, and src/components/Avatar/Avatar.mdx. The agent should preserve the same headings and table conventions while adapting the content to the target component, and should also look at other components in src/components that already have .mdx files when additional examples or patterns are needed, but do not copy paragraphs linking to examples on https://codesandbox.io since we are no longer using that site to host examples anymore.
