### Prettier, ESlint and Husky config

```bash
Note: Vite comes with it's own eslintrc file, so you don't need to install eslint

yarn add -D prettier eslint-config-prettier
create a prettier, prettierignore. Check files for configurations
yarn husky-init. Check the .husky folder for pre-commit configurations
yarn install.
modify package.json. Check package.json for configurations.
```

### To set up test with vite, jest and React testing library

[Jest & react testing library](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap){:target="\_blank" rel="noopener"}

### What is React Concurrent Rendering?

```
This is feature that was introduced in React18 and it allows for more responsive user interface by breaking down rendering into smaller chunks and prioritizing which part of the UI to render first.

It enables React tp pause, abort and resume rendering updates based on their priority, thus ensuring that high priority updates like user interactions and animations, are processed without delay, while lower-priority updates can be deferred or interrupted to prevent blocking the main thread.
```

### what is React Suspense?

```
This is a declarative API that helps us describe what data we need and what Loading state we are willing to show
and let's react handle the complex coordination to show the loading states appropriately
```

### what is React Compiler?

```
RC automatically optimizes your components and hooks so that only the minimal part of your UI updates as state changes. RC performs sophisticated optimizations like dead code elimination, type inferences, constant propagation, etc.
```
