// Component Name
export const componentName = 'IntendedAudienceSignifier';

// IntendedAudienceSignifier - React sandbox example
export const componentTsx = /* javascript */ `import { IntendedAudienceSignifier } from '@guardian/stand/intended-audience-signifier';

export const Component = () => (
	<>
		<IntendedAudienceSignifier source="UK" intendedAudience='Global' />
		<IntendedAudienceSignifier source="US" intendedAudience='Global' />
		<IntendedAudienceSignifier source="AUS" intendedAudience='Global' />
		<IntendedAudienceSignifier source="UK" intendedAudience='Domestic for Domestic' />
		<IntendedAudienceSignifier source="US" intendedAudience='Domestic for Domestic' />
		<IntendedAudienceSignifier source="AUS" intendedAudience='Domestic for Domestic' />
		<IntendedAudienceSignifier source="UK" intendedAudience='Domestic For Global' />
		<IntendedAudienceSignifier source="US" intendedAudience='Domestic For Global' />
		<IntendedAudienceSignifier source="AUS" intendedAudience='Domestic For Global' />
		<IntendedAudienceSignifier source="UK" intendedAudience='Domestic For Global' theme={{ color: '#c70000' }} />
		<IntendedAudienceSignifier source="AUS" intendedAudience='Global' cssOverrides={{ border-color: '#0000FF',align-items: 'flex-end' }}/>
		<IntendedAudienceSignifier source="UK" intendedAudience="Don't know" />
		<IntendedAudienceSignifier source="US" intendedAudience="Don't know" />
		<IntendedAudienceSignifier source="AUS" intendedAudience="Don't know" />
		<IntendedAudienceSignifier source="UK" intendedAudience='US' />
		<IntendedAudienceSignifier source="US" intendedAudience='UK' />
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
				<svg
				height="12px"
				xmlns="http://www.w3.org/2000/svg"
				id="flag-icons-gb"
				viewBox="0 0 640 480"
			>
				<path fill="#012169" d="M0 0h640v480H0z" />
				<path
					fill="#FFF"
					d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
				/>
				<path
					fill="#C8102E"
					d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
				/>
				<path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
				<path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
			</svg>
			<svg class="js-stand-intended-audience-signifier-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M5.75 0H3.5L6 3.5L3.5 7H5.75L8.25 3.5L5.75 0Z" />
				<path d="M2.25 0H0L2.5 3.5L0 7H2.25L4.75 3.5L2.25 0Z" />
			</svg>
					<svg
				height="12px"
				xmlns="http://www.w3.org/2000/svg"
				id="flag-icons-gb"
				viewBox="0 0 640 480"
			>
				<path fill="#012169" d="M0 0h640v480H0z" />
				<path
					fill="#FFF"
					d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
				/>
				<path
					fill="#C8102E"
					d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
				/>
				<path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
				<path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
			</svg>
		</div>

		<div class="js-stand-intended-audience-signifier" style="color: #c70000; border-color: #c70000;">
			<svg
				height="12px"
				xmlns="http://www.w3.org/2000/svg"
				id="flag-icons-au"
				viewBox="0 0 640 480"
			>
				<path fill="#00008B" d="M0 0h640v480H0z" />
				<path
					fill="#fff"
					d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
				/>
				<path
					fill="red"
					d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
				/>
				<path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
				<path fill="red" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
				<path
					fill="#fff"
					d="m527 396.7-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6zm-3.7-117.2 2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6zm-104.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8L387 178l6.7 19.3 19.4-6.3-10.9 17.3 17.1 11.2ZM623 186.7l-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18zm-96.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8-15.1 14.4 2.4-20.7-20.7-2.8 17.7-11L467 73.5l19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6zM234 385.7l-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8 38.9-24.8-24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Z"
				/>
			</svg>
			<svg class="js-stand-intended-audience-signifier-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M5.75 0H3.5L6 3.5L3.5 7H5.75L8.25 3.5L5.75 0Z" />
				<path d="M2.25 0H0L2.5 3.5L0 7H2.25L4.75 3.5L2.25 0Z" />
			</svg>
			<svg
				height="12px"
				xmlns="http://www.w3.org/2000/svg"
				id="flag-icons-au"
				viewBox="0 0 640 480"
			>
				<path fill="#00008B" d="M0 0h640v480H0z" />
				<path
					fill="#fff"
					d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
				/>
				<path
					fill="red"
					d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
				/>
				<path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
				<path fill="red" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
				<path
					fill="#fff"
					d="m527 396.7-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6zm-3.7-117.2 2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6zm-104.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8L387 178l6.7 19.3 19.4-6.3-10.9 17.3 17.1 11.2ZM623 186.7l-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18zm-96.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8-15.1 14.4 2.4-20.7-20.7-2.8 17.7-11L467 73.5l19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6zM234 385.7l-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8 38.9-24.8-24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Z"
				/>
			</svg>
		</div>
	</div>
\`;
`;
