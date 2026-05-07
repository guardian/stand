// Component Name
export const componentName = 'Layout';

// Layout - React sandbox example
export const componentTsx = /* javascript */ `import { Grid, Item } from '@guardian/stand/grid';
import { Layout, Sidebar } from '@guardian/stand/layout';
import { TopBar, TopBarToolName } from '@guardian/stand/TopBar';

export const Component = () => (
	<Layout>
		<TopBar>
			<TopBarToolName name="Layout Demo" favicon={{ letter: 'L' }} />
		</TopBar>
		<Sidebar layoutSmBreakpoint="above-grid">
			<div style={{ padding: '8px' }}>Sidebar content</div>
		</Sidebar>
		<Grid>
			<Item size={{ sm: 12, md: 8 }}>Main content</Item>
			<Item size={{ sm: 12, md: 4 }}>Secondary content</Item>
		</Grid>
	</Layout>
);
`;

// Layout - Custom component - CSS example
export const componentCss = /* css */ `
/* import the layout styles */
@import '@guardian/stand/component/layout.css';
@import '@guardian/stand/semantic/breakpoints.css';

/*
 * Use the TopBar and Grid/Item custom CSS examples from their respective
 * component docs to style the content placed inside these layout regions.
 */

.stand-layout {
	display: var(--component-layout-layout-shared-display);
	min-height: var(--component-layout-layout-shared-min-height);
	width: var(--component-layout-layout-shared-width);
	grid-template-areas: var(--component-layout-layout-sm-grid-template-areas);
	grid-template-columns: var(--component-layout-layout-sm-grid-template-columns);
	grid-template-rows: var(--component-layout-layout-sm-grid-template-rows);
}

.stand-layout-alert-banner {
	grid-area: alertbanner;
}

.stand-layout-top-bar {
	grid-area: topbar;
}

.stand-layout-sidebar {
	grid-area: sidebar;
	background: #f2f2f2;
	padding: 8px;
}

.stand-layout-main {
	grid-area: main;
	padding: 8px;
}

@media (min-width: var(--semantic-breakpoints-md)) {
	.stand-layout {
		grid-template-areas: var(--component-layout-layout-md-grid-template-areas);
		grid-template-columns: var(--component-layout-layout-md-grid-template-columns);
		grid-template-rows: var(--component-layout-layout-md-grid-template-rows);
	}

	.stand-layout-sidebar {
		display: var(--component-layout-sidebar-md-display);
		width: var(--component-layout-sidebar-md-width);
	}
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-layout">
		<div class="stand-layout-alert-banner">Alert banner area</div>
		<div class="stand-layout-top-bar">Top bar area</div>
		<div class="stand-layout-sidebar">Sidebar area</div>
		<div class="stand-layout-main">Main content area</div>
	</div>
</div>
`;

// Layout - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentLayout, semanticBreakpoints } from "@guardian/stand";

// Use the TopBar and Grid/Item custom JS examples from their respective
// component docs to style the content placed inside these layout regions.

	const sheet = new CSSStyleSheet();

	sheet.replaceSync(\`
	  .js-stand-layout {
	    display: \${componentLayout.layout.shared.display};
	    min-height: \${componentLayout.layout.shared.minHeight};
	    width: \${componentLayout.layout.shared.width};
	    grid-template-areas: \${componentLayout.layout.sm.gridTemplateAreas};
	    grid-template-columns: \${componentLayout.layout.sm.gridTemplateColumns};
	    grid-template-rows: \${componentLayout.layout.sm.gridTemplateRows};
	  }
	  .js-stand-layout-alert-banner {
	    grid-area: alertbanner;
	  }
	  .js-stand-layout-top-bar {
	    grid-area: topbar;
	  }
	  .js-stand-layout-sidebar {
	    grid-area: sidebar;
	    display: \${componentLayout.sidebar.sm.aboveGrid.display};
	    background: #f2f2f2;
	    padding: 8px;
	  }
	  .js-stand-layout-main {
	    grid-area: main;
	    padding: 8px;
	  }
	  @media (min-width: \${semanticBreakpoints.md}) {
	    .js-stand-layout {
	      grid-template-areas: \${componentLayout.layout.md.gridTemplateAreas};
	      grid-template-columns: \${componentLayout.layout.md.gridTemplateColumns};
	      grid-template-rows: \${componentLayout.layout.md.gridTemplateRows};
	    }
	    .js-stand-layout-sidebar {
	      display: \${componentLayout.sidebar.md.display};
	      width: \${componentLayout.sidebar.md.width};
	    }
	  }
	\`);

	document.adoptedStyleSheets.push(sheet);

	document.getElementById("app").innerHTML = \`
	  <div class="js-stand-layout">
	    <div class="js-stand-layout-alert-banner">Alert banner area</div>
	    <div class="js-stand-layout-top-bar">Top bar area</div>
	    <div class="js-stand-layout-sidebar">Sidebar area</div>
	    <div class="js-stand-layout-main">Main content area</div>
	  </div>
	\`;
`;
