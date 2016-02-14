# my-app (Angular app)

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

The idea is to improve some of the autogenerated features:

* Use ui-router instead of ng-route.
* Use partials instead of views, each partial has a view and a controller with state configured.
* Add core, directives and services folders to improve the structure.
* Configure package.json to install karma dependencie.

## Install

Clone this repo `git clone https://github.com/tretapey/angular-app`  
`cd angular-app`  
`bower install`   
`npm install`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.