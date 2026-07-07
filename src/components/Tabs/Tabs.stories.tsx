import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Stand/Tools Design System/Components/Tabs',
	component: Tabs,
	parameters: {},
	args: {},
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export default meta;

export const Default = {
	name: 'Default',
	args: {},
	render: () => (
		<Tabs>
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const Vertical = {
	name: 'Vertical',
	args: {},
	render: () => (
		<Tabs orientation="vertical">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabDisabled = {
	name: 'Tab Disabled',
	args: {},
	render: () => (
		<Tabs>
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabDisabledVertical = {
	name: 'Tab Disabled Vertical',
	args: {},
	render: () => (
		<Tabs orientation="vertical">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIcon = {
	name: 'Tab with Icon',
	args: {},
	render: () => (
		<Tabs>
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings">
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconAndVertical = {
	name: 'Tab with Icon and Vertical',
	args: {},
	render: () => (
		<Tabs orientation="vertical">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings">
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconAndDisabled = {
	name: 'Tab with Icon and Disabled',
	args: {},
	render: () => (
		<Tabs>
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconAndDisabledVertical = {
	name: 'Tab with Icon and Disabled Vertical',
	args: {},
	render: () => (
		<Tabs orientation="vertical">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const DefaultSmall = {
	name: 'Default - Small',
	args: {},
	render: () => (
		<Tabs size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const VerticalSmall = {
	name: 'Vertical - Small',
	args: {},
	render: () => (
		<Tabs orientation="vertical" size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabDisabledSmall = {
	name: 'Tab Disabled - Small',
	args: {},
	render: () => (
		<Tabs size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabDisabledVerticalSmall = {
	name: 'Tab Disabled Vertical - Small',
	args: {},
	render: () => (
		<Tabs orientation="vertical" size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
				<Tabs.Tab id="tab2" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconSmall = {
	name: 'Tab with Icon - Small',
	args: {},
	render: () => (
		<Tabs size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings">
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconAndVerticalSmall = {
	name: 'Tab with Icon and Vertical - Small',
	args: {},
	render: () => (
		<Tabs orientation="vertical" size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings">
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconAndDisabledSmall = {
	name: 'Tab with Icon and Disabled - Small',
	args: {},
	render: () => (
		<Tabs size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;

export const TabWithIconAndDisabledVerticalSmall = {
	name: 'Tab with Icon and Disabled Vertical - Small',
	args: {},
	render: () => (
		<Tabs orientation="vertical" size="sm">
			<Tabs.TabList aria-label="Example tabs">
				<Tabs.Tab id="tab1" icon="home">
					Tab 1
				</Tabs.Tab>
				<Tabs.Tab id="tab2" icon="settings" isDisabled>
					Tab 2
				</Tabs.Tab>
				<Tabs.Tab id="tab3" icon="person">
					Tab 3
				</Tabs.Tab>
			</Tabs.TabList>
			<Tabs.TabPanels>
				<Tabs.TabPanel id="tab1">Content for Tab 1</Tabs.TabPanel>
				<Tabs.TabPanel id="tab2">Content for Tab 2</Tabs.TabPanel>
				<Tabs.TabPanel id="tab3">Content for Tab 3</Tabs.TabPanel>
			</Tabs.TabPanels>
		</Tabs>
	),
} satisfies Story;
