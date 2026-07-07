// Component Name
export const componentName = 'Tabs';

// Tabs - React sandbox example
export const componentTsx = /* javascript */ `import { Tabs } from '@guardian/stand/Tabs';

export const Component = () => (
	<Tabs>
		<Tabs.TabList aria-label="Example tabs">
			<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
			<Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
			<Tabs.Tab id="tab3" isDisabled>Tab 3</Tabs.Tab>
		</Tabs.TabList>
		<Tabs.TabPanels>
			<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
			<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
			<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
		</Tabs.TabPanels>
	</Tabs>
);
`;

// Tabs - Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/tabs.css';

.stand-tabs {
	display: var(--component-tabs-shared-display);
}

.stand-tabs[data-orientation='horizontal'] {
	flex-direction: var(--component-tabs-shared-orientation-horizontal-flex-direction);
}

.stand-tabs[data-orientation='vertical'] {
	flex-direction: var(--component-tabs-shared-orientation-vertical-flex-direction);
	width: var(--component-tabs-shared-orientation-vertical-width);
}
`;

export const componentHtml = /* html */ `<div class="stand-tabs" data-orientation="horizontal" role="tablist">
	<button role="tab" aria-selected="true" class="stand-tab">Tab 1</button>
	<button role="tab" aria-selected="false" class="stand-tab">Tab 2</button>
	<button role="tab" aria-selected="false" disabled class="stand-tab">Tab 3</button>
</div>
`;

// Tabs - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTabs } from "@guardian/stand";

const tabsStyle = \`
	display: \${componentTabs.tabs.shared.display};
\`;

const tabStyle = \`
	cursor: \${componentTabs.tab.shared.cursor};
	color: \${componentTabs.tab.shared.color};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${tabsStyle}" role="tablist">
		<button role="tab" style="\${tabStyle}">Tab 1</button>
		<button role="tab" style="\${tabStyle}">Tab 2</button>
	</div>
\`;
`;
