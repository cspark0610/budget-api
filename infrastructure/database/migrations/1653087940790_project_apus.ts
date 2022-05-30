import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ProjectApus extends BaseSchema {
  protected tableName = 'project_apus';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('code').notNullable();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.string('unit').notNullable();
      table.decimal('unit_price', 14, 4).notNullable();
      table.decimal('partial_hh', 10, 4).notNullable();
      table.decimal('efficiency_mo', 10, 4).notNullable();
      table.decimal('efficiency_eq', 10, 4).notNullable();
      table.string('status').notNullable();
      table.integer('id_apu_profile').notNullable();
      table.decimal('measured', 10, 4).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
