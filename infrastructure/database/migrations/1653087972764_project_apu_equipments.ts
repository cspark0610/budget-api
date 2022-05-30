import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ProjectApuEquipments extends BaseSchema {
  protected tableName = 'project_apu_equipments';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.decimal('unit_price', 14, 4).notNullable();
      table.decimal('quadrille', 10, 4).notNullable();
      table.decimal('factor', 10, 4).notNullable();
      table.decimal('quantitymt', 10, 4).notNullable();
      table.decimal('unit_price_factored', 14, 4).notNullable();
      table
        .integer('project_apu_id')
        .unsigned()
        .references('id')
        .inTable('project_apus');

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
