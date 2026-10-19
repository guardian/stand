import { css } from '@emotion/react';
import baseColors from '../styleD/build/css/base/colors.css?inline';
import baseRadius from '../styleD/build/css/base/radius.css?inline';
import baseSizing from '../styleD/build/css/base/sizing.css?inline';
import baseSpacing from '../styleD/build/css/base/spacing.css?inline';
import baseTypography from '../styleD/build/css/base/typography.css?inline';
import semanticBreakpoints from '../styleD/build/css/semantic/breakpoints.css?inline';
import semanticColors from '../styleD/build/css/semantic/colors.css?inline';
import semanticGrid from '../styleD/build/css/semantic/grid.css?inline';
import semanticRadius from '../styleD/build/css/semantic/radius.css?inline';
import semanticShadow from '../styleD/build/css/semantic/shadow.css?inline';
import semanticSizing from '../styleD/build/css/semantic/sizing.css?inline';
import semanticSpacing from '../styleD/build/css/semantic/spacing.css?inline';
import semanticTypography from '../styleD/build/css/semantic/typography.css?inline';

export const GlobalBaseStyles = css`
	${baseColors}
	${baseRadius}
	${baseSizing}
	${baseSpacing}
	${baseTypography}
	${semanticBreakpoints}
	${semanticColors}
	${semanticGrid}
	${semanticRadius}
	${semanticShadow}
	${semanticSizing}
	${semanticSpacing}
	${semanticTypography}
`;
