import { css } from '@emotion/react';
import { Badge } from '../../Badge';
import { LinkButton } from '../../LinkButton';
import { Tooltip } from '../../Tooltip';

const UnverifiedBadge = () => (
	<tr>
		<td>
			<Badge size="sm" color="yellow" weight="strong">
				Unverified by the Design Systems Team
			</Badge>
		</td>
		<td
			css={css`
				> button {
					vertical-align: text-bottom;
				}
			`}
		>
			<Tooltip>
				This component was implemented by the community. While it is functional
				and usable, the design systems team has not yet completed it&apos;s full
				review, which includes verifying accessibility, implementation, and
				adherence to design guidelines.
			</Tooltip>
		</td>
	</tr>
);

const VerifiedBadge = () => (
	<tr>
		<td>
			<Badge size="sm" color="green" weight="strong">
				Verified by the Design Systems Team
			</Badge>
		</td>
		<td
			css={css`
				> button {
					vertical-align: text-bottom;
				}
			`}
		>
			<Tooltip>
				This component has been reviewed and approved by the design systems
				team, ensuring accessibility, proper implementation, and adherence to
				design guidelines. Please report any bugs or issues you encounter to the
				design systems team.
			</Tooltip>
		</td>
	</tr>
);

const FigmaLink = ({ figmaLink }: { figmaLink: string }) => (
	<tr>
		<td colSpan={2}>
			<LinkButton
				href={figmaLink}
				target="_blank"
				rel="noopener noreferrer"
				size="xs"
				variant="tertiary"
			>
				View in Figma
			</LinkButton>
		</td>
	</tr>
);

const ReactAriaLink = ({ reactAriaLink }: { reactAriaLink: string }) => (
	<tr>
		<td colSpan={2}>
			<LinkButton
				href={reactAriaLink}
				target="_blank"
				rel="noopener noreferrer"
				size="xs"
				variant="tertiary"
			>
				View in React Aria Docs
			</LinkButton>
		</td>
	</tr>
);

interface MetaTableProps {
	/**
	 * Whether the component has been verified by the Design Systems Team.
	 */
	designSystemTeamVerified: boolean;
	/**
	 * Link to the Figma design for this component.
	 */
	figmaLink?: string;
	/**
	 * Link to the React Aria documentation for this component.
	 */
	reactAriaLink?: string;
}

export const MetaTable = ({
	designSystemTeamVerified,
	figmaLink,
	reactAriaLink,
}: MetaTableProps) => (
	<table>
		<tbody>
			{designSystemTeamVerified ? <VerifiedBadge /> : <UnverifiedBadge />}
			{figmaLink && <FigmaLink figmaLink={figmaLink} />}
			{reactAriaLink && <ReactAriaLink reactAriaLink={reactAriaLink} />}
		</tbody>
	</table>
);
