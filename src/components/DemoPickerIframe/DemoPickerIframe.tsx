import { useState } from 'react';
import { Button } from '../../Button';
import type { IconButtonProps } from '../../IconButton';
import { IconButton } from '../../IconButton';
import { semanticSpacing } from '../../styleD/build/typescript/semantic/spacing';
import { Typography } from '../../Typography';

const PostButton = ({
	symbol,
	post,
}: {
	symbol: Required<IconButtonProps>['symbol'];
	post: { (value: Record<string, string>): { (): void } };
}) => (
	<IconButton
		size="lg"
		symbol={symbol}
		ariaLabel={`send ${symbol}`}
		onPress={post({ symbol })}
	/>
);

/**
 * This component is not for production, but just to use in the stories for `PickerIframeModal`
 */
export const DemoPickerIframe = () => {
	const [postedMessages, setPostedMessages] = useState<string[]>([]);
	const doPost = (value: Record<string, string>) => () => {
		window.parent.postMessage(value, '*');
		setPostedMessages((list) => [...list, JSON.stringify(value)]);
	};
	return (
		<div
			css={{
				height: '100vh',
				padding: semanticSpacing.stackMd,
				display: 'flex',
				flexDirection: 'column',
				gap: semanticSpacing.stackLg,
			}}
		>
			<Typography variant="titleXl" element="h1">
				Demo Picker UI
			</Typography>

			<section>
				<Typography variant="headingLg" element="h2">
					Picker buttons
				</Typography>
				<Typography>
					These buttons will post a message to the parent in the format expected
					by the Modal.
				</Typography>
				<div css={{ display: 'flex', gap: semanticSpacing.stackMd }}>
					<PostButton symbol="brunch_dining" post={doPost} />
					<PostButton symbol="bakery_dining" post={doPost} />
					<PostButton symbol="ramen_dining" post={doPost} />
					<PostButton symbol="cake" post={doPost} />
					<PostButton symbol="yakitori" post={doPost} />
					<PostButton symbol="wine_bar" post={doPost} />
				</div>
			</section>

			<section>
				<Typography variant="headingLg" element="h2">
					Other buttons
				</Typography>
				<Typography>
					These buttons also post messages, but not in the right format, so the
					Modal will ignore them
				</Typography>

				<div css={{ display: 'flex', gap: semanticSpacing.stackMd }}>
					<Button
						onClick={doPost({
							action: 'save preference',
							option: 'background',
						})}
					>
						save preference
					</Button>
					<Button
						onClick={doPost({
							action: 'more-buttons',
						})}
					>
						request additional buttons
					</Button>
				</div>
			</section>

			<div>
				<Typography variant="headingLg">Posts made</Typography>
				<ol>
					{postedMessages.map((message, index) => (
						<li key={index}>{message}</li>
					))}
				</ol>
			</div>
		</div>
	);
};
