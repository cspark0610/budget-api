import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Posts extends BaseSchema {
  protected tableName = 'posts';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('text_body').notNullable();
      table.boolean('published').notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable();
      table.timestamp('updated_at', { useTz: true }).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
