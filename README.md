# Budget Smartcore API

## Requirements

- yarn >= 1.22.*
- node >= 16.*
- eslint plugin | extension
- prettier plugin | extension

## Installation

Install dependencies

```shell
$ yarn install
```

Enable a development database **Postgres**
Add environment variables file `.env`, use the `.env.example` guide

## Running the application

Check the package.json file to see the other commands
```shell
# development mode
yarn dev

# production mode
yarn build

# testing mode
yarn test
```

## Frequent commands: 
`node ace ...`

### List
```shell
$ list:routes         // List application routes.
```

### Make
```shell
$ make:model          // Make a new model with lucid.
$ make:controller     // Make a new HTTP controller.
$ make:middleware     // Make a new middleware.
$ make:migration      // Make a new migration.
$ make:provider       // Make a new IoC container provider.
$ make:validator      // Make a new validator.
```

### Migrations
```shell
$ migration:run       // Run all pending migrations.
$ migration:rollback  // Rollback last set of migrations.
$ migration:refresh   // Run migration:reset & re-run them from the start.
$ migration:reset     // Rollback all migrations to the 0 batch.
$ migration:status    // Get the status of all the migrations.
```