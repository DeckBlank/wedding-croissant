<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  ποΈ Create React App Codely template example
</h1>

<p align="center">
    <a href="https://github.com/${YOUR_ORG_SLUG}/${YOUR_REPO_SLUG}/actions/workflows/ci.yml"><img src="https://github.com/${YOUR_ORG_SLUG}/${YOUR_REPO_SLUG}/actions/workflows/ci.yml/badge.svg" alt="Build status"/></a>
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  App created with the <a href="https://github.com/CodelyTV/cra-template-codely">π±Kathy&Jose</a> 
  <br />
  <br />
  <a href="https://github.com/${YOUR_ORG_SLUG}/${YOUR_REPO_SLUG}/stargazers">Stars are welcome π</a>
</p>

## π Run the app

- `npm install`: Install dependencies
  Keep in mind that once you create your app based on the [π±βοΈ Create React App Codely template](https://github.com/CodelyTV/cra-template-codely), CRA will install all the needed dependencies. However, if you modify the `package.json` manually, you can run this command as usual
- `npm run dev`: Run in dev mode on [localhost:3000](http://localhost:3000)
- `npm run build`: Generate production build
- `npm run start`: Run generated content in `dist` folder on [localhost:3000](http://localhost:3000)

## β Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

- `npm start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- Run end-to-end tests with Cypress choosing one of the following options:
  - `npm run cy:open`: Open Cypress in dev mode
  - `npm run cy:run`: Execute Cypress in CLI

## π¦ Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## π Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [π€ Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/cra-template-codely/blob/main/template/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## π Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- π€ Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- π€ No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- π― **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- β **Tests** as documentation and usage examples
- π **Well documented ReadMe** showing how to install and use
- βοΈ **License favoring Open Source** and collaboration

## π Related information

This application was generated using the [π±βοΈ Create React App Codely template](https://github.com/CodelyTV/cra-template-codely). Feel free to check it out and star the repo! πππ
