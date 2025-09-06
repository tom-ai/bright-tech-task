# BrightHR Tech Task

An SPA that displays files and folders. Built with React and TypeScript.

View the hosted version at [bright-tech-task.pages.dev](https://bright-tech-task.pages.dev)

To run locally: clone this repo, install dependencies and run `npm run dev`. To run the tests, `npm run test`.

The original task is at https://github.com/brighthr/Front-End-Tech-Tasks/blob/main/junior-and-middleweight.md

## General process

1. Create type definitions and roughly map out data.
2. Add tests around acceptance criteria (e.g. file name, type and date display correctly)
3. Refactor UI and tidy up tests (because now I can mess around with things confidently)
4. Repeat process with additional features such as filtering

## Given More Time

- Allow for nested files and folders, using recursion to map them out.

- Added sorting features.

- Squashed more commits. I'm leaving the histroy as verbose as possible for you!

- Utilised query params rather than useState to hold search query data for nicer UX.

- Tests around the hook.

- Memoised the filtered files with `useMemo`

- Made naming conventions more consistent (e.g. 'docs'/'documents'/'data'/'items'/'files' etc!)

## Some challenges I came up against

When filtering files, I initally used a `.filter` directly on the data and made some tests around it. But I soon came up against a challenge when dealing with nested files in a folder. I needed to run the function on itself which started failing some tests. I therefore updated my function to flatten the data so I could filter only on files and exclude folders all together.

## How I have used AI

- Making test data based on my exisitng data and type definitions
- Help with debugging some failed tests
