# Why relocate @guardian/stand to its own public repository

Date: February 2026

## Status

Accepted

Supersedes [Why colocate `@guardian/stand` within flexible-content](2025-09-why-colocate.md)

## Context

`@guardian/stand` was initially [colocated within flexible-content](2025-09-why-colocate.md) for a set of reasons that no longer hold. At the same time, keeping it there has introduced its own costs. This ADR documents the decision to move `@guardian/stand` into its own standalone, public repository.

The Guardian has a strong culture of [coding in the open](https://theguardian.engineering/blog/info-developer-blog-2014-nov-28-developing-in-the-open), and a design system is a natural candidate for that.

### Why the original reasons for colocation no longer apply

- _Composer is likely to be one of, if not the biggest consumer_ — this did not turn out to be the case. The focus shifted to building an all-encompassing design system for journalism/internal tools rather than focusing on editorial components for Composer specifically.
- _Components live where they're consumed in at least one place_ — only the byline is currently consumed within flexible-content. New components being built will not initially be used in that library.
- _Composer won't need to do a version bump to get the latest components_ — a version bump is not, in practice, a significant burden, and the stability it provides outweighs the convenience.
- _Developers are more likely to contribute components when already working in the repo_ — by integrating `@guardian/stand` across multiple projects, starting with flexible-content and newsletters, there is now a central, well-known place to contribute regardless of which project a developer is working in.

## Options

- Keep `@guardian/stand` colocated within flexible-content
  - No migration effort required
  - Build times in flexible-content remain longer than necessary
  - Developers working on stand must wait for the entire flexible-content build
  - GitHub Actions minutes continue to be billed (private repo)
  - Changes to stand can inadvertently affect flexible-content without a versioned boundary
- Move `@guardian/stand` to the CSNX repo
  - There is mature tooling infrastructure for building and releasing packages
  - The monorepo requires using the specific version of dependencies, which rules out use by applications that are behind, or fall in a range of options on e.g. React or TypeScript versions
  - This will be difficult for "legacy" applications to use if they are far behind on dependency updates
- Move `@guardian/stand` to its own public repository
  - Aligns with the Guardian's coding-in-the-open principles
  - Public repositories do not consume paid GitHub Actions minutes
  - Removes stand from the flexible-content build, reducing overall build time for both
  - Developers can work on stand independently with a much faster feedback loop
  - A versioned package provides a clear boundary, reducing the risk of inadvertently breaking consumers
  - It is clear who owns and is responsible for the library
  - Can target a wider range of dependencies, making it easier for legacy applications to adopt

## Decision

Move `@guardian/stand` to its own standalone, public repository.

## Consequences

- `@guardian/stand` is now developed and published independently, following the Guardian's coding-in-the-open approach
- GitHub Actions minutes are no longer consumed for stand's CI, as the repository is public
- Removing stand from flexible-content reduces their total build time, and stand's own build no longer has to wait ~15 minutes for the rest of flexible-content to build first
- The version of `@guardian/stand` used in flexible-frontend and Composer is now explicitly pinned, reducing the risk of stand changes inadvertently breaking those applications
- Consumers such as flexible-content and newsletters will need to perform a version bump to receive updates, which is an acceptable trade-off given the stability it provides
