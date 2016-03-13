# react-choice-multilist

ReactJS component for item's manipulation stored in two lists. Based on bootstrap and font-awesome. Dependencies: lodash.

##Before the first run

1. If don't have `gulp` installed, run `npm install -g gulp` in terminal (*)  
2. Go to project root in terminal
3. Run `npm install`
4. Run `gulp`

(*) node.js must be installed. You can install it from [NodeJS site](http://nodejs.org/).

##Gulp tasks

All gulp tasks runs with `gulp task-name`, e.g. `gulp dev`, from project root directory.

* `default` -- run `browserify` to build ReactJS files, `copy-fonts` to copy FontAwesome fonts to `dist` folder, build `sass` files. 
* `dev` -- run `default` tasks, `connect` to default browser, `open` it and run `watch`-ers.