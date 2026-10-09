import { useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface CopyTextButtonProps {
	textToCopy: string;
	label: string;
	onClick?: () => void;
}

type CopyStatus = 'done' | 'fail' | 'ready';

const StatusIcon = ({ status }: { status: CopyStatus }) => {
	switch (status) {
		case 'done':
			return <Icon symbol="check_circle" />;
		case 'fail':
			return <Icon symbol="warning" />;
		case 'ready':
			return <Icon symbol="content_copy" />;
	}
};

const buttonLabel = (status: CopyStatus, labelWhenReady: string) => {
	switch (status) {
		case 'done':
			return 'Copied to clipboard';
		case 'fail':
			return 'Copy to clipboard failed';
		case 'ready':
			return labelWhenReady;
	}
};

const CopyTextButton = ({
	textToCopy,
	label,
	onClick = () => {
		// Default onClick does nothing.
		// (Nicer than having it potentially be undefined,
		// and therefore needing guard clauses when we reference it.)
	},
}: CopyTextButtonProps) => {
	const [copyStatus, setCopyStatus] = useState<'done' | 'fail' | 'ready'>(
		'ready',
	);

	const handleClick = () => {
		onClick();
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				setCopyStatus('done');
			})
			.catch((error) => {
				console.warn(error);
				setCopyStatus('fail');
			});
	};

	return (
		<Button
			aria-live="polite"
			aria-label={buttonLabel(copyStatus, label)}
			onBlur={() => {
				setCopyStatus('ready');
			}}
			onPointerLeave={() => {
				setCopyStatus('ready');
			}}
			onClick={handleClick}
			icon={<StatusIcon status={copyStatus} />}
		>
			{label}
		</Button>
	);
};

export { CopyTextButton };
