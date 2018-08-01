# MeanStack Boilerplate with angular 6
[preview](https://boilerplate-preview.herokuapp.com/)
## install
after cloning `npm i` in the root directory.
(this also builds the dist folder for the first time)

### sources:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
and the [express-generator](https://github.com/expressjs/generator) version 4.15.5.
## Development server

Run `ng serve` for a dev (frontend)server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `node server.js` for your express server `http://localhost:3000/`

Because the node server also watches the dist folder, you could use `nodemon server.js` instead. if you then make changes to your angular app simply type `ng build` in another window and the server will automaticly restart.


## Code scaffolding (angular cli)

Run `ng generate component componentname` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## structure
server contains all server related stuff.
 - "e2e"  Test related stuff. (for angular only )
 - "src" your angular project.
 - "dist" the build version of your angular app (compressed)
 - node

## database
to connect to a database simple add a .env file in the root and type `MONGOURI = mongodb://localhost:27017/whatever_you_want_the_database_to_be_called` 

# optional
state



# adding ngrx (state) to your app
`npm install @ngrx/schematics --save-dev`
`ng config cli.defaultCollection @ngrx/schematics`
## install ngrx packages
`npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store –save`
`npm install @ngrx/schematics --save-dev`
`ng config cli.defaultCollection @ngrx/schematics`
the last command sets up your angular cli so that you can use ngrx schematics

## generate store folder in app folder with root reducer
`ng generate store State --root --statePath store/reducers --module app.module.ts`
after this command you will need to fix the following line in app.module
`import { environment } from ‘../../../environments/environment’;`
unfortunatly the ngrx schematics arent the smartest thing
# generate
auth is just a place holder
## action
action definitions
`ng generate action store/actions/auth --actions index.ts`
## reducer
state, initial state, state functions
`ng generate reducer store/reducers/auth --reducers index.ts`
## effects
http request for instance
`ng generate effect store/effects/auth --module app.module --root true`
needs the following imports : 

`import { Injectable } from '@angular/core';`

`import { Actions, Effect, ofType } from '@ngrx/effects';`

`import { Observable } from 'rxjs';`

`import { HttpClient } from '@angular/common/http';`

`import * as authActions from '../actions/auth.actions';` (this one has to be changed ofc)

`import { Action } from '@ngrx/store';`

`import { switchMap, map } from 'rxjs/operators';`

## final

the most basic structure you should see is:

(...)
src
 - app
     - store
        - actions
             - auth.actions.ts
        - effects
             - name.effects.ts
        - reducers
             - index.ts
             - name.reducer.ts

(...)