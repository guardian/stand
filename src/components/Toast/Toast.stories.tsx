import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../Button/Button';
import { ToastQueue, ToastRegion } from './Toast';
import type { ToastContent, ToastLevel, ToastProps } from './types';

const meta = {
	title: 'Stand/Tools Design System/Components/Toast',
	component: ToastRegion,
} satisfies Meta<typeof ToastRegion>;

type Story = StoryObj<typeof ToastRegion>;

export default meta;

const ToastExample = ({
	contents,
	toastProps,
}: {
	contents: ToastContent[];
	toastProps?: Omit<ToastProps, 'toast'>;
}) => {
	const [queue] = useState(
		() => new ToastQueue<ToastContent>({ maxVisibleToasts: contents.length }),
	);

	useEffect(() => {
		const keys = [...contents].reverse().map((content) => queue.add(content));
		return () => keys.forEach((key) => queue.close(key));
	}, [contents, queue]);

	return <ToastRegion queue={queue} toastProps={toastProps} />;
};

const InteractiveToastExample = () => {
	const [queue] = useState(
		() => new ToastQueue<ToastContent>({ maxVisibleToasts: 1 }),
	);

	return (
		<>
			<Button
				onPress={() => {
					queue.clear();
					queue.add(
						{
							level: 'success',
							title: 'Changes saved',
							subject: 'Your updates are now available.',
							showIcon: true,
						},
						{ timeout: 5000 },
					);
				}}
			>
				Trigger toast
			</Button>
			<ToastRegion queue={queue} />
		</>
	);
};

const levelContent: Record<ToastLevel, Omit<ToastContent, 'level'>> = {
	error: {
		title: 'Something went wrong',
		subject: 'We could not save your changes. Please try again.',
	},
	warning: {
		title: 'Check your details',
		subject: 'Some information may need your attention.',
	},
	success: {
		title: 'Changes saved',
		subject: 'Your updates are now available.',
	},
	information: {
		title: 'New information available',
		subject: 'There has been an update since your last visit.',
	},
};

const levels = Object.entries(levelContent) as Array<
	[ToastLevel, Omit<ToastContent, 'level'>]
>;

const iconContents = levels.map(([level, content]) => ({
	...content,
	level,
	showIcon: true,
}));

const thumbnailContents = levels.map(([level, content]) => ({
	...content,
	level,
	thumbnail: <img src="https://picsum.photos/id/1060/128/128" alt="" />,
}));

const plainContents = levels.map(([level, content]) => ({
	...content,
	level,
}));

export const Interactive = {
	render: () => <InteractiveToastExample />,
} satisfies Story;

export const WithIcons = {
	render: () => <ToastExample contents={iconContents} />,
} satisfies Story;

export const WithThumbnails: Story = {
	render: () => <ToastExample contents={thumbnailContents} />,
	play: async ({ canvasElement }) => {
		const page = within(canvasElement.ownerDocument.body);
		const alerts = await page.findAllByRole('alert');
		const closeButtons = await page.findAllByRole('button', {
			name: 'Dismiss notification',
		});
		const content = alerts.at(0)!.getBoundingClientRect();
		const closeButton = closeButtons.at(0)!.getBoundingClientRect();

		await expect(closeButton.top).toBe(content.top);
	},
};

export const WithoutMedia = {
	render: () => <ToastExample contents={plainContents} />,
} satisfies Story;

export const WithAdditionalInformation = {
	render: () => (
		<ToastExample
			contents={[
				{
					...levelContent.information,
					level: 'information',
					showIcon: true,
					additionalInfo: 'Updated a few moments ago.',
				},
			]}
		/>
	),
} satisfies Story;

export const Dismissible: Story = {
	render: () => (
		<ToastExample
			contents={[
				{
					...levelContent.success,
					level: 'success',
					showIcon: true,
				},
			]}
		/>
	),
	play: async ({ canvasElement }) => {
		const page = within(canvasElement.ownerDocument.body);
		await expect(await page.findByRole('alert')).toHaveTextContent(
			'Changes savedYour updates are now available.',
		);
		await userEvent.click(
			await page.findByRole('button', { name: 'Dismiss notification' }),
		);
		await expect(page.queryByRole('alert')).not.toBeInTheDocument();
	},
};

export const CustomTheme = {
	render: () => (
		<ToastExample
			contents={[
				{
					...levelContent.information,
					level: 'information',
				},
			]}
			toastProps={{
				theme: {
					information: {
						backgroundColor: '#e8f0fb',
						accentColor: '#1054af',
					},
				},
				cssOverrides: css`
					border-left-width: 0.5rem;
				`,
			}}
		/>
	),
} satisfies Story;
