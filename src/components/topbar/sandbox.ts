// Component Name
export const componentName = 'TopBar';

// TopBar - React sandbox example
export const componentTsx = /* javascript */ `import { TopBar, TopBarToolName } from '@guardian/stand/TopBar';

export const Component = () => (
	<TopBar><TopBarToolName name="Composer" /></TopBar>
);
`;

// }; - Custom component - CSS example
export const componentCss = /* css */ `
/* import the styles */
@import '@guardian/stand/component/TopBar.css';

.stand-top-bar {
	display: var(--component-top-bar-display);
}
`;

export const componentHtml = /* html */ `
<div class="container">
	<div class="stand-top-bar">
		<div class="css-1ozkauk-TopBar">
		<div class="css-l7bj66-TopBarItem">
			<div class="css-132cki5-TopBarToolName">
			<div class="css-lve7a-Favicon">C</div>
			<div class="css-sex2cu-TopBarToolName">CssOverides</div>
			</div></div>
			<div class="css-l7bj66-TopBarItem">Top Bar</div>
		</div>
		<div class="css-1ozkauk-TopBar">

	</div>
	</div>
</div>
`;

// TopBar - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBar } from "@guardian/stand";

const style = \`
	display: \${componentTopBar.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
