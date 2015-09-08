# AngularJS Full-Stack generator

> Yeoman generator for creating MEAN stack applications, using MongoDB, Express, AngularJS, and Node - lets you quickly set up a project following best practices.

## Usage

Install `generator-a3`:
```
npm install -g generator-a3
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo a3`, optionally passing an app name:
```
yo a3 [app-name]
```

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Supported Configurations

**Client**

* Scripts: `JavaScript`, `CoffeeScript`
* Markup:  `HTML`, `Jade`
* Stylesheets: `CSS`, `Stylus`, `Sass`, `Less`,
* Angular Routers: `ngRoute`, `ui-router`

**Server**

* Database: `None`, `MongoDB`
* Authentication boilerplate: `Yes`, `No`
* oAuth integrations: `Facebook` `Twitter` `Google`
* Socket.io integration: `Yes`, `No`

## Injection

A grunt task looks for new files in your `client/app` and `client/sdk` folder and automatically injects them in the appropriate places based on an injection block.

* `less` files into `client/app.less`
* `scss` files into `client/app.scss`
* `stylus` files into `client/app.styl`
* `css` files into `client/index.html`
* `js` files into `client/index.html`
* `coffeescript` temp `js` files into `client/index.html`

## Generators

Available generators:

* App
    - [a3](#app) (aka [a3:app](#app))
* Server Side
    - [a3:endpoint](#endpoint)
* Client Side
    - [a3:route](#route)
    - [a3:controller](#controller)
    - [a3:filter](#filter)
    - [a3:directive](#directive)
    - [a3:service](#service)
    - [a3:provider](#service)
    - [a3:factory](#service)
    - [a3:decorator](#decorator)
* Deployment
    - [a3:openshift](#openshift)
    - [a3:heroku](#heroku)

### App
Sets up a new AngularJS + Express app, generating all the boilerplate you need to get started.

Example:
```bash
yo a3
```

### Endpoint
Generates a new API endpoint.


Example:
```bash
yo a3:endpoint message
[?] What will the url of your endpoint be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/message.spec.js
    server/api/message/message.controller.js
    server/api/message/message.model.js  (optional)
    server/api/message/message.socket.js (optional)

### Route
Generates a new route.

Example:
```bash
yo a3:route myroute
[?] Where would you like to create this route? client/app/
[?] What will the url of your route be? /myroute
```

Produces:

    client/app/myroute/myroute.js
    client/app/myroute/myroute.controller.js
    client/app/myroute/myroute.controller.spec.js
    client/app/myroute/myroute.html
    client/app/myroute/myroute.scss


### Controller
Generates a controller.

Example:
```bash
yo a3:controller user
[?] Where would you like to create this controller? client/app/
```

Produces:

    client/app/user/user.controller.js
    client/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo a3:directive myDirective
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? Yes
```

Produces:

    client/app/myDirective/myDirective.directive.js
    client/app/myDirective/myDirective.directive.spec.js
    client/app/myDirective/myDirective.html
    client/app/myDirective/myDirective.scss

**Simple directive without an html file**

Example:
```bash
yo a3:directive simple
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? No
```

Produces:

    client/app/simple/simple.directive.js
    client/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo a3:filter myFilter
[?] Where would you like to create this filter? client/app/
```

Produces:

    client/app/myFilter/myFilter.filter.js
    client/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo a3:service myService
[?] Where would you like to create this service? client/app/
```

Produces:

    client/app/myService/myService.service.js
    client/app/myService/myService.service.spec.js


You can also do `yo a3:factory` and `yo a3:provider` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo a3:decorator serviceName
[?] Where would you like to create this decorator? client/app/
```

Produces

    client/app/serviceName/serviceName.decorator.js


## Bower sdk

The following packages are always installed by the [app](#app) generator:

* angular
* angular-cookies
* angular-mocks
* angular-resource
* angular-sanitize
* angular-scenario
* es5-shim
* font-awesome
* json3
* jquery
* lodash

These packages are installed optionally depending on your configuration:

* angular-route
* angular-ui-router
* angular-socket-io
* angular-bootstrap
* bootstrap

All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use `grunt test:e2e` to have protractor go through tests located in the `e2e` folder.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    ├── client
    │   ├── app                 - All of our app specific sdk go in here
    │   ├── assets              - Custom assets: fonts, images, etc…
    │   ├── sdk          - Our reusable sdk, non-specific to to our app
    │
    ├── e2e                     - Our protractor end to end tests
    │
    └── server
        ├── api                 - Our apps server api
        ├── auth                - For handling authentication with different auth strategies
        ├── sdk          - Our reusable or app-wide sdk
        ├── config              - Where we do the bulk of our apps configuration
        │   └── local.env.js    - Keep our environment variables out of source control
        │   └── environment     - Configuration specific to the node environment
        └── views               - Server rendered views

An example client component in `client/app`

    main
    ├── main.js                 - Routes
    ├── main.controller.js      - Controller for our main route
    ├── main.controller.spec.js - Test
    ├── main.html               - View
    └── main.less               - Styles

An example server component in `server/api`

    thing
    ├── index.js                - Routes
    ├── thing.controller.js     - Controller for our `thing` endpoint
    ├── thing.model.js          - Database model
    ├── thing.socket.js         - Register socket events
    └── thing.spec.js           - Test


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
