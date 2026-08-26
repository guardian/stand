import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
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
	grid-template-columns: ${baseSpacing['48Px']} minmax(0, 1fr);
	gap: ${baseSpacing['12Px']};
	align-items: center;
	align-self: start;
`;

const alertImageStyles = css`
	display: block;
	width: ${baseSpacing['48Px']};
	height: ${baseSpacing['40Px']};
	object-fit: cover;
`;

const alertTextStyles = css`
	display: flex;
	min-width: 0;
	flex-direction: column;
	gap: ${baseSpacing['2Px']};
`;

const metadataStyles = css`
	display: flex;
	align-items: center;
	gap: ${baseSpacing['4Px']};
	color: ${semanticColors.text.weak};
`;

const regionsStyles = css`
	display: flex;
	flex-wrap: wrap;
	gap: ${baseSpacing['4Px']};
`;

const meta = {
	title: 'Stand/Editorial Components/Table',
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
			columns={{
				sm: 'minmax(0, 1fr)',
				md: 'minmax(0, 1.1fr) minmax(260px, 0.9fr)',
				lg: 'minmax(280px, 2.4fr) 64px minmax(180px, 1.3fr) minmax(120px, 1fr) 180px 72px',
			}}
			headerVisibleFrom="lg"
		>
			<TableHeader>
				<TableColumnHeader isRowHeader>Sent alerts</TableColumnHeader>
				<TableColumnHeader>Sent from</TableColumnHeader>
				<TableColumnHeader>Sent by</TableColumnHeader>
				<TableColumnHeader>Sent to</TableColumnHeader>
				<TableColumnHeader>Send time</TableColumnHeader>
				<TableColumnHeader>Status</TableColumnHeader>
			</TableHeader>
			<TableBody>
				{alerts.map((alert) => (
					<TableRow key={alert.id} id={alert.id}>
						<TableCell
							gridColumn={{ sm: '1', md: '1', lg: '1' }}
							gridRow={{ md: '1 / span 5', lg: 'auto' }}
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
						<TableCell
							compactLabel="Sent from: "
							gridColumn={{ md: '2', lg: '2' }}
							gridRow={{ md: '1', lg: 'auto' }}
						>
							{alert.sentFrom}
						</TableCell>
						<TableCell
							compactLabel="Sent by: "
							gridColumn={{ md: '2', lg: '3' }}
							gridRow={{ md: '2', lg: 'auto' }}
						>
							{alert.sentBy}
						</TableCell>
						<TableCell
							compactLabel="Sent to: "
							gridColumn={{ md: '2', lg: '4' }}
							gridRow={{ md: '3', lg: 'auto' }}
						>
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
						<TableCell
							compactLabel="Sent time: "
							gridColumn={{ md: '2', lg: '5' }}
							gridRow={{ md: '4', lg: 'auto' }}
						>
							{alert.sentAt}
						</TableCell>
						<TableCell
							compactLabel="Status: "
							gridColumn={{ md: '2', lg: '6' }}
							gridRow={{ md: '5', lg: 'auto' }}
						>
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
			columns={{
				sm: '1fr',
				md: '1fr auto',
				lg: 'minmax(160px, 2fr) 1fr auto',
			}}
		>
			<TableHeader>
				<TableColumnHeader isRowHeader>Name</TableColumnHeader>
				<TableColumnHeader>Team</TableColumnHeader>
				<TableColumnHeader>Status</TableColumnHeader>
			</TableHeader>
			<TableBody>
				<TableRow id="alex-smith">
					<TableCell>Alex Smith</TableCell>
					<TableCell compactLabel="Team: ">Editorial tools</TableCell>
					<TableCell compactLabel="Status: ">Active</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
} satisfies Story;
