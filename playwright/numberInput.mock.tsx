import { useState } from 'react';
import { NumberInput } from '../src/NumberInput';

export function ControlledNumberInput() {
	const [value, setValue] = useState(4);
	return (
		<>
			<NumberInput label="Quantity" value={value} onChange={setValue} />
			<output data-testid="value">
				{Number.isNaN(value) ? 'empty' : value}
			</output>
			<button onClick={() => setValue(8)}>Set value to eight</button>
		</>
	);
}

export function NumberInputForm() {
	const [submitted, setSubmitted] = useState(false);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				setSubmitted(true);
			}}
		>
			<NumberInput label="Quantity" name="quantity" defaultValue={4} />
			<button type="submit">Submit</button>
			<output data-testid="submitted">{String(submitted)}</output>
		</form>
	);
}

export function RequiredNumberInputForm() {
	return (
		<form>
			<NumberInput label="Quantity" isRequired error="Enter a quantity." />
			<button type="submit">Submit</button>
		</form>
	);
}
