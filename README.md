# TestOl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.
ng build fails with the error 

Error: node_modules/ol/format/GMLBase.d.ts:243:15 - error TS2416: Property 'readGeometryFromNode' in type 'GMLBase' is not assignable to the same property in base type 'XMLFeature'.
  Type '(node: Element, opt_options?: ReadOptions | undefined) => Geometry | Extent' is not assignable to type '(node: Element, opt_options?: ReadOptions | undefined) => Geometry'.
    Type 'Geometry | Extent' is not assignable to type 'Geometry'.
      Type 'number[]' is missing the following properties from type 'Geometry': extent_, extentRevision_, simplifiedGeometryMaxMinSquaredTolerance, simplifiedGeometryRevision, and 51 more.

243     protected readGeometryFromNode(node: Element, opt_options?: import("./Feature.js").ReadOptions | undefined): import("../geom/Geometry.js").default | import("../extent.js").Extent;
                  ~~~~~~~~~~~~~~~~~~~~

the file gml-test.ts contains the code that causes the failure.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
