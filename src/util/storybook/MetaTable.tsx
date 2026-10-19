import { css } from '@emotion/react';
import { Badge } from '../../Badge';
import { LinkButton } from '../../LinkButton';
import { Tooltip } from '../../Tooltip';

const UnverifiedBadge = () => (
	<tr>
		<th scope="row">Verification</th>
		<td>
			<Badge size="sm" color="yellow" weight="strong">
				Not yet verified by the Design Systems Team
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
				This Tools Design System component is awaiting review by the design
				systems team for accessibility, implementation, and adherence to design
				guidelines. Collection membership does not mean it has been verified.
			</Tooltip>
		</td>
	</tr>
);

const VerifiedBadge = () => (
	<tr>
		<th scope="row">Verification</th>
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
		<td colSpan={3}>
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
		<td colSpan={3}>
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

type CollectionProps =
	| {
			collection?: 'Tools Design System';
			designSystemTeamVerified: boolean;
	  }
	| {
			collection: 'Sharable non-Design System Components';
			designSystemTeamVerified?: never;
	  };

type MetaTableProps = CollectionProps & {
	/**
	 * Link to the Figma design for this component.
	 */
	figmaLink?: string;
	/**
	 * Link to the React Aria documentation for this component.
	 */
	reactAriaLink?: string;
};

export const MetaTable = ({
	collection = 'Tools Design System',
	designSystemTeamVerified,
	figmaLink,
	reactAriaLink,
}: MetaTableProps) => (
	<table>
		<tbody>
			<tr>
				<th scope="row">Collection</th>
				<td colSpan={2}>
					<a
						href={
							collection === 'Tools Design System'
								? '?path=/docs/stand-tools-design-system-introduction--docs'
								: '?path=/docs/stand-sharable-non-design-system-components-introduction--docs'
						}
						target="_top"
					>
						{collection}
					</a>
				</td>
			</tr>
			{collection === 'Sharable non-Design System Components' ? (
				<tr>
					<th scope="row">Verification</th>
					<td colSpan={2}>Not required for this collection</td>
				</tr>
			) : designSystemTeamVerified ? (
				<VerifiedBadge />
			) : (
				<UnverifiedBadge />
			)}
			{figmaLink && <FigmaLink figmaLink={figmaLink} />}
			{reactAriaLink && <ReactAriaLink reactAriaLink={reactAriaLink} />}
		</tbody>
	</table>
);
