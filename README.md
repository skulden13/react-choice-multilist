# react-choice-multilist

This is the ReactJS component for an item's manipulation stored in a two lists.
It's based on Bootstrap and FontAwesome.
Dependencies: lodash.

You can view a [demo here](http://skulden13.github.io/react-choice-multilist/).

##Before the first run

1. If you don't have `gulp` installed, run `yarn global add gulp` in terminal (*)  
2. Go to the project root in a terminal
3. Run `yarn`
4. Run `gulp`

(*) You need these tools to run the project:
* [NodeJS](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Gulp](http://gulpjs.com/)

##Gulp tasks

All gulp tasks runs with `gulp task-name`, e.g. `gulp dev`, from the project root directory.

* `default` -- run `browserify` to build ReactJS files, `copy-fonts` to copy FontAwesome fonts to the `dist` folder, build `sass` files.
* `dev` -- run `default` tasks, `connect` to a default browser, `open` it and run `watch`-ers.
