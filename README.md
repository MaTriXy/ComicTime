# <img alt="Buzz" src="./art/logo.svg" height="60" width="60"/> Comic Time [![Build Status](https://travis-ci.org/ComicTime/ComicTime.svg?branch=master)](https://travis-ci.org/ComicTime/ComicTime)

Allow any user to easily read comics, without any prerequisites.

## Running this project:

This repository is built on top of [React](https://reactjs.org/) and [Redux](https://redux.js.org/advanced/middleware) using [Yarn](https://yarnpkg.com/en/) for dependency management. Thanks to these tools you can easily run this project on your computer running the following commands:

```
yarn install
yarn start // Starts a webpack-dev-server instance with our react application running on a browser.
```

## Building this project:

As this project is built on top of [React](https://reactjs.org/) we can easily generate distribution site. We've configured this project to easily generate the distribution binaries executing the following command:

```
yarn build
```

**Remember, you'll have to execute ``yarn install`` first.**

The execution of this command will generate a static site you can place anywhere inside the ``build`` folder.

## Executing tests:

This project contains some tests written using [Jest](https://facebook.github.io/jest/). You can easily run the tests by executing one of the following commands:

```
yarn test // Executes every test inside the src folder.
yarn test --updateSnapshot // Executes every test inside the src folder recording snapshots again.
yarn test --watch // Watch files for changes and rerun tests related to changed files.
yarn test --watchAll // Watch files for changes and rerun every test.
yarn test --testRegex "String calculator spec*" //Executes tests matching with the regex passed as param.
```

## Linter:

This repository uses [eslint](https://eslint.org/) in order to check if the js code written matches the checkstyle configured. You can check if everything is ok by executing ``yarn lint`` and automatically fix the issues by executing ``yarn fixLint`` if needed.

## Contributing

If you would like to contribute code to this repository you can do so through GitHub by creating a new branch in the repository and sending a pull request or opening an issue. Please, remember that there are some requirements you have to pass before accepting your contribution:

* Write clean code and test it.
* The code written will have to match the product owner requirements.
* Follow the repository code style.
* Write good commit messages.
* Do not send pull requests without checking if the project build is OK in the CI environment.
* Review if your changes affects the repository documentation and update it.
* Describe the PR content and don't hesitate to add comments to explain us why you've added or changed something.

## Contributors

* Pedro Vicente Gómez Sánchez - <pedrovicente.gomez@gmail.com> <a href="https://twitter.com/pedro_g_s"><img alt="Follow me on Twitter" src="https://image.freepik.com/iconos-gratis/twitter-logo_318-40209.jpg" height="20" width="20"/></a> <a href="https://es.linkedin.com/in/pedrovgs"><img alt="Add me to Linkedin" src="https://image.freepik.com/iconos-gratis/boton-del-logotipo-linkedin_318-84979.png" height="20" width="20"/></a>

## License

    Copyright 2018 Comic Time

    Licensed under the GNU General Public License, Version 3 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.gnu.org/licenses/gpl-3.0.en.html

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.