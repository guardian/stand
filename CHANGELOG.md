# @guardian/stand

## 0.0.60

### Patch Changes

- 10c8079: add html preview loader
  add skills files for component docs

## 0.0.59

### Patch Changes

- 50e15bd: Updates design tokens to add `semantic.colors.text.link` and `semantic.colors.fill.errorWeaker`
- 8c2c589: Reduces top margin of `TextInput` and `TextArea` to make consistent with `Select` component

## 0.0.58

### Patch Changes

- 494e4ee: Add `orientation` prop to `RadioGroup`

## 0.0.57

### Patch Changes

- 2825eda: Add Tabs component
- ccc9804: BREAKING: update `react-aria-components` peer dependency range from `>= 1.13.0 <= 1.18.0` to `>= 1.14.0 <= 1.19.0`

## 0.0.56

### Patch Changes

- 487126c: Add `ButtonGroup` component

## 0.0.55

### Patch Changes

- af4a3d5: Updates design tokens
  - `base.colors.cyan.800` - changed from `#b8d8e7` to `#c5dfec`
  - Add `semantic.colors.fill.selectedWeak`,`semantic.colors.fill.selectedHoverWeak`, `semantic.colors.fill.selectedPressedWeak`, `semantic.colors.fill.selectedHoverStrong`, `semantic.colors.fill.selectedPressedStrong`
  - Add `semantic.sizing.floatingUi.maxWidthPx`

## 0.0.54

### Patch Changes

- 77ada78: add enhancements to tag picker and tag table

## 0.0.53

### Patch Changes

- cba8453: Fix: `TopBarNavigation` should only have margin-left applied on text when there is also an icon present

## 0.0.52

### Patch Changes

- 6887e50: Add `Modal` component
- fce23c5: Update `Typography` component to be based on react-aria-components `Text` component for better compatibility with other react aria based components. This change also adds `react-aria-components` as a peer dependency to the component.

## 0.0.51

### Patch Changes

- f0b1903: - add opinated TagPicker component
  - remove the TagAutocomplete

## 0.0.50

### Patch Changes

- acfd083: Adjust title of intended audience signifier to be simpler when source and target are the same

## 0.0.49

### Patch Changes

- df5a35c: - BREAKING: Form input components, e.g. Select, TextArea, TextInput etc., now set a max width of 450px by default. To use previous behaviour, i.e fluid (100% container) width, apply the `fluid` prop on the corresponding input field
- c7f8b00: pass the theme for the Select down to the listbox
- 3b66378: - Add new design tokens
  - Colours
  - Semantic max width for input fields
  - Properly remove typography from IntendedAudienceSignifier

## 0.0.48

### Patch Changes

- 3101d52: `Select`/`Option`: Fix popover alignment, now uses correct offset and padding
  `Select`/`Option`: Fix popover width to match the select trigger width
- 58b5049: `Select`/`Option`: Fix selection value

## 0.0.47

### Patch Changes

- 15a5788: Allow downstream projects to install Prosemirror packages that match same major version

## 0.0.46

### Patch Changes

- 9cbdb96: Update peer deps compatible range for `react-aria-components` to `>= 1.13.0 <= 1.18.0`
- f0b6538: Source / target props for IntendedAudience now match with expected values in tag paths

  Font has been removed from IntendedAudienceSignifierTheme

  Also added mapTagsToSourceAndTarget() utility function

## 0.0.45

### Patch Changes

- 36920eb: Autocomplete supports enter to add first option

## 0.0.44

### Patch Changes

- 5844d9e: Add new prop 'renderLabel' to form components to render a custom label.
  This is to allow the label to be rendered with links or tooltips, which is not possible with the default string label prop.

## 0.0.43

### Patch Changes

- c340b29: add additional semantic tokens for grid, radius, and spacing

## 0.0.42

### Patch Changes

- 23877a8: change props for intendedAudienceSignifier

## 0.0.41

### Patch Changes

- ad23f61: - Migrate to tsdown and rolldown
  - Automate tsdown/style dictionary configuration
  - Package validation
    - `@guardian/stand/component/tagAutocomplete.css` is now `@guardian/stand/component/autocomplete.css` as the former was a typo.
    - Fixes type resolution - [before](https://arethetypeswrong.github.io/?p=%40guardian%2Fstand%400.0.40) and [after](https://arethetypeswrong.github.io/?p=%40guardian%2Fstand%400.0.0-canary-20260521075506)

  No changes should be required, but if you encounter any issues, please report them to us.

## 0.0.40

### Patch Changes

- d81f980: Update dev dependencies

## 0.0.39

### Patch Changes

- b425115: BREAKING: Standardise tokens and styles to use camelCase. May require some minor refactoring to pick up correct styles.
- f3ad3aa: add aria label to IntendedAudienceSignifier
- 6e97450: BREAKING: React components now use PascalCase e.g `import { AlertBanner } from '@guardian/stand/alert-banner';` -> `import { AlertBanner } from '@guardian/stand/AlertBanner';`. For css, everything is now camelCase (this only affects TopBar css), i.e `import '@guardian/stand/component/TopBar.css'` -> `import '@guardian/stand/component/topBar.css'`.

## 0.0.38

### Patch Changes

- 22f9cf4: Change the layout API to export wrapper components for the slots.

## 0.0.37

### Patch Changes

- 3002dfb: correct intendedAudienceSignifier styling

## 0.0.36

### Patch Changes

- eae19e0: Add `Grid` and `Item` components
- c564261: Add `Layout` and `Sidebar` components

## 0.0.35

### Patch Changes

- e5271dc: BREAKING: Breakpoints have been simplified to `sm`, `md`, and `lg`

  New breakpoint breakdown:

  `sm` -> 0px - 830px (generally mobile)
  `md` -> 830px - 1056px (generally tablet/small desktop)
  `lg` -> 1056px+ (desktop)

## 0.0.34

### Patch Changes

- b73e53b: add intendedAudienceSignifier

## 0.0.33

### Patch Changes

- 2fd8804: Add Link component which extends the React Aria Link with additional typography variant prop and styling.

## 0.0.32

### Patch Changes

- 0f1160b: Add DatePicker component

## 0.0.31

### Patch Changes

- bcb7595: Expose collapsed menu button color and specific border sides from TopBar theme

## 0.0.30

### Patch Changes

- a32c7c5: Extract a more generic Autocomplete for export and use in TagAutocomplete

## 0.0.29

### Patch Changes

- 443d0cf: Fix TopBar responsive menu positioning

## 0.0.28

### Patch Changes

- 4466180: Form Inputs no longer set `max-width` and instead width should be defined by parent element
- 077ae9c: Add breakpoints and responsive TopBar
- c68d8a0: add new semantic colours to ts and css exports

      	'disabled-inverse'
      	'link'
      	'link-hover'
      	'link-pressed'

## 0.0.27

### Patch Changes

- e008ac7: Export Select Option correctly

## 0.0.26

### Patch Changes

- 45215c1: Add AlertBanner component
- b1340b7: Update peer deps compatible range for `react-aria-components` to `>= 1.13.0 <= 1.17.0`

## 0.0.25

### Patch Changes

- b4673bc: Apply minor fixes
- d3e9d5f: Propagate TopBar theme through its subcomponents

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
