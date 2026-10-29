export const DangerouslyOverrideCssWarning = () => (
	<aside>
		<strong>
			Prefer the component&apos;s <code>theme</code> prop
		</strong>{' '}
		(or the global theme provider when available) to customise its appearance.
		CSS overrides can make components harder to maintain and update, and may
		cause them to no longer follow design system conventions. Use{' '}
		<code>dangerouslyOverrideCss</code> only when theme customisation cannot
		meet your needs. See the{' '}
		<a href="./?path=/docs/architecture-decision-records--docs#make-arbitrary-css-overrides-an-explicit-escape-hatch">
			decision record
		</a>{' '}
		for more detail.
	</aside>
);
