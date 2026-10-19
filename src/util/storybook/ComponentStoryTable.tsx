import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { semanticRadius } from '../../styleD/build/typescript/semantic/radius';
import { semanticSizing } from '../../styleD/build/typescript/semantic/sizing';
import { semanticSpacing } from '../../styleD/build/typescript/semantic/spacing';

const gridStyles = css`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 17.5rem), 1fr));
	gap: ${semanticSpacing.stackMd};
	width: 100%;
`;

const cardStyles = css`
	background-color: ${semanticColors.bg.raisedLevel1};
	border: ${semanticSizing.border.default} solid ${semanticColors.border.weak};
	border-radius: ${semanticRadius.cornerMd};
	overflow: hidden;
`;

const loadingCardStyles = css`
	${cardStyles};
	padding: ${semanticSpacing.stackLg} ${semanticSpacing.stackMd};
	text-align: center;
`;

const storyFrameContainerStyles = css`
	padding: ${semanticSpacing.stackMd} ${semanticSpacing.stackMd} 0;
`;

const storyFrameStyles = css`
	background-color: ${semanticColors.bg.base};
	border: 0;
	display: block;
	height: 15rem;
	width: 100%;
`;

const cardLabelStyles = css`
	padding: ${semanticSpacing.stackMd};
	text-align: center;

	a {
		color: ${semanticColors.text.link};

		&:hover {
			color: ${semanticColors.fill.linkHover};
		}
	}
`;

type ComponentEntry = {
	title: string;
	label: string;
};

type StoryIndexEntry = {
	id: string;
	title: string;
	type: string;
};

type StorybookIndex = {
	entries: Record<string, StoryIndexEntry>;
};

type ComponentStoryTableProps = {
	components: ComponentEntry[];
};

export const ComponentStoryTable = ({
	components,
}: ComponentStoryTableProps) => {
	const [entries, setEntries] = useState<StoryIndexEntry[]>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		let isMounted = true;

		fetch(new URL('index.json', window.location.href))
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Storybook index request failed: ${response.status}`);
				}
				return response.json() as Promise<StorybookIndex>;
			})
			.then(({ entries: storyEntries }) => {
				if (isMounted) {
					setEntries(Object.values(storyEntries));
				}
			})
			.catch((reason: unknown) => {
				if (isMounted) {
					setError(reason instanceof Error ? reason.message : String(reason));
				}
			});

		return () => {
			isMounted = false;
		};
	}, []);

	if (error) {
		return <p role="alert">Could not load component stories: {error}</p>;
	}

	return (
		<div css={gridStyles}>
			{components.map(({ title, label }) => {
				if (!entries) {
					return (
						<article key={title} css={loadingCardStyles}>
							Loading {label} story...
						</article>
					);
				}

				const stories = entries.filter(
					(entry) => entry.type === 'story' && entry.title === title,
				);
				const story =
					stories.find((entry) => entry.id.endsWith('--default')) ?? stories[0];
				const docs = entries.find(
					(entry) => entry.type === 'docs' && entry.title === title,
				);

				if (!story) {
					return (
						<article key={title} role="alert">
							No Storybook story found for {title}.
						</article>
					);
				}

				const link = docs ? `/docs/${docs.id}` : `/story/${story.id}`;
				const storyUrl = new URL(
					`iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`,
					window.location.href,
				).toString();
				const componentUrl = new URL('./', window.location.href);
				componentUrl.searchParams.set('path', link);

				return (
					<article key={story.id} css={cardStyles}>
						<div css={storyFrameContainerStyles}>
							<iframe
								title={`${label} story`}
								src={storyUrl}
								loading="lazy"
								css={storyFrameStyles}
							/>
						</div>
						<div css={cardLabelStyles}>
							<a href={componentUrl.toString()} target="_top">
								{label}
							</a>
						</div>
					</article>
				);
			})}
		</div>
	);
};
