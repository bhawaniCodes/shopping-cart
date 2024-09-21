# React + TypeScript + Vite

This template provides a minimal setup for getting started with React using Vite as the build tool, and TypeScript for type checking. It includes Hot Module Replacement (HMR) and some basic ESLint configuration.


## Features

- **React**: A powerful JavaScript library for building user interfaces, especially single-page applications.
- **TypeScript**: A typed superset of JavaScript that helps with catching errors early and improving code maintainability.
- **Vite + SWC**: A modern build tool offering fast builds and development server with HMR.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern user interfaces.
- **Componentization**: A structured approach to building reusable and maintainable components.
- **State Management with `Redux`**: Simplifies state management with a more predictable and scalable approach than `useState` and we use it for a larger application to handle the states.
- **Performance Optimization**:
  - **`React.memo`**: Prevents unnecessary re-renders of components by memoizing them.
  - **`useMemo`**: Memoizes expensive calculations to avoid redundant computations.
- **Local Storage**: To save the cart data in-between the page refresh. Saving only cart data in my local storage


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
