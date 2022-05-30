/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';
//import ApuController from 'app/Controllers/Http/project-apus/ApuController';

Route.get('/', async () => {
  return 'Hello world from a slim app';
});

Route.group(() => {
  Route.group(() => {
    Route.get('/', 'PostsController.getAll');
    Route.get('/:id', 'PostsController.index').where(
      'id',
      Route.matchers.number()
    );
    // Route.post('/', (ctx) => new ApuController().create(ctx));
    //Route.post('/', 'ApuController.create');
    Route.patch('/:id', 'PostsController.update').where(
      'id',
      Route.matchers.number()
    );
    Route.delete('/:id', 'PostsController.delete').where(
      'id',
      Route.matchers.number()
    );
  }).prefix('/posts');
}).prefix('/api/v1');
