// Component Name
export const componentName = 'Avatar';

// Avatar - React sandbox example
export const componentTsx = /* javascript */ `import { Avatar } from '@guardian/stand/avatar';

export const Component = () => {
	return (
		<>
			<Avatar initials="AB" color="blue" />
			<Avatar
				src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
				alt="Mahesh Makani"
				initials="MM"
				color="blue"
				size="md"
			/>
		</>
	);
};
`;

// Avatar - Custom component - CSS example
export const componentCss = /* css */ `@import "@guardian/stand/component/avatar.css";

    /* example setup of avatar style using md size and blue color */
    .stand-avatar {
    	display: var(--component-avatar-shared-display);
    	align-items: var(--component-avatar-shared-align-items);
    	justify-content: var(--component-avatar-shared-justify-content);
    	overflow: var(--component-avatar-shared-overflow);
    	flex-shrink: var(--component-avatar-shared-flex-shrink);
    	border-radius: var(--component-avatar-shared-border-radius);
    	background-color: var(--component-avatar-shared-color-blue-background);
    	width: var(--component-avatar-md-size);
    	height: var(--component-avatar-md-size);
    	border: var(--component-avatar-shared-color-blue-border);
    	color: var(--component-avatar-shared-color-blue-text);
    	font: var(--component-avatar-md-typography-font);
    	letter-spacing: var(--component-avatar-md-typography-letter-spacing);
    	font-variation-settings: "wdth"
    	var(--component-avatar-md-typography-font-width);
    }

    /* example setup for avatar image */
    .stand-avatar > img {
    	width: 100%;
    	height: 100%;
    	object-fit: cover;
    }`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-avatar">AB</div>
	<div class="stand-avatar">
		<img
			src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
			alt="Mahesh Makani"
		/>
	</div>
</div>`;

// Avatar - Custom component - JS example
export const componentJs = /* javascript */ `
	// for ts/js
	import { componentAvatar } from "@guardian/stand";

	const style = \`
	display: \${componentAvatar.shared.display};
	align-items: \${componentAvatar.shared["align-items"]};
	justify-content: \${componentAvatar.shared["justify-content"]};
	overflow: \${componentAvatar.shared.overflow};
	flex-shrink: \${componentAvatar.shared["flex-shrink"]};
	border-radius: \${componentAvatar.shared["border-radius"]};
	background-color: \${componentAvatar.shared.color.blue.background};
	width: \${componentAvatar.md.size};
	height: \${componentAvatar.md.size};
	border: \${componentAvatar.shared.color.blue.border};
	color: \${componentAvatar.shared.color.blue.text};
	font: \${componentAvatar.md.typography.font};
	letter-spacing: \${componentAvatar.md.typography.letterSpacing};
	font-variation-settings: 'wdth' \${componentAvatar.md.typography.fontWidth};
	\`;

	const imgStyle = \`
	width: 100%;
	height: 100%;
	object-fit: cover;
	\`;

	// e.g. adding to DOM using vanilla JS styles
	document.getElementById("app").innerHTML = \`

	<div class="container">
		<div style="\${style}">AB</div>
		<div style="\${style}">
		<img
			style="\${imgStyle}"
			src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
			alt="Mahesh Makani"
		/>
		</div>
	</div>
\`;
`;
