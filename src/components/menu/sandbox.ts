// Component Name
export const componentName = 'Menu';

// Menu - React sandbox example
export const componentTsx = /* javascript */ `import { Menu } from '@guardian/stand/menu';

export const Component = () => (
	<Menu>Hello</Menu>
);
`;

// Menu - Custom component - CSS example
export const componentCss = /* css */ `
/* import the menu styles */
@import '@guardian/stand/component/menu.css';

.stand-menu {
	display: var(--component-menu-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-menu">Hello</div>
</div>
`;

// Menu - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentMenu } from "@guardian/stand";

const style = \`
	display: \${componentMenu.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
