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
	align-items: var(--component-menu-shared-align-items);
	justify-content: var(--component-menu-shared-justify-content);
	user-select: var(--component-menu-shared-user-select);
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
	align-items: \${componentMenu.shared["align-items"]};
	justify-content: \${componentMenu.shared["justify-content"]};
	user-select: \${componentMenu.shared["user-select"]};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
