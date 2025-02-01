# Repo intro

- Bootstrapped with TurboRepo with Tailwind example, heavily modified for this challenge. (https://github.com/vercel/turborepo/tree/main/examples/with-tailwind).
- Used a monorepo to illustrate basic frontend scalability and flexibility (can demo a much deeper architecture).
- Components, utils, types, FE app, BE node api, configs are separated by apps folder, and packages folder.
- I have left code comments wherever it makes sense to explain the situation.

## Important caveats due to the 4-5 hour limit (Tradeoffs)

- I did a quick and basic frontend architecture setup. The monorepo setup such as bundler, configs, design system, test, were done quickly to run the challenge. It does not represent how I would setup a monorepo and FE architecture in an actual production system.
- Not all files were covered by tests to save time, but hopefully enough to represent.
- The config in packages are not all reused across the apps and packages.
- Card component is very opinioted. In a well-designed design system, it would be more agnostic, and use compound components technique. Example: (https://ui.shadcn.com/docs/components/card).
- I have a presentation with diagrams to go deep dive into my own scalable and flexible FE architecture, if given the oppurtunity.
- Git commit history was kept reasonably clean, but in production it would be squashed to represent 1 commit per feature for most scenarios, with exceptions.
- Most things can be done much more modular from FE to BE. Ideally, FE architecture and infrastructure should already be at a very high quality before building features as it makes everything much easier.

## Installation

- Recommended to use WSL if running in Windows to avoid potential file permission issues. (https://learn.microsoft.com/en-us/windows/wsl/install).
- Intall PNPM as the monorepo requires workspaces (https://pnpm.io/installation#on-posix-systems).
- Safer to install PNPM version 9.15.4 as version 10 only came out recently with potential issues:
```sh
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=9.15.4 sh -
```
- Repo is configured to use Node 22 and above (https://nodejs.org/en/download/current).

## Running the apps

```sh
pnpm install
pnpm build
pnpm dev
```
- The hotels app should be on http://localhost:5173/.
- Node API is on http://localhost:3000/.

## Tests

As explained earlier under caveats, not everything is tested with full scenarios and coverage to keep it within the time limit. To run the tests:

```sh
pnpm test
```

Test files:

- packages/utils/tests/startCase.test.ts
- packages/ui/tests/PrimaryShellLayout.test.tsx
- apps/hotels-api/src/propertyOffer/propertyOffer.controller.spec.ts

I left out UI E2E tests to prevent any issues related to WSL in another machine. Further, it was out of the time limit. Normally, I like to write Playwright tests. I am happy to discuss my knowledge of designing scalable and maintainable E2E tests for complex requirements; such as testing features with a matrix of access controls.
