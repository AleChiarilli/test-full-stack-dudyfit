# Test Full-Stack DudyFit
Éste repositorio contiene la solución al Test Full-Stack DudyFit, que consiste en
la asignación de Clientes a Entrenadores basado en preferencias específicas.
El objetivo es maximizar la satisfacción global de los Clientes, considerando
la reputación de los Entrenadores, y la importancia asignada de los Clientes
a dicha reputación.

## Enfoque de solución
La solución aplica Node.js y TypeScript.
La métrica de la satisfacción es determinada utilizando una operación matemática simple, en la que se busca asignar los Entrenadores con mejor reputación a los Clientes que más les importa disponer de clases con Entrenadores de mejor reputación:

    S = Σ (R_{i(j)} × I_j)

Donde:
 S es la métrica de satisfacción global.
 R_{i(j)} es la reputación del entrenador asignado al cliente j.
 I_j es la importancia del cliente j respecto a la reputación del entrenador.

Para realizar ésta operación, se han ordenado a los Entrenadores y a los Clientes en función de su "Reputación" e "Importancia del Entrenador", respectivamente, para así garantizar que siempre a los Clientes que estén más interesados en conseguir plazas con Entrenadores con reputación, y tengan la prioridad de asignación.

Éste enfoque garantiza además, que los Entrenadores con mejor reputación gozarán de un mayor número de Clientes, lo que a su vez asegura que los Clientes tienden a gozar de clases con el mejor entrenador disponible, de ésta manera se premia también a los mejores Entrenadores.

Durante el proceso de asignación, los objetos entrenador van mutando para ir albergando también las propiedades de Clientes asignados, junto con la Satisfacción Estimada Alcanzada de cada uno de ellos.

## Consideraciones

El código se ha intentado mantener lo suficientemente autoexplicativo.
Sin embargo, se han agregado algunas anotaciones para futuras referencias, mejoras, o para facilitar comprensión a nuevos y terceros.

Éste proyecto fue creado a partir del boilerplate:
"https://github.com/jsynowiec/node-typescript-boilerplate"
para agilizar el proceso de instalación del entorno de trabajo.

## Instrucciones "Plug and Play"
1. Clonar el repositorio en tu máquina local o virtual.
2. Asegurarte de que tienes instaladas las dependencias y módulos con "npm install".
3. En la terminal, ejecutar el comando "npm run build && npm run start".

Más información de cómo instalar e inicializar el boilerplate se encuentrará más abajo.


# node-typescript-boilerplate

[![Sponsor][sponsor-badge]][sponsor]
[![TypeScript version][ts-badge]][typescript-5-3]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [5.3][typescript-5-3]
- [ESM][esm]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- [EditorConfig][editorconfig] for consistent coding style
- Reproducible environments thanks to [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions]
- Simple example of TypeScript code and unit test

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Use as a repository template

To start, just click the **[Use template][repo-template-action]** link (or the green button). Start adding your code in the `src` and unit tests in the `__tests__` directories.

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/jsynowiec/node-typescript-boilerplate
cd node-typescript-boilerplate
npm install
```

### Download latest release

Download and unzip the current **main** branch or one of the tags:

```sh
wget https://github.com/jsynowiec/node-typescript-boilerplate/archive/main.zip -O node-typescript-boilerplate.zip
unzip node-typescript-boilerplate.zip && rm node-typescript-boilerplate.zip
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,

## Additional Information

### Why include Volta

[Volta][volta]’s toolchain always keeps track of where you are, it makes sure the tools you use always respect the settings of the project you’re working on. This means you don’t have to worry about changing the state of your installed software when switching between projects. For example, it's [used by engineers at LinkedIn][volta-tomdale] to standardize tools and have reproducible development environments.

I recommend to [install][volta-getting-started] Volta and use it to manage your project's toolchain.

### ES Modules

This template uses native [ESM][esm]. Make sure to read [this][nodejs-esm], and [this][ts47-esm] first.

If your project requires CommonJS, you will have to [convert to ESM][sindresorhus-esm].

Please do not open issues for questions regarding CommonJS or ESM on this repo.

## Backers & Sponsors

Support this project by becoming a [sponsor][sponsor].

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-5.3-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.9-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v20.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-3]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[editorconfig]: https://editorconfig.org
