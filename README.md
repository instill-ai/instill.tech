# instill.tech

This repository maintains the Instill AI product website and VDP documentation.

## Contribution
1. Clone the github
2. `pnpm install`

### Reminder

1. We mainly have singular major breakpoint right now: xl: (1127px)
  - OurMember component is still under re-construction.
  - InstillCloud use md breakpoint because it makes more sense.
2. The max-width of context is 1127px

## Build up next app
```bash
pnpm run dev
```

Then, go to `http://localhost:3010`. You can add `-p <port number>` to the command to deploy on a different port.

## Build up storybook
```bash
pnpm run storybook
```

## About how to contribute to Documentation, Tutorials and blog

Please refer to contributing guideline [here](CONTRIBUTING.md)