import {
	createInvisiblesPlugin,
	nbSpace,
	space,
} from '@guardian/prosemirror-invisibles';
import { dropCursor } from 'prosemirror-dropcursor';
import { history } from 'prosemirror-history';
import type { Node } from 'prosemirror-model';
import type { Transaction } from 'prosemirror-state';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import type { FocusEventHandler, MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { ComponentByline } from '../../styleD/build/typescript/component/byline';
import type { DeepPartial } from '../../util/types';
import type {
	BylineModel,
	TaggedContributor,
	TypingFromStartRange,
} from './lib';
import {
	addTaggedContributor,
	addUntaggedContributor,
	convertBylineModelToNode,
	convertNodeToBylineModel,
	getCurrentText,
	hasHitContributorLimit,
} from './lib';
import { createPlaceholderPlugin } from './placeholder';
import { bylinePlugin, clipboardPlugin, keybindings } from './plugins';
import { Preview } from './Preview';
import { bylineEditorSchema } from './schema';
import {
	bylineContainerStyles,
	bylineEditorStyles,
	dropdownContainerStyles,
	dropdownLiStyles,
	dropdownUlStyles,
	selectedDropdownLiStyles,
} from './styles';

type BylineProps = {
	/** `theme` - Used to customise the look and feel of the Byline component */
	theme?: DeepPartial<ComponentByline>;
	/** `allowUntaggedContributors` - Whether to allow untagged contributors in the byline */
	allowUntaggedContributors?: boolean;
	/** `contributorLimit` - Maximum number of tagged/untagged contributors allowed in the byline */
	contributorLimit?: number;
	/** `enablePreview` - Whether to show the byline preview below the editor */
	enablePreview?: boolean;
	/** `placeholder` - Placeholder text for the byline editor */
	placeholder?: string;
	/** `initialValue` - Initial value for the byline editor */
	initialValue?: BylineModel;
	/** `readOnly` - Whether the byline editor is in read-only mode */
	readOnly?: boolean;
	/** `handleSave` - Callback function to handle saving the byline value */
	handleSave: (newValue: BylineModel) => void;
	/** `searchContributors` - Function to search for contributors based on selected text, results will appear on the dropdown */
	searchContributors?: (selectedText: string) => Promise<TaggedContributor[]>;
	/** `onBlur` - Optional blur event handler for the byline editor */
	onBlur?: FocusEventHandler<HTMLDivElement>;
};

/**
 * ## Byline
 *
 * *Status: Production*
 *
 * A flexible byline editor component built in ProseMirror and React with usability and accessibility in mind.
 *
 * **Peer dependencies:**
 *
 * You'll need to install the following peer dependencies in your project to use the `Byline` component:
 * - `@guardian/prosemirror-invisibles`
 * - `prosemirror-dropcursor`
 * - `prosemirror-history`
 * - `prosemirror-keymap`
 * - `prosemirror-model`
 * - `prosemirror-state`
 * - `prosemirror-view`
 *
 * See the `peerDependencies` section of `package.json` for compatible versions to install.
 *
 * #### Usage
 *
 * ```tsx
 * import type { BylineModel } from '@guardian/stand';
 * import { Byline } from '@guardian/stand';
 *
 * const Component = () => {
 *     const bylineModel: BylineModel = {
 *         // ...set up your byline model here
 *     };
 *     ...
 * 	return (
 *         <>
 *         ...
 *             <Byline initialValue={bylineModel} />
 *         ...
 *         </>
 *     );
 * };
 * ```
 *
 * By itself the `Byline` component is just the editor UI.
 * You will need to set up the ProseMirror editor state, schema, and plugins to get a fully functioning byline editor.
 * See the props and example below for a more complete implementation.
 * The `BylineModel` type defines the structure of the byline data which is agnostic from any other data structure. You must convert to/from this model when integrating with your application's data structures.
 *
 * #### Props
 *
 * See {@link BylineProps} for the full list of props, usage example can be seen in Storybook.
 *
 * #### Example
 *
 * The `ContentByline` component in `flexible-frontend` has a detailed example of how to use the `Byline` component from Stand.
 * See [ContentByline.tsx](https://github.com/guardian/flexible-content/blob/1d537615a18ae24a4a5410a3f945b2b9db1dbb47/flexible-frontend/src/app/components/furniture/content-byline/ContentByline.tsx#L72-L205).
 */
export const Byline = ({
	theme,
	allowUntaggedContributors,
	contributorLimit,
	enablePreview,
	placeholder,
	initialValue,
	readOnly,
	handleSave,
	searchContributors,
	onBlur,
}: BylineProps) => {
	const editorRef = useRef<HTMLDivElement>(null);
	const viewRef = useRef<EditorView | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [currentText, setCurrentText] = useState('');
	const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
	const [taggedContributors, setTaggedContributors] = useState<
		TaggedContributor[]
	>([]);
	const [currentDoc, setCurrentDoc] = useState<Node | null>(null);
	const [showDropdown, setShowDropdown] = useState(false);

	// we have to useRef for these as they are read/modified during prosemirror transactions
	// rather than react lifecycle
	const isTypingFromStartRange = useRef<TypingFromStartRange | undefined>(
		undefined,
	);

	// track the range of positions typed from the start of the input field
	const trackTypingFromStart = (tr: Transaction) => {
		const isCursorSelection = tr.selection.from === tr.selection.to;
		const currentPosition = tr.selection.from;
		const hasChanges = tr.steps.length > 0;

		// early return and reset if not a cursor selection (single cursor, no range selection)
		if (!isCursorSelection) {
			isTypingFromStartRange.current = undefined;
			return;
		}

		// starting to type from the beginning, currentPosition is 1 as thats the index
		// where the cursor ends up
		if (
			!isTypingFromStartRange.current &&
			currentPosition === 1 &&
			hasChanges
		) {
			isTypingFromStartRange.current = {
				start: 1,
				maxReached: 1,
				lastPosition: 1,
			};
			return;
		}

		// check if we're continuing to type within or extending the range
		if (isTypingFromStartRange.current) {
			const { start, maxReached, lastPosition } =
				isTypingFromStartRange.current;

			// check if current position is within our tracked range (allows cursor movement without changes)
			// or adjacent to extend the range (requires changes)
			const isWithinRange =
				currentPosition >= start && currentPosition <= maxReached;
			const isExtendingRange =
				hasChanges && currentPosition === maxReached + 1;

			if (isWithinRange || isExtendingRange) {
				// update the maximum reached position based on changes
				if (hasChanges) {
					// determine what happened based on position change from last transaction
					const positionDelta = currentPosition - lastPosition;

					if (positionDelta < 0) {
						// backspace/delete: content was removed, decrease maxReached by 1
						isTypingFromStartRange.current.maxReached =
							maxReached - 1;
					} else if (positionDelta > 0) {
						// content was added: increase maxReached by 1
						isTypingFromStartRange.current.maxReached =
							maxReached + 1;
					}
					// if positionDelta === 0, content was replaced at same position, no maxReached change needed

					// update lastPosition for next transaction
					isTypingFromStartRange.current.lastPosition =
						currentPosition;
				}
				return;
			}
		}

		// reset if none of the above conditions are met, no longer typing from start
		isTypingFromStartRange.current = undefined;
	};

	const getShouldShowDropdown = (
		view: EditorView,
		selectedText: string,
	): boolean => {
		if (readOnly) {
			return false;
		}

		/**
		 * Determines whether to hide or show the contributor dropdown based on component props,
		 * and should be used in combination with the selected/current text when calling setShowDropdown
		 * The logic evaluates to true when either:
		 * - There are search contributors available OR
		 * - Untagged contributors are allowed
		 * - The document state is under any contributor limit
		 * - The selected text is not empty
		 */
		const showDropdownBasedOnProps =
			!!searchContributors || !!allowUntaggedContributors;

		if (hasHitContributorLimit(view.state.doc, contributorLimit)) {
			return false;
		}

		return selectedText.trim() !== '' && showDropdownBasedOnProps;
	};

	const [enterHit, setEnterHit] = useState(false);

	// We don't have access to the React state in the dom events handler
	const checkDropdownVisibility = () => {
		// This function is only newly available since 2024
		if (dropdownRef.current?.checkVisibility) {
			return dropdownRef.current.checkVisibility();
		} else {
			return dropdownRef.current?.offsetParent !== null;
		}
	};

	// Setup the prosemirror editor
	useEffect(() => {
		if (!editorRef.current) {
			return;
		}

		const initialDoc = convertBylineModelToNode(initialValue);

		const state = EditorState.create({
			schema: bylineEditorSchema,
			plugins: [
				dropCursor(),
				clipboardPlugin(allowUntaggedContributors, contributorLimit),
				history(),
				keybindings(),
				createInvisiblesPlugin([space, nbSpace], {
					displayLineEndSelection: true,
					shouldShowInvisibles: true,
				}),
				bylinePlugin(),
				createPlaceholderPlugin(placeholder ?? 'Enter a byline...'),
			],
			doc: initialDoc,
		});

		// Set the initial document in the preview
		setCurrentDoc(initialDoc);

		viewRef.current = new EditorView(editorRef.current, {
			state,
			editable: () => !readOnly,
			attributes: {
				role: 'combobox',
				'aria-label': 'byline',
				'aria-controls': 'byline-dropdown',
				'aria-expanded': 'false',
				'data-testid': 'byline-input',
				...(readOnly && { 'aria-readonly': 'true' }),
			},
			handleDOMEvents: {
				keydown: (view, event) => {
					if (readOnly) {
						return false;
					}

					// Handle escape key for dropdown
					if (event.key === 'Escape') {
						setShowDropdown(false);

						// Always return true to prevent other escape handlers
						return true;
					}
					if (event.key === 'ArrowDown') {
						if (checkDropdownVisibility()) {
							event.preventDefault();
							setCurrentOptionIndex((currentOptionIndex) => {
								return currentOptionIndex + 1;
							});

							return true;
						}
						return false;
					}
					if (event.key === 'ArrowUp') {
						if (checkDropdownVisibility()) {
							event.preventDefault();

							setCurrentOptionIndex((currentOptionIndex) => {
								return currentOptionIndex - 1;
							});
							return true;
						}
						return false;
					}
					if (event.key === 'Enter') {
						if (checkDropdownVisibility()) {
							event.preventDefault();
							setEnterHit(true);
						}
						return false;
					}

					return false;
				},
				blur: (_view, event) => {
					if (readOnly) {
						return false;
					}

					if (
						!dropdownRef.current?.contains(
							event.relatedTarget as HTMLElement,
						)
					) {
						setShowDropdown(false);
					}
					return false;
				},
			},
			dispatchTransaction(tr) {
				if (readOnly) {
					// In readOnly mode, only allow selection, not document changes
					if (tr.docChanged) {
						// Block any transaction that changes the document
						return;
					}
					// Allow selection-only changes for text selection
					if (viewRef.current) {
						const newState = viewRef.current.state.apply(tr);
						viewRef.current.updateState(newState);
					}
					return;
				}

				if (viewRef.current?.hasFocus()) {
					trackTypingFromStart(tr);

					const newState = viewRef.current.state.apply(tr);
					viewRef.current.updateState(newState);
					const { selectedText } = getCurrentText(
						newState.doc,
						newState.selection.from,
						newState.selection.to,
						isTypingFromStartRange.current,
					);

					setCurrentText(selectedText);

					const shouldShowDropdown = getShouldShowDropdown(
						viewRef.current,
						selectedText,
					);

					if (shouldShowDropdown && searchContributors) {
						// Fetch contributors based on the selected text
						void searchContributors(selectedText)
							.then((contributors) => {
								setTaggedContributors(contributors);
							})
							.catch((error) => {
								console.error(
									'Error fetching tagged contributors:',
									error,
								);
								setTaggedContributors([]);
							});
					} else {
						setTaggedContributors([]);
					}
					setShowDropdown(shouldShowDropdown);

					// Update the current document state after each transaction
					// if a transform step has happened
					if (tr.docChanged) {
						setCurrentDoc(newState.doc);
						handleSave(convertNodeToBylineModel(newState.doc));
					}
				}
			},
		});

		return () => {
			viewRef.current?.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps -- We only want to run this once
	}, []);

	// Handle dropdown functionality
	useEffect(() => {
		const numberOfOptions =
			taggedContributors.length + (allowUntaggedContributors ? 1 : 0);
		if (numberOfOptions) {
			// Going up from the first option
			if (currentOptionIndex < 0) {
				setCurrentOptionIndex(numberOfOptions - 1);
			} else {
				setCurrentOptionIndex(currentOptionIndex % numberOfOptions);
			}
		}
		if (showDropdown) {
			const editor = document.querySelector('[role=combobox]');
			editor?.setAttribute(
				'aria-activedescendant',
				`contributor-option-${currentOptionIndex}`,
			);
			editor?.setAttribute('aria-expanded', 'true');
		}
	}, [
		currentOptionIndex,
		showDropdown,
		taggedContributors.length,
		allowUntaggedContributors,
	]);

	// Handle dropdown scrolling when changing index
	useEffect(() => {
		if (showDropdown && currentOptionIndex >= 0) {
			const selectedOption = document.getElementById(
				`contributor-option-${currentOptionIndex}`,
			);
			if (selectedOption && dropdownRef.current) {
				selectedOption.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
				});
			}
		}
	}, [currentOptionIndex, showDropdown]);

	// Handle Enter key press in the dropdown
	useEffect(() => {
		if (enterHit) {
			if (
				allowUntaggedContributors &&
				currentOptionIndex === taggedContributors.length
			) {
				addUntaggedContributor(
					viewRef,
					setShowDropdown,
					contributorLimit,
					isTypingFromStartRange.current,
				);
			} else {
				const contributorToAdd = taggedContributors[currentOptionIndex];

				if (contributorToAdd) {
					addTaggedContributor(
						contributorToAdd,
						viewRef,
						setShowDropdown,
						contributorLimit,
						isTypingFromStartRange.current,
					);
				}
			}

			setEnterHit(false);
		}
	}, [
		currentOptionIndex,
		enterHit,
		taggedContributors,
		contributorLimit,
		allowUntaggedContributors,
	]);

	return (
		<div css={bylineContainerStyles}>
			<div
				css={bylineEditorStyles(theme)}
				ref={editorRef}
				onBlur={onBlur}
			/>
			<div
				ref={dropdownRef}
				tabIndex={0}
				css={dropdownContainerStyles(
					showDropdown &&
						// show the dropdown if there are tagged contributors to select or untagged contributors are allowed
						(taggedContributors.length > 0 ||
							!!allowUntaggedContributors),
					theme?.dropdown,
				)}
			>
				<ul id="byline-dropdown" role="listbox" css={dropdownUlStyles}>
					{taggedContributors.map((contributor, i) => (
						<li
							key={contributor.tagId}
							id={`contributor-option-${i}`}
							role="option"
							aria-selected={i === currentOptionIndex}
							css={[
								dropdownLiStyles(theme?.dropdown),
								i === currentOptionIndex &&
									selectedDropdownLiStyles(theme?.dropdown),
							]}
							onMouseMove={() => {
								if (currentOptionIndex !== i) {
									setCurrentOptionIndex(i);
								}
							}}
							onMouseDown={(e: MouseEvent<HTMLLIElement>) => {
								e.preventDefault(); // Prevent focus loss
								addTaggedContributor(
									contributor,
									viewRef,
									setShowDropdown,
									contributorLimit,
									isTypingFromStartRange.current,
								);
							}}
						>
							{contributor.internalLabel ?? contributor.label}
						</li>
					))}
					{allowUntaggedContributors && (
						<li
							role="option"
							id={`contributor-option-${taggedContributors.length}`}
							aria-selected={
								currentOptionIndex === taggedContributors.length
							}
							css={[
								dropdownLiStyles(theme?.dropdown),
								currentOptionIndex ===
									taggedContributors.length &&
									selectedDropdownLiStyles(theme?.dropdown),
							]}
							onMouseMove={() => {
								if (
									currentOptionIndex !==
									taggedContributors.length
								) {
									setCurrentOptionIndex(
										taggedContributors.length,
									);
								}
							}}
							onMouseDown={(e: MouseEvent<HTMLLIElement>) => {
								e.preventDefault(); // Prevent focus loss
								addUntaggedContributor(
									viewRef,
									setShowDropdown,
									contributorLimit,
									isTypingFromStartRange.current,
								);
							}}
						>
							Add &quot;{currentText}&quot; as untagged
							contributor
						</li>
					)}
				</ul>
			</div>

			{enablePreview && <Preview doc={currentDoc} />}
		</div>
	);
};
