import { Grid, Item } from '../../Grid';
import type { IconButtonProps } from '../../IconButton';
import { IconButton } from '../../IconButton';

const PostButton = ({
	symbol,
	post,
}: {
	symbol: Required<IconButtonProps>['symbol'];
	post: { (symbol: string): { (): void } };
}) => (
	<IconButton
		size="lg"
		symbol={symbol}
		ariaLabel={`send ${symbol}`}
		onPress={post(symbol)}
	/>
);

export const DemoPickerIframe = () => {
	const doPost = (value: string) => () => {
		window.parent.postMessage({ symbol: value }, '*');
	};

	return (
		<div>
			<h1>Demo Picker UI</h1>
			<p>pick on of the below things</p>

			<Grid>
				<Item>
					<PostButton symbol="cake" post={doPost} />
					<PostButton symbol="yakitori" post={doPost} />
					<PostButton symbol="wine_bar" post={doPost} />
					<PostButton symbol="brunch_dining" post={doPost} />
					<PostButton symbol="bakery_dining" post={doPost} />
					<PostButton symbol="ramen_dining" post={doPost} />
				</Item>
			</Grid>
		</div>
	);
};
