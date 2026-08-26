import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge/Badge';
import { Icon } from '../Icon/Icon';
import { Link } from '../Link/Link';
import { Typography } from '../Typography/Typography';
import {
	Table,
	TableBody,
	TableCell,
	TableColumnHeader,
	TableHeader,
	TableRow,
} from './Table';

const alerts = [
	{
		id: 1,
		title: 'Spain win World Cup',
		channel: 'Newsletter email',
		edition: 'Breaking news',
		sentFrom: 'US',
		sentBy: 'caroline.phinney@guardian.co.uk',
		regions: ['United Kingdom', 'Australia'],
		sentAt: '5 mins ago',
		image: 'https://picsum.photos/seed/world-cup/96/72',
	},
	{
		id: 2,
		title: 'Luigi Mangione due to appear in New York court',
		channel: 'Newsletter email',
		edition: 'Breaking news',
		sentFrom: 'US',
		sentBy: 'caroline.phinney@guardian.co.uk',
		regions: ['United States'],
		sentAt: '5 hours ago',
		image: 'https://picsum.photos/seed/court/96/72',
	},
	{
		id: 3,
		title: 'Scores dead in Colombia after powerful earthquake',
		channel: 'App alert',
		edition: 'Breaking news',
		sentFrom: 'UK',
		sentBy: 'fran.singh@guardian.co.uk',
		regions: ['United States', 'United Kingdom', 'Europe'],
		sentAt: '16:34pm BST 11 August 2026',
		image: 'https://picsum.photos/seed/earthquake/96/72',
	},
];

const alertCellStyles = css`
	display: grid;
	grid-template-columns: 56px minmax(0, 1fr);
	gap: 10px;
	align-items: center;
`;

const alertImageStyles = css`
	display: block;
	width: 56px;
	height: 42px;
	object-fit: cover;
`;

const alertTextStyles = css`
	display: flex;
	min-width: 0;
	flex-direction: column;
	gap: 2px;
`;

const metadataStyles = css`
	display: flex;
	align-items: center;
	gap: 4px;
	color: #545454;
`;

const regionsStyles = css`
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
`;

const meta = {
	title: 'Stand/Tools Design System/Components/Table',
	component: Table,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export default meta;

export const SentAlerts = {
	name: 'Sent alerts',
	render: () => (
		<Table
			aria-label="Sent alerts"
			columns="minmax(280px, 2.4fr) 64px minmax(180px, 1.3fr) minmax(120px, 1fr) 180px 72px"
			mobileColumns="minmax(0, 1fr) auto"
		>
			<TableHeader>
				<TableColumnHeader>Sent alerts</TableColumnHeader>
				<TableColumnHeader>Sent from</TableColumnHeader>
				<TableColumnHeader>Sent by</TableColumnHeader>
				<TableColumnHeader>Sent to</TableColumnHeader>
				<TableColumnHeader>Send time</TableColumnHeader>
				<TableColumnHeader>Status</TableColumnHeader>
			</TableHeader>
			<TableBody>
				{alerts.map((alert) => (
					<TableRow key={alert.id}>
						<TableCell
							isRowHeader
							mobileGridColumn="1 / -1"
							cssOverrides={alertCellStyles}
						>
							<img src={alert.image} alt="" css={alertImageStyles} />
							<div css={alertTextStyles}>
								<Link href="#">{alert.title}</Link>
								<Typography variant="bodyXs" cssOverrides={metadataStyles}>
									<Icon
										symbol={alert.channel === 'App alert' ? 'mobile' : 'mail'}
									/>
									{alert.channel} | {alert.edition}
								</Typography>
							</div>
						</TableCell>
						<TableCell hideOnMobile>{alert.sentFrom}</TableCell>
						<TableCell hideOnMobile>{alert.sentBy}</TableCell>
						<TableCell mobileLabel="Sent to: ">
							<span css={regionsStyles}>
								{alert.regions.map((region) => (
									<span key={region} aria-label={region} role="img">
										{region === 'United States'
											? '🇺🇸'
											: region === 'Australia'
												? '🇦🇺'
												: region === 'Europe'
													? '🇪🇺'
													: '🇬🇧'}
									</span>
								))}
							</span>
						</TableCell>
						<TableCell mobileLabel="Sent: ">{alert.sentAt}</TableCell>
						<TableCell mobileGridColumn="2" mobileLabel="Status: ">
							<Badge color="green" size="sm" weight="light">
								Sent
							</Badge>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
} satisfies Story;

export const CustomLayout = {
	name: 'Custom layout',
	render: () => (
		<Table
			aria-label="People"
			columns="minmax(160px, 2fr) 1fr auto"
			mobileColumns="1fr auto"
			compactAt="lg"
		>
			<TableHeader>
				<TableColumnHeader>Name</TableColumnHeader>
				<TableColumnHeader>Team</TableColumnHeader>
				<TableColumnHeader>Status</TableColumnHeader>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell isRowHeader>Alex Smith</TableCell>
					<TableCell mobileLabel="Team: ">Editorial tools</TableCell>
					<TableCell mobileLabel="Status: ">Active</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
} satisfies Story;
