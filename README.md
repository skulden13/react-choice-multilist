# react-choice-multilist

The react-choice-multilist is a ReactJS component for an item's manipulation. The items are stored in two lists (the options list and the favorites list). The component is based on bootstrap and font-awesome. 
Dependencies: lodash.

You can view the [demo here](http://skulden13.github.io/react-choice-multilist/).

##Before the first run

1. If you don't have `gulp` installed, run `npm install -g gulp` in terminal (*).
2. Go to the project root in terminal.
3. Run `npm install` or `npm i`.
4. Run `gulp`.

(*) The NodeJS must be installed. You can install it from the [NodeJS site](http://nodejs.org/).

##Gulp tasks

All gulp tasks runs with `gulp task-name`, e.g. `gulp dev`, from the project's root directory.

* `default` -- runs `browserify` for building a ReactJS files, `copy-fonts` for copying the FontAwesome fonts to `dist` folder and `sass` for building css files. 
* `dev` -- runs `default` task: `connect`-s to a default browser, `open`-s it and starts `watch`-ers.