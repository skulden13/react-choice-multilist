# react-choice-multilist

This is the ReactJS component for an item's manipulation stored in a two lists.
Dependencies: underscore.

You can view a [demo here](http://skulden13.github.io/react-choice-multilist/).


## Before the first run

1. If you don't have `gulp` installed, run `yarn global add gulp` in terminal (*)  
2. Go to the project root in a terminal
3. Run `yarn`
4. Run `gulp`

(*) You need these tools to run the project:
* [NodeJS](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Gulp](http://gulpjs.com/)


## Gulp tasks

All gulp tasks runs with `gulp task-name`, e.g. `gulp dev`, from the project root directory.

* `default` -- run `browserify` to build ReactJS files, `copy-fonts` to copy Fontello fonts to the `dist` folder, build `sass` files.
* `dev` -- run `default` tasks, `connect` to a default browser, `open` it and run `watch`-ers.


## TODO List:

- [x] to rewrite layout, add SUIT components
- [x] to remove Bootstrap dependency
- [x] to replace Lodash with Underscore (or better pure js)
- [ ] to reduce file size of Component js, css; to compress of output files
- [ ] to rename .icon Component to .Icon
- [ ] to convert CSS styles to SASS for Fontello
- [ ] to minimize style nesting
