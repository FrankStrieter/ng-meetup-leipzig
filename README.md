# LEDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

it shows the usage of libraries, schematics and Angular Elements in Angular 6 as shown at [Angular Meetup Leipzig](https://www.meetup.com/de-DE/Angular-Meetup-Leipzig/) 

How we get to this project:
```bash
# create the project
ng new le-demo --prefix=ngle --styles=scss

# add library @angular/material to the project
ng add @angular/material

# add a Material-Table to the project using schematics
ng generate @angular/material:material-table --name=product-list

# change the selector to ngdd-product-list and reference it in the app-component

# add a new library to the project
ng generate library common-components

# remove generated components and services from the library. Also remove them from the exports in public-api.ts

# generate a component called header in the library
ng g c header --project=common-components

# export the component in the module and reference it in the app-component. import the library from "common-components", the path is set in the tsconfig.json

# build the library
ng build --project=common-components

# add library @angular/elements to the project
ng add @angular/elements

# create a custom element in the common-components module (led-header) [you can see it in the current common-components.module.ts] 

# remove the HeaderComponent from the exports-array and put it in the entryComponents-array

# build the library
ng build --project=common-components

# reference the costum element "led-header" in the index.html

# build the project in production mode
ng build

# serve the project with the simple http-server included in dev-dependencies
npx http-server ./dist/dd-demo
```

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
