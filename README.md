# AngularElements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Steps to create this project

#### 1. Create a function `ngDoBootstrap` inside AppModule class and add following code inside it.

    export class AppModule {

        constructor(private _injector: Injector) { }

        ngDoBootstrap(): void {
            const element = createCustomElement(AppComponent, { injector: this._injector });
            customElements.define('app-angular-elements', element);
        }
    }

#### 2. Remove Bootstrap property from @NgModule metadata of AppModule.

#### 3. Update angular.json file by changing "outpusHashing" to "none" for all build configurations

#### 4. Install [`concat`](https://www.npmjs.com/package/concat) package from npm to concat the javascript files generated from `ng build` command.

    npm i concat

#### 5. Create concat.js file outside `src` folder of the project that should be executed after the build is complete

#### 6. Add following code inside `concat.js` file to concat/merge all build files into one file.

    const concat = require("concat");

    (async function build() {
        const files = [
            "./dist/angular-elements/main.js",
            "./dist/angular-elements/polyfills.js",
            "./dist/angular-elements/runtime.js"
        ];

        await concat(files, "./dist/angular-elements/elements.js");
    })();

#### 7. Install `ts-node` package to run `contact.js` file.

    npm i ts-node

#### 8. Update `package.json` file by adding a separate script for bundling

    "bundle": "ng build --configuration production && ts-node ./concat.js"

#### 9. This script when executed will create a separate file called `elements.js` which then can be used inside any web development project along with its HTML tag `app-angular-elements`

    <script src="./path_to_element.js/element.js" async>

    <body>
        <app-angular-elements></app-angular-elements>
    </body>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
## Support

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
