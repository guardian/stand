// Component Name
export const componentName = 'Tabs';

// Tabs - React sandbox example
export const componentTsx = /* javascript */ `import { Tabs } from '@guardian/stand/Tabs';

export const Component = () => (
	<>
		<Tabs>
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="raven">Tab 2</Tabs.Tab>
				<Tabs.Tab id="tab3" isDisabled>Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
		<Tabs orientation="vertical">
			<Tabs.TabList aria-label="Settings">
				<Tabs.Tab id="general">General</Tabs.Tab>
				<Tabs.Tab id="appearance">Appearance</Tabs.Tab>
				<Tabs.Tab id="notifications">Notifications</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="general">General settings</Tabs.TabPanel>
				<Tabs.TabPanel id="appearance">Appearance settings</Tabs.TabPanel>
				<Tabs.TabPanel id="notifications">Notification settings</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	</>
);
`;
