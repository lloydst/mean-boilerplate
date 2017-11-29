# MeanStack Boilerplate with angular 5
## install
after cloning npm i in the root directory.

### sources:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
and the [express-generator](https://github.com/expressjs/generator) version 4.15.5.
## Development server

Run `ng serve` for a dev (frontend)server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `node /server/bin/www` with optional --dev tag or using nodemon instead of node for reset on changes.
a recomended change to make is to use express to staticly serve your angular application (the dist folder that gets created after a ng-build).
you can change this in the app.js file in the server directory.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## structure
server contains all server related stuff.
e2e    "        "   Test   related stuff. (for angular only )
source "        "   your angular project.
