# Generate Design Tokens from Figma Variables

This script exists to export the Figma variables that define the design system into tokens that Style Dictionary can read. It uses the Figma [REST api](https://developers.figma.com/docs/rest-api/variables-endpoints/#get-local-variables-endpoint), so needs a token to be passed in as an environment variable when running the script.

Before you start, create a new branch for the update.

## How to run

First, get a Figma [token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) with the `file_variables:` scope. Then run:

`FIGMA_TOKEN=<TOKEN_HERE> pnpm dlx tsx scripts/figma/fetch-figma-variables.ts`

## After running the script

Push the branch to remote, then manually check the PR to make sure that only the changes you/designers expect to see are present in the PR. Remove and/or revert any unexpected changes spotted during the manual check before merging the branch into main and creating a new release.
