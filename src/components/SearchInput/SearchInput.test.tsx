import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { SearchInput } from './SearchInput';

const renderInput = (isDisabled: boolean) => {
	const container = document.createElement('div');
	document.body.appendChild(container);
	act(() => {
		render(
			<SearchInput aria-label="Search" isDisabled={isDisabled} />,
			container,
		);
	});
	return container;
};

describe('SearchInput', () => {
	it('renders enabled without throwing', () => {
		const container = renderInput(false);
		expect(container.querySelector('input')).not.toBeDisabled();
	});

	it('renders disabled without throwing', () => {
		const container = renderInput(true);
		expect(container.querySelector('input')).toBeDisabled();
		expect(container.querySelector('[data-disabled]')).not.toBeNull();
	});
});
