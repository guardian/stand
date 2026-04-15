# @guardian/stand

## 0.0.24

### Patch Changes

- f9685a0: Add TextArea component

## 0.0.23

### Patch Changes

- aef2a45: Add `Checkbox` and `CheckboxGroup` components
- b5da451: Add RadioGroup and Radio components
- 4d54595: Update figma tokens: add success-strong, success-inverse colors, xxxs height sizing
- a0e0585: Use filled icons for Material Symbols css

## 0.0.22

### Patch Changes

- f4c4a59: Make the `TopBarToolName` component a clickable link with hover text
- d269841: Add new xs and bold typography tokens

## 0.0.21

### Patch Changes

- d03f7ea: Add TextInput component
- c595ebe: Refactor `MenuItem` focus/hover styles to remove `@react-aria/focus` peer dependency

## 0.0.20

### Patch Changes

- 709ca42: Fix: Export `TopBarContainerLeft` and `TopBarContainerRight`

## 0.0.19

### Patch Changes

- 48490f5: Add Select component
- d38c18b: Fix AvatarLink and AvatarButton exports

## 0.0.18

### Patch Changes

- b32cc1b: Add InlineMessage component

## 0.0.17

### Patch Changes

- aa71fb4: Add Menu component
- 6ee081c: Add TopBarNavigation component
- 4bdb89c: Add TopBar and TopBarItem components
- c3ab553: Update menu component with styling feedback
- 178c992: Restructure color tokens, and therefore buttons - iconbutton iconlinkbutton and linkbutton.
  Add XXS height variable.

## 0.0.16

### Patch Changes

- 60e80cd: Add Menu component
- 9ed1a9f: Update component theme type exports to be partial type

## 0.0.15

### Patch Changes

- b2814a0: Add TopBar ToolName component

## 0.0.14

### Patch Changes

- b74e7c3: update peer dependencies to support range of react-aria-components
- 21a3976: BREAKING: Removes the `GlobalResetStyles` export from `index.ts`

  Instead:
  - For consumers using emotion - `import { GlobalResetStyles } from @guardian/stand/utils`
  - For consumers using css styling - `import '@guardian/stand/util/reset.css'`

## 0.0.13

### Patch Changes

- 9dad093: Add Favicon component

## 0.0.12

### Patch Changes

- 119bff5: Publish `@guardian/stand` from guardian/stand repo

## 0.0.11

### Patch Changes

- 241affd: Add `IconButton` and `LinkIconButton` components
- 21e8dc5: Add `icon` prop to `Button` and `LinkButton` components

## 0.0.10

### Patch Changes

- 53fe46c: Add `Typography` component
- 27ab298: Add `Button` and `LinkButton` components
- 26b605d: Add `Icon` component and documentation
- dd7e2c2: Add `UserMenu` editorial component

## 0.0.9

### Patch Changes

- c3da8db: Fix `css` exports
- 8322a9e: Add additional foundations design tokens
- c264d80: BREAKING: use subpath exports for components

  Old:

  ```ts
  import { Byline, TagAutocomplete, TagTable } from '@guardian/stand';
  ```

  New:

  ```ts
  import { Byline } from '@guardian/stand/byline';
  import { TagAutocomplete, TagTable } from '@guardian/stand/tag-picker';
  ```

## 0.0.8

### Patch Changes

- 0a5bf39: Use typography shorthand for style dictionary typescript build
- df3d28f: Add `base` and `semantic` tokens for `spacing`, `sizing`, and `radius`. Update some existing tokens.

## 0.0.7

### Patch Changes

- 44a43ef: Add `convertTypographyToEmotionObjectStyle` helper function if using emotion css object styles

## 0.0.6

### Patch Changes

- a287cfd:
  - Start adding design tokens, through css and js/ts, for colours and typography
  - Add TagAutocomplete and TagTable components in testing

## 0.0.5

### Patch Changes

- a315cae: Testing changesets and canaries

## 0.0.4

### Patch Changes

- 0ec4660: Attempt to use trusted publishing

## 0.0.3

### Patch Changes

- dd7d224: Fix release to only publish dist files

## 0.0.2

### Patch Changes

- cf56688: Add changesets
