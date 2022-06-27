# BudgetAPIv2

# Typescript Clean Architecture

It is my attempt to create Clean Architecture based application in Typescript.

## Requirements

- yarn
- @nest/cli `npm i -g @nestjs/cli`

## Installation

1. Install dependencies

```bash
yarn
```

2. Enable a development database **Postgres**
3. Create the environment variables file (.env.development) and complete

## Running the app

```bash
# development
yarn dev

# production mode
yarn build
```

## Test

```bash
# unit tests
yarn test
```


## TypeORM

Create new migration

> **NOTE:** You must have a database connection configured in the `ormconfig.json` file

> **NOTE:** Run `yarn build` before running the migration

```bash
$ npx typeorm migration:generate -n entities-[name-module]
# el nombre del modulo debe separarse por guiones
```

Run existing migrations

```bash
$ npx typeorm migration:run
```