import { act, render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { EditorView } from 'prosemirror-view';
import { mockEditorViewMethods } from '../mocks/prosemirror-view';
import { Byline } from './Byline';
import type { BylineModel, TaggedContributor } from './lib';

jest.mock('prosemirror-view', () => {
	const actualProsemirrorView = jest.requireActual('prosemirror-view');
	const Class = actualProsemirrorView.EditorView as typeof EditorView;
	class MockEditorView extends Class {
		posAtCoords = mockEditorViewMethods.posAtCoords;
		coordsAtPos = mockEditorViewMethods.coordsAtPos;
	}
	return {
		...actualProsemirrorView,
		EditorView: MockEditorView,
	};
});

// Mock the offsetParent used for visibility in the test dom
// See https://github.com/jsdom/jsdom/issues/1261
Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
	get() {
		return this.parentNode;
	},
});

// Mock scrollIntoView for testing, else we get `TypeError: selectedOption.scrollIntoView is not a function` errors
Element.prototype.scrollIntoView = jest.fn();

const mockSearchContributors: (
	selectedText: string,
) => Promise<TaggedContributor[]> = (selectedText: string) => {
	const allContributors: TaggedContributor[] = [
		{
			path: 'profile/mahesh-makani',
			label: 'Mahesh Makani',
			internalLabel: 'Mahesh Makani (Software Engineer)',
			tagId: '1',
		},
		{
			path: 'profile/andrew-howe-ely',
			label: 'Andrew Howe-Ely',
			tagId: '2',
		},
		{
			path: 'profile/jane-smith',
			label: 'Jane Smith',
			internalLabel: 'Jane Smith (Journalist)',
			tagId: '3',
		},
		{
			path: 'profile/john-doe',
			label: 'John Doe',
			tagId: '4',
		},
	];

	const filteredContributors = allContributors.filter((contributor) =>
		contributor.label
			.toLowerCase()
			.startsWith(selectedText.toLowerCase().trim()),
	);

	return Promise.resolve(filteredContributors);
};

describe('Byline editor', () => {
	it('shows dropdown with untagged contributor suggestion, hides when click away', async () => {
		const user = userEvent.setup();
		render(
			<Byline allowUntaggedContributors={true} handleSave={() => {}} />,
		);

		await act(async () => {
			await user.type(screen.getByRole('combobox'), 'Test');
		});

		const dropdown = screen.getByRole('listbox');
		expect(dropdown).toHaveTextContent(
			'Add "Test" as untagged contributor',
		);

		await act(async () => {
			await user.click(document.body);
		});
		expect(dropdown).not.toBeVisible();
	});
	it('adds a chip from the dropdown', async () => {
		const user = userEvent.setup();
		render(
			<Byline allowUntaggedContributors={true} handleSave={() => {}} />,
		);

		const editor = screen.getByRole('combobox');
		await act(async () => {
			await user.type(screen.getByRole('combobox'), 'Test');
			await user.click(screen.getByRole('option'));
		});

		const chip = editor.querySelector('chip[data-label="Test"]');
		expect(chip).toBeInTheDocument();
		expect(chip).toHaveTextContent('Test');
	});
	it('deletes a chip when clicking x', async () => {
		const user = userEvent.setup();
		render(
			<Byline allowUntaggedContributors={true} handleSave={() => {}} />,
		);

		const editor = screen.getByRole('combobox');
		await act(async () => {
			await user.type(screen.getByRole('combobox'), 'Test');
			await user.click(screen.getByRole('option'));
		});

		const chip = editor.querySelector('chip[data-label="Test"]');
		expect(chip).toBeInTheDocument();

		const deleteHander = screen.getByTitle('Delete Test');

		await act(async () => {
			await user.click(deleteHander);
		});
		expect(chip).not.toBeInTheDocument();
	});
	it('hides dropdown with escape key', async () => {
		const user = userEvent.setup();
		render(
			<Byline allowUntaggedContributors={true} handleSave={() => {}} />,
		);

		await act(async () => {
			await user.type(screen.getByRole('combobox'), 'Test');
		});

		const dropdown = screen.getByRole('listbox');
		expect(dropdown).toHaveTextContent(
			'Add "Test" as untagged contributor',
		);

		await act(async () => {
			await user.type(screen.getByRole('combobox'), '{Escape}');
		});
		expect(dropdown).not.toBeVisible();
	});
	it('displays placeholder text when no content is present', async () => {
		const user = userEvent.setup();
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={() => {}}
			/>,
		);

		const placeholder = await screen.findByText('Placeholder');
		expect(placeholder).toBeInTheDocument();

		await act(async () => {
			await user.type(screen.getByRole('combobox'), 'Test');
		});

		expect(placeholder).not.toBeVisible();
	});
	it('renders search options in dropdown', async () => {
		const user = userEvent.setup();
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={() => {}}
				searchContributors={mockSearchContributors}
			/>,
		);

		await act(async () => {
			await user.click(screen.getByRole('combobox'));
			await user.type(screen.getByRole('combobox'), 'Ma'); // Type "Ma" to match "Mahesh Makani"
		});

		// testing internalLabel
		const mahesh = screen.getByText('Mahesh Makani (Software Engineer)');
		expect(mahesh).toBeInTheDocument();

		await act(async () => {
			await user.clear(screen.getByRole('combobox'));
			await user.type(screen.getByRole('combobox'), 'A');
		});

		// testing label
		const andrew = screen.getByText('Andrew Howe-Ely');
		expect(andrew).toBeInTheDocument();
	});
	it('moves the selected option in dropdown with arrow keys', async () => {
		const user = userEvent.setup();
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={() => {}}
				searchContributors={mockSearchContributors}
			/>,
		);

		await act(async () => {
			await user.click(screen.getByRole('combobox'));
			await user.type(screen.getByRole('combobox'), 'J'); // Type "J" to match both "Jane Smith" and "John Doe"
			await user.type(screen.getByRole('combobox'), '{ArrowDown}');
			await user.type(screen.getByRole('combobox'), '{ArrowDown}');
		});

		const lastOption = screen.getAllByRole('option').pop();
		expect(lastOption).toHaveAttribute('aria-selected', 'true');
	});
	it('adds a chip with the Enter key', async () => {
		const user = userEvent.setup();
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={() => {}}
				searchContributors={mockSearchContributors}
			/>,
		);
		const editor = screen.getByRole('combobox');

		await act(async () => {
			await user.click(editor);
			await user.type(screen.getByRole('combobox'), 'Andrew'); // Type full name to ensure it's found
		});

		// Wait for the dropdown to appear and verify the option exists
		const andrewOption = await screen.findByText('Andrew Howe-Ely');
		expect(andrewOption).toBeInTheDocument();

		await act(async () => {
			await user.type(screen.getByRole('combobox'), '{Enter}'); // Select the first option
		});

		const chip = editor.querySelector('chip[data-label="Andrew Howe-Ely"]');
		expect(chip).toBeInTheDocument();
		expect(chip).toHaveTextContent('Andrew Howe-Ely');
	});
	it('executes save function on every keypress', async () => {
		const user = userEvent.setup();
		const mockHandleSave = jest.fn();
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={mockHandleSave}
				searchContributors={mockSearchContributors}
			/>,
		);
		const editor = screen.getByRole('combobox');

		await act(async () => {
			await user.type(editor, 'T');
			await user.type(editor, 'e');
			await user.type(editor, 's');
			await user.type(editor, 't');
		});

		expect(mockHandleSave).toHaveBeenCalledTimes(4);
	});
	it('executes save function with correct input at each keypress', async () => {
		const user = userEvent.setup();
		const saveLog: BylineModel[] = [];
		const mockHandleSave = (value: BylineModel) => {
			saveLog.push(value);
		};
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={mockHandleSave}
				searchContributors={mockSearchContributors}
			/>,
		);
		const editor = screen.getByRole('combobox');

		await act(async () => {
			await user.type(editor, 'T');
			await user.type(editor, 'e');
			await user.type(editor, 's');
			await user.type(editor, 't');
		});

		expect(saveLog.at(0)?.pop()?.value).toBe('T');
		expect(saveLog.at(1)?.pop()?.value).toBe('Te');
		expect(saveLog.at(2)?.pop()?.value).toBe('Tes');
		expect(saveLog.at(3)?.pop()?.value).toBe('Test');
	});
	it('passes * character to search function', async () => {
		const user = userEvent.setup();
		const mockSearch = jest.fn().mockImplementation(mockSearchContributors);
		render(
			<Byline
				allowUntaggedContributors={true}
				placeholder="Placeholder"
				handleSave={() => {}}
				searchContributors={mockSearch}
			/>,
		);
		const editor = screen.getByRole('combobox');

		await act(async () => {
			await user.type(editor, '*Test');
		});

		expect(mockSearch).toHaveBeenLastCalledWith('*Test');

		await act(async () => {
			await user.clear(editor);
			await user.type(editor, 'T*est');
		});

		expect(mockSearch).toHaveBeenLastCalledWith('T*est');

		await act(async () => {
			await user.clear(editor);
			await user.type(editor, 'Te-St*');
		});

		expect(mockSearch).toHaveBeenLastCalledWith('Te-St*');
	});
});

describe('trackTypingFromStart behavior', () => {
	it('starts tracking when typing from start', async () => {
		const user = userEvent.setup();
		const mockHandleSave = jest.fn();

		render(
			<Byline
				allowUntaggedContributors={true}
				handleSave={mockHandleSave}
				searchContributors={mockSearchContributors}
				initialValue={[
					{ type: 'text', value: 'Existing content and more text' },
				]}
			/>,
		);

		const editor = screen.getByRole('combobox');

		// Start typing from the beginning
		await act(async () => {
			await user.click(editor);
			await user.keyboard('{Home}J');
		});

		expect(
			screen.queryByText('JExisting content and more text'),
		).toBeInTheDocument();

		expect(screen.getByRole('listbox')).toBeVisible();
		expect(screen.getByText('Jane Smith (Journalist)')).toBeInTheDocument();
		expect(screen.getByText('John Doe')).toBeInTheDocument();

		await act(async () => {
			await user.keyboard('ohn');
		});

		expect(
			screen.queryByText('JohnExisting content and more text'),
		).toBeInTheDocument();
		expect(screen.getByRole('listbox')).toBeVisible();
		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(
			screen.queryByText('Jane Smith (Journalist)'),
		).not.toBeInTheDocument();

		await act(async () => {
			await user.click(screen.getByText('John Doe'));
		});

		const chip = editor.querySelector('chip[data-label="John Doe"]');
		expect(chip).toBeInTheDocument();

		expect(
			screen.queryByText('Existing content and more text'),
		).toBeInTheDocument();
	});

	it('handles backspace correctly within tracked range', async () => {
		const user = userEvent.setup();
		const mockHandleSave = jest.fn();

		render(
			<Byline
				allowUntaggedContributors={true}
				handleSave={mockHandleSave}
				searchContributors={mockSearchContributors}
				initialValue={[
					{ type: 'text', value: 'Existing content and more text' },
				]}
			/>,
		);

		const editor = screen.getByRole('combobox');

		// Type some text
		await act(async () => {
			await user.click(editor);
			await user.keyboard('{Home}John');
		});

		expect(screen.getByRole('listbox')).toBeVisible();
		expect(screen.getByText('John Doe')).toBeInTheDocument();

		// backspace to fix a typo
		await act(async () => {
			await user.keyboard('{Backspace}'.repeat(2));
		});

		// should still be tracking (within range) and show contributors starting with "Jo"
		expect(screen.getByRole('listbox')).toBeVisible();
		expect(screen.getByText('John Doe')).toBeInTheDocument();

		// backspace and edit name
		await act(async () => {
			await user.keyboard('{Backspace}ane');
		});

		expect(
			screen.queryByText('JaneExisting content and more text'),
		).toBeInTheDocument();

		expect(screen.getByRole('listbox')).toBeVisible();
		expect(
			screen.queryByText('Jane Smith (Journalist)'),
		).toBeInTheDocument();
		expect(screen.queryByText('John Doe')).not.toBeInTheDocument();

		await act(async () => {
			await user.click(screen.getByText('Jane Smith (Journalist)'));
		});

		const chip = editor.querySelector('chip[data-label="Jane Smith"]');
		expect(chip).toBeInTheDocument();

		expect(
			screen.queryByText('Existing content and more text'),
		).toBeInTheDocument();
	});
});
