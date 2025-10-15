# Why colocate @guardian/stand within flexible-content

Date: September 2025

## Status

Accepted

## Context

After deciding to create a new component library for journalism tools ([ADR](202509-why-stand.md)) we needed to choose a particular repo to store the code and publish the library from.

## Options

- Colocate within flexible-content
    - Composer is likely to be one of, if not the biggest consumer
    - Components live where they're consumed in at least one place
    - Composer won't need to do a version bump to get the latest components
    - Developers are more likely to contribute components when already working in the repo
- Add stand to the CSNX repo
    - There is mature tooling infrastructure for building and releasing packages
    - The monorepo requires using the latest version of dependencies within it, e.g. React or Typescript
    - This will be difficult for "legacy" applications to use if they are far behind on dependency updates
- Create a new repo to store `@guardian/stand`
    - It can be more obvious who owns the repo and therefore responsible for the library
    - It will be easier to target older dependencies than CSNX
    - Developers may be less likely to contribute to the library because the repo is not widely used or known

## Decision

Colocate `@guardian/stand` within flexible-content.

## Consequences

- Flexible-Frontend has a local dependency on `@guardian/stand`
- Composer uses the first published component, the byline field
- There is a shorter feedback loop developing components for Composer
