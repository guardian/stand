// Component Name
export const componentName = 'IntendedAudienceSignifier';

// IntendedAudienceSignifier - React sandbox example
export const componentTsx = /* javascript */ `import { IntendedAudienceSignifier } from '@guardian/stand/intended-audience-signifier';

export const Component = () => (
	<>
		<IntendedAudienceSignifier sourceTag="uk" intendedAudienceTag="us" />
		<IntendedAudienceSignifier sourceTag="uk" intendedAudienceTag="au" />
		<IntendedAudienceSignifier sourceTag="uk" intendedAudienceTag="global" />
		<IntendedAudienceSignifier sourceTag="us" intendedAudienceTag="au" />
		<IntendedAudienceSignifier sourceTag="us" intendedAudienceTag="global" />
		<IntendedAudienceSignifier sourceTag="au" intendedAudienceTag="global" />
		<IntendedAudienceSignifier
			sourceTag="uk"
			intendedAudienceTag="global"
			theme={{ color: '#c70000' }}
		/>
		<IntendedAudienceSignifier
			sourceTag="au"
			intendedAudienceTag="global"
			cssOverrides={{ borderColor: '#0000FF', alignItems: 'flex-end' }}
		/>
	</>
);
`;

// IntendedAudienceSignifier - Custom component - CSS example
export const componentCss = /* css */ `
/* import the intended audience signifier styles */
@import '@guardian/stand/component/intendedAudienceSignifier.css';

.stand-intended-audience-signifier {
	color: var(--component-intended-audience-signifier-color);
	border-width: 1px;
	border-style: solid;
	border-color: var(--component-intended-audience-signifier-color);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 2px;
	padding: 2px 4px;
	box-sizing: border-box;
	width: fit-content;
	gap: 8px;
}

.stand-intended-audience-signifier-flag {
	height: 12px;
}

.stand-intended-audience-signifier-chevron {
	width: 13px;
	height: 13px;
	fill: #545454;
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<div class="stand-intended-audience-signifier">
		<svg class="stand-intended-audience-signifier-flag" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path fill="#012169" d="M0 0h640v480H0z" />
		</svg>
		<svg class="stand-intended-audience-signifier-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M5.75 0H3.5L6 3.5L3.5 7H5.75L8.25 3.5L5.75 0Z" />
			<path d="M2.25 0H0L2.5 3.5L0 7H2.25L4.75 3.5L2.25 0Z" />
		</svg>
		<svg class="stand-intended-audience-signifier-flag" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path fill="#bd3d44" d="M0 0h640v480H0" />
		</svg>
	</div>

	<div class="stand-intended-audience-signifier" style="--component-intended-audience-signifier-color: #c70000;">
		<span>AU</span>
		<svg class="stand-intended-audience-signifier-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M5.75 0H3.5L6 3.5L3.5 7H5.75L8.25 3.5L5.75 0Z" />
			<path d="M2.25 0H0L2.5 3.5L0 7H2.25L4.75 3.5L2.25 0Z" />
		</svg>
		<span>GLOBAL</span>
	</div>
</div>
`;

// IntendedAudienceSignifier - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentIntendedAudienceSignifier } from "@guardian/stand";

const sheet = new CSSStyleSheet();

sheet.replaceSync(\`
	.js-stand-intended-audience-signifier {
		color: \${componentIntendedAudienceSignifier.color};
		border-width: 1px;
		border-style: solid;
		border-color: \${componentIntendedAudienceSignifier.color};
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 2px;
		padding: 2px 4px;
		box-sizing: border-box;
		width: fit-content;
		gap: 8px;
	}

	.js-stand-intended-audience-signifier-chevron {
		width: 13px;
		height: 13px;
		fill: #545454;
	}
\`);

document.adoptedStyleSheets.push(sheet);

document.getElementById("app").innerHTML = \`
	<div class="container flow-column">
		<div class="js-stand-intended-audience-signifier">
			<span>UK</span>
			<svg class="js-stand-intended-audience-signifier-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M5.75 0H3.5L6 3.5L3.5 7H5.75L8.25 3.5L5.75 0Z" />
				<path d="M2.25 0H0L2.5 3.5L0 7H2.25L4.75 3.5L2.25 0Z" />
			</svg>
			<span>US</span>
		</div>

		<div class="js-stand-intended-audience-signifier" style="color: #c70000; border-color: #c70000;">
			<span>AU</span>
			<svg class="js-stand-intended-audience-signifier-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M5.75 0H3.5L6 3.5L3.5 7H5.75L8.25 3.5L5.75 0Z" />
				<path d="M2.25 0H0L2.5 3.5L0 7H2.25L4.75 3.5L2.25 0Z" />
			</svg>
			<span>GLOBAL</span>
		</div>
	</div>
\`;
`;
