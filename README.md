# PuzzleCaptcha

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#installation
1) Add captcha tag in your component html
<mk-puzzle-captcha (verifiyhandler)="received_captcha_event($event)"></mk-puzzle-captcha>

2) Add function in component.ts file
// Recevied captcha authantication event function verifiy: success/failed
  received_captcha_event(verify: String) {
    console.log(verify);
    this.captcha_verification = (verify == "success") ? false : true;
  }

3) Install Jquery NPM packege
 npm i jquery

4) Add Font awsome link in main index.html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">

5) Add CSS and Script in angular.json file
"styles": [
        "projects/puzzle-captcha/captcha_assets/slidercaptcha.min.css"
    ],
"scripts": [
        "./node_modules/jquery/dist/jquery.min.js",
        "projects/puzzle-captcha/captcha_assets/mkg.slidercaptcha.min.js"
    ]