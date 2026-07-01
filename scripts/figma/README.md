# Generate Design Tokens from Figma Variables

This script exists to export the Figma variables that define the design system into tokens that Style Dictionary can read. It uses the Figma [REST api](https://developers.figma.com/docs/rest-api/variables-endpoints/#get-local-variables-endpoint), so needs a token to be passed in as an environment variable when running the script.

Before you start, create a new branch for the update.

## How to run

First, get a Figma [token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) with the `file_variables:` scope. Then run:

`FIGMA_TOKEN=<TOKEN_HERE> pnpm dlx tsx scripts/figma/fetch-figma-variables.ts`

## After running the script

Manually check the changes to the files to make sure that only the changes you/designers expect to see are present in the PR. Remove and/or revert any unexpected changes spotted during the manual check.

Run `pnpm run build-styled` to build the design tokens. This should also (but not always) error if there are unexpected changed. Check that the newly built files are as expected.

Make sure to also run `npx changeset` to create a changesets release file for a version bump.

Push the branch to remote and create a PR. Have another developer review and check before merging the branch into main and creating a new release.

Once you are happy that all the new changes in Figma have been captured, run the style dictionary build command to regenerate the output files: `pnpm run build-styled`

After the PR has been approved you can merge and create a changeset for the new release using the `npx changeset` command. Consult with colleagues on whether the Figma style changes require a major (N.x.x), minor (x.N.x) or bugfix (x.x.N) version update.
