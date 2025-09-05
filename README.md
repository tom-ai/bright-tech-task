# BrightHR Tech Task

An SPA that displays files and folders. Built with React and TypeScript.

## General process

1. get data mapped out roughly
2. add some tests around acceptance criteria (e.g. file name, type, date all display correctly)
3. refactor UI and tidy up tests (because now I can mess around with things confidently)

## How I have used AI

To assist making the types

To guide through file strucutre

For naming things! E.G. what name do you suggest for the JSON of data (i don't like "data/data.json"!)

Make me some minimal test data I can use based on my data and types

## Given More Time

Allow for nested files and folders, using recursion to map them out.

Applied more TDD when rendering out the files and folders

Squashed more commits. I'm leaving the histroy as verbose as possible for you!

Utilised query params torather than useState to hold search query data for nicer UX.

Tests around the hook.

## Some challenges I came up against

On the filtering, searching nested files in a folder I needed to run the function on itself. thinking I might need to flatten the data. Rather than creating a filter predicate I made a searchFiles function which flattened the data and returned a simple list of files that match the query.

Asking GPT on my filtering...
Right now your filterItems is shaped like:

```function filterItems(item: Item, query: string): boolean
so you end up doing:
items.filter(item => filterItems(item, q));
```

That works fine for top-level files, but it falls apart for nested ones — because filter only works one level deep. You’d have to keep track of “did any child match?” and bubble that up… which is messy if you don’t want folders in your results.

After replacing my filter predicate idea with a search files method I came to the point where I need to set state with either filtered files or all files and folders. It was at this point I decided i wanted to sort the items so all folders live at the top and files are below. Testing this in its current state would be difficult, so I am going to create a hook and test that the files and folders are sorted by default before they get mapped out or sorted.
