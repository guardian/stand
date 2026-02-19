import { css } from '@emotion/react';
import HomeIcon from '@material-design-icons/svg/outlined/home.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseSizing, baseSpacing, semanticSizing } from '../..';
import { tableStyles } from '../../util/storybookStyles';
import { Icon } from './Icon';

const meta = {
	title: 'Stand/Editorial Design System/Components/Icon',
	component: Icon,
	parameters: {},
	args: {
		size: 'md',
	},
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

export default meta;

// from source: https://github.com/guardian/csnx/blob/main/libs/%40guardian/source/src/react-components/__generated__/icons/SvgHomeHouseOutlined.tsx
const HomeSvg = () => (
	<svg viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.36 2.5h-.905l-7.6 7.69-.905.905v.453h.905v9.056l.904.896h5.872v-6.333h2.715V21.5h5.89l.904-.932v-9.02h.905v-.453l-1.357-1.357-.001.005zm5.97 8.447-6.412-6.34-6.254 6.326v8.758h3.158V13.81l.452-.453h5.438l.443.453v5.88h3.176z"
		/>
	</svg>
);

const sizes = ['sm', 'md', 'lg'] as const;
export const IconTable = {
	name: 'Icons',
	render: () => (
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>
						<code>Icon</code>
					</th>
					{sizes.map((size) => (
						<th key={size}>
							<code>{size}</code>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Material Symbols (font icons)</td>
					<td>
						<Icon size="sm" symbol="home"></Icon>
						<Icon
							size="sm"
							fill={baseColors.magenta[400]}
							symbol="home"
						></Icon>
					</td>
					<td>
						<Icon size="md" symbol="home"></Icon>
						<Icon
							size="md"
							fill={baseColors.magenta[400]}
							symbol="home"
						></Icon>
					</td>
					<td>
						<Icon size="lg" symbol="home"></Icon>
						<Icon
							size="lg"
							fill={baseColors.magenta[400]}
							symbol="home"
						></Icon>
					</td>
				</tr>
				<tr>
					<td>Material Icons (svg icons)</td>
					<td>
						<Icon size="sm">
							<HomeIcon />
						</Icon>
						<Icon size="sm" fill={baseColors.magenta[400]}>
							<HomeIcon />
						</Icon>
					</td>
					<td>
						<Icon size="md">
							<HomeIcon />
						</Icon>
						<Icon size="md" fill={baseColors.magenta[400]}>
							<HomeIcon />
						</Icon>
					</td>
					<td>
						<Icon size="lg">
							<HomeIcon />
						</Icon>
						<Icon size="lg" fill={baseColors.magenta[400]}>
							<HomeIcon />
						</Icon>
					</td>
				</tr>
				<tr>
					<td>Custom SVG icon component</td>
					<td>
						<Icon size="sm">
							<HomeSvg />
						</Icon>
						<Icon size="sm" fill={baseColors.magenta[400]}>
							<HomeSvg />
						</Icon>
					</td>
					<td>
						<Icon size="md">
							<HomeSvg />
						</Icon>
						<Icon size="md" fill={baseColors.magenta[400]}>
							<HomeSvg />
						</Icon>
					</td>
					<td>
						<Icon size="lg">
							<HomeSvg />
						</Icon>
						<Icon size="lg" fill={baseColors.magenta[400]}>
							<HomeSvg />
						</Icon>
					</td>
				</tr>
			</tbody>
		</table>
	),
} satisfies Story;

export const CustomTheme = {
	name: 'custom theme',
	args: {
		children: 'home',
		size: 'md',
		theme: {
			shared: {
				display: 'block',
				'user-select': 'all',
			},
			md: {
				size: baseSizing['size-48-rem'],
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		children: 'home',
		size: 'lg',
		fill: baseColors.neutral[900],
		cssOverrides: css`
			padding: ${baseSpacing['4-rem']};
			background-color: ${baseColors.yellow[400]};
			border-radius: ${semanticSizing.border['extra-wide']};
		`,
	},
} satisfies Story;
