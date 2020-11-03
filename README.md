Webpack 5 Boilerplate
===========
![npm](https://img.shields.io/npm/v/webpack?label=webpack&style=flat-square&logo=webpack)
![npm](https://img.shields.io/npm/v/webpack-cli?label=webpack-cli&style=flat-square&logo=webpack)
![npm](https://img.shields.io/badge/dependencies-up--to--date-green?style=flat-square&logo=npm&color=success)
![Dependabot](https://flat.badgen.net/dependabot/cvgellhorn/webpack-boilerplate?icon=dependabot)

> A minimal webpack 5 boilerplate with only Babel, SASS and lodash (optional) on board

## Requirements
You only need <b>node.js</b> `>=10.13.0` pre-installed and you’re good to go. 

If you don’t want to work with lodash, just remove it from the node packages.

## Usage
Download to target directory or use this repository as a template
```sh
$ curl -L -o master.zip https://github.com/cvgellhorn/webpack-boilerplate/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-boilerplate-master/{.,}* ./ && rm -r ./webpack-boilerplate-master
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Build the app in dev mode and run webpack serve with livereload and autocompile on [http://0.0.0.0:8080/](http://0.0.0.0:8080/)
```sh
$ npm run dev
```
## Production
Build the app in production mode
```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, [webpack serve](https://github.com/webpack/webpack-cli/blob/master/packages/serve/README.md#webpack-cli-serve) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
