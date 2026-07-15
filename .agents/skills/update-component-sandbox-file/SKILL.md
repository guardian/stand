---
name: update-component-sandbox-file
description: Create or update a component sandbox file for documentation examples, using the structure and conventions from existing sandbox.ts files such as src/components/Favicon/sandbox.ts, src/components/Button/sandbox.ts, and src/components/Avatar/sandbox.ts.
---

Use this skill to create or revise a sandbox.ts file for a component so that its documentation can include copy-pasteable examples for CodeSandbox and related docs flows.

## Goal

Populate or update a sandbox.ts file so it exports stringified example code for a component in the same style as the existing component sandbox files in this repository.

## Required approach

- Use the component implementation and its story files as the primary source of truth.
- Follow the structure and conventions used by existing sandbox.ts files such as src/components/Favicon/sandbox.ts, src/components/Button/sandbox.ts, and src/components/Avatar/sandbox.ts.
- Export the same named values used by the docs pages:
  - componentName
  - componentTsx
  - componentCss
  - componentHtml
  - componentJs
- Keep the examples concise, realistic, and practical for documentation use.
- Make the examples reflect the component's real props and supported variants from the implementation and stories.
- Prefer using representative examples from the component's stories for the React example, especially where the stories demonstrate important variants, states, or customisation.
- If the component supports a no-React/custom build path, include HTML, CSS, and JavaScript examples that show how to use the component's styles without React.

## What to include

### 1. componentName

- Export a string matching the component name, such as Favicon, Button, or Avatar.

### 2. componentTsx

- Provide a React example that demonstrates the component in use.
- Use the component's real import path, for example @guardian/stand/ComponentName.
- Include at least one primary example, and add a second example where useful to show a common variant or state from the stories.
- Keep the code simple and copy-pasteable.

### 3. componentCss

- Provide CSS example code for a custom-component build using the component's CSS import path.
- Use the component's CSS custom properties where appropriate.
- Match the style of the existing sandbox files: clear comments, example classes, and realistic layout.

### 4. componentHtml

- Provide an HTML example showing how the component's styles can be applied without React.
- Use simple, valid markup that matches the CSS example.

### 5. componentJs

- Provide JavaScript example code for a no-React usage path.
- Use the component's exported design-token values from @guardian/stand when relevant.
- Build the example in a way that is realistic for a custom component implementation.

## Conventions to follow

- Use template literals for the exported strings.
- Keep indentation and formatting consistent with the existing sandbox files.
- Prefer comments that explain which example is being shown.
- Use imports and class names that are consistent with the component's package and existing docs examples.
- Do not invent props or APIs that are not present in the component implementation or stories.
- Verify that any CSS custom properties used in the CSS example actually exist in the generated component stylesheet, and that each property is assigned to the correct CSS property.
- Verify that any JavaScript example values correspond to the generated token exports from the component's TypeScript build output and use the correct property names.
- If the component does not support a meaningful no-React example, omit or simplify the HTML/CSS/JS sections rather than forcing an unrealistic example.

## Formatting

- After editing the sandbox.ts file, run the configured Prettier command for that file so it remains consistent with the repository style.
