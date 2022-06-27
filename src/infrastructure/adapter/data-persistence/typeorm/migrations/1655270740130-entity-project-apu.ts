import { MigrationInterface, QueryRunner } from 'typeorm';

export class entityProjectApu1655270740130 implements MigrationInterface {
  name = 'entityProjectApu1655270740130';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "project_areas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "budget_id" integer, CONSTRAINT "PK_5f8b366676e0ff4311e0c0f0aba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_disciplines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "budget_id" integer, CONSTRAINT "PK_8f4b4913147fd57e31f951f62f4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "budgets" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(255), "site" character varying(255), "cost_workforce" numeric(9,2), "cost_material" numeric(9,2), "cost_equipment" numeric(9,2), "cost_subcontract" numeric(9,2), "cost_procura" numeric(9,2), "hours_man" numeric(9,2), "company_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c8a51748f82387644b773da482" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "master_equipments" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "description" character varying(255) NOT NULL, "unit" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0ed3ded41e2f46601e97c0cd579" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_apus_equipments" ("id" SERIAL NOT NULL, "unit_price" numeric(9,2) NOT NULL, "unit_price_factored" numeric(13,2), "quadrille" numeric(9,2) NOT NULL, "quantitymt" numeric(9,2), "factor" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "project_apu_id" integer, "equipment_id" integer, CONSTRAINT "PK_0e4cf5532a10d2449815b9853e0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "master_materials" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "description" character varying(255) NOT NULL, "unit" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2993781468bd98fbb7fc8991344" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_apus_materials" ("id" SERIAL NOT NULL, "unit_price" numeric(9,2) NOT NULL, "unit_price_factored" numeric(13,2), "quantity" numeric(9,2) NOT NULL, "quantitymt" numeric(9,2), "factor" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "project_apu_id" integer, "material_id" integer, CONSTRAINT "PK_df9952d8f5a3126018143e02d45" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "master_subcontracts" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "description" character varying(255) NOT NULL, "unit" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_70db81d54bf1f2841a8092a81a3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_apus_subcontracts" ("id" SERIAL NOT NULL, "unit_price" numeric(9,2) NOT NULL, "unit_price_factored" numeric(13,2), "quantity" numeric(9,2) NOT NULL, "quantitymt" numeric(9,2), "factor" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "project_apu_id" integer, "subcontract_id" integer, CONSTRAINT "PK_f256fb62a150e05482dc7bc06d3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "master_workforces" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "description" character varying(255) NOT NULL, "unit" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8807d58d77c5fef83d8d0574254" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_apus_workforces" ("id" SERIAL NOT NULL, "unit_price" numeric(9,2) NOT NULL, "unit_price_factored" numeric(13,2), "quadrille" numeric(9,2) NOT NULL, "quantitymt" numeric(9,2), "factor" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "project_apu_id" integer, "workforce_id" integer, CONSTRAINT "PK_4519c20c8cc085f0ae1af918b3e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_apus" ("id" SERIAL NOT NULL, "unit_price" numeric(9,2) NOT NULL, "partial_hh" numeric(9,2) NOT NULL, "efficiency_MO" numeric(9,2), "efficiency_EQ" numeric(9,2), "status" character varying(128) NOT NULL DEFAULT 'Pendiente', "id_apu_profile" integer, "measured" numeric(9,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "budget_id" integer, "departure_id" integer, "area_id" integer, "discipline_id" integer, CONSTRAINT "PK_00c395ab58a4ea62709be59d9a7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "master_departures" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, "description" character varying(255) NOT NULL, "unit" character varying(45) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0b994e433e1459b2fcba55d0941" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "b_project_disciplines_areas" ("discipline_id" integer NOT NULL, "area_id" integer NOT NULL, CONSTRAINT "PK_64eb080145255fd604a3eca6fbd" PRIMARY KEY ("discipline_id", "area_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5027cbae3dad0706f96329a21e" ON "b_project_disciplines_areas" ("discipline_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a6b45b0b6a6a6506cec57f2318" ON "b_project_disciplines_areas" ("area_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "project_areas" ADD CONSTRAINT "FK_468bb75f062fb3dc1037e639e26" FOREIGN KEY ("budget_id") REFERENCES "budgets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_disciplines" ADD CONSTRAINT "FK_32ea765fd458debc873f31188c5" FOREIGN KEY ("budget_id") REFERENCES "budgets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_equipments" ADD CONSTRAINT "FK_b993533dff142e4bfa767a31ec6" FOREIGN KEY ("project_apu_id") REFERENCES "project_apus"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_equipments" ADD CONSTRAINT "FK_21dd28b5019969c299adce16eda" FOREIGN KEY ("equipment_id") REFERENCES "master_equipments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_materials" ADD CONSTRAINT "FK_4786af870d38bf25c514fd9042a" FOREIGN KEY ("project_apu_id") REFERENCES "project_apus"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_materials" ADD CONSTRAINT "FK_43466a68ccb4c0bd7aead706b77" FOREIGN KEY ("material_id") REFERENCES "master_materials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_subcontracts" ADD CONSTRAINT "FK_c869ca14986869561b493a72ae8" FOREIGN KEY ("project_apu_id") REFERENCES "project_apus"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_subcontracts" ADD CONSTRAINT "FK_6f20b0ec29e5cfec2793c89269a" FOREIGN KEY ("subcontract_id") REFERENCES "master_subcontracts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_workforces" ADD CONSTRAINT "FK_a5b7afd87baeeede79449ac158f" FOREIGN KEY ("project_apu_id") REFERENCES "project_apus"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_workforces" ADD CONSTRAINT "FK_5baeee01a1ca23ed9a282d6e037" FOREIGN KEY ("workforce_id") REFERENCES "master_workforces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" ADD CONSTRAINT "FK_678a982bfb97b2847ffb40e3670" FOREIGN KEY ("budget_id") REFERENCES "budgets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" ADD CONSTRAINT "FK_e875f3650a4af2ebc9debd24a62" FOREIGN KEY ("departure_id") REFERENCES "master_departures"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" ADD CONSTRAINT "FK_46423feece6852933007ef5fb02" FOREIGN KEY ("area_id") REFERENCES "project_areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" ADD CONSTRAINT "FK_4156f1c880a54f0cc1bace5fdff" FOREIGN KEY ("discipline_id") REFERENCES "project_disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "b_project_disciplines_areas" ADD CONSTRAINT "FK_5027cbae3dad0706f96329a21e5" FOREIGN KEY ("discipline_id") REFERENCES "project_disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "b_project_disciplines_areas" ADD CONSTRAINT "FK_a6b45b0b6a6a6506cec57f2318c" FOREIGN KEY ("area_id") REFERENCES "project_areas"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "b_project_disciplines_areas" DROP CONSTRAINT "FK_a6b45b0b6a6a6506cec57f2318c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "b_project_disciplines_areas" DROP CONSTRAINT "FK_5027cbae3dad0706f96329a21e5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" DROP CONSTRAINT "FK_4156f1c880a54f0cc1bace5fdff"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" DROP CONSTRAINT "FK_46423feece6852933007ef5fb02"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" DROP CONSTRAINT "FK_e875f3650a4af2ebc9debd24a62"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus" DROP CONSTRAINT "FK_678a982bfb97b2847ffb40e3670"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_workforces" DROP CONSTRAINT "FK_5baeee01a1ca23ed9a282d6e037"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_workforces" DROP CONSTRAINT "FK_a5b7afd87baeeede79449ac158f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_subcontracts" DROP CONSTRAINT "FK_6f20b0ec29e5cfec2793c89269a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_subcontracts" DROP CONSTRAINT "FK_c869ca14986869561b493a72ae8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_materials" DROP CONSTRAINT "FK_43466a68ccb4c0bd7aead706b77"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_materials" DROP CONSTRAINT "FK_4786af870d38bf25c514fd9042a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_equipments" DROP CONSTRAINT "FK_21dd28b5019969c299adce16eda"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_apus_equipments" DROP CONSTRAINT "FK_b993533dff142e4bfa767a31ec6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_disciplines" DROP CONSTRAINT "FK_32ea765fd458debc873f31188c5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_areas" DROP CONSTRAINT "FK_468bb75f062fb3dc1037e639e26"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a6b45b0b6a6a6506cec57f2318"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5027cbae3dad0706f96329a21e"`,
    );
    await queryRunner.query(`DROP TABLE "b_project_disciplines_areas"`);
    await queryRunner.query(`DROP TABLE "master_departures"`);
    await queryRunner.query(`DROP TABLE "project_apus"`);
    await queryRunner.query(`DROP TABLE "project_apus_workforces"`);
    await queryRunner.query(`DROP TABLE "master_workforces"`);
    await queryRunner.query(`DROP TABLE "project_apus_subcontracts"`);
    await queryRunner.query(`DROP TABLE "master_subcontracts"`);
    await queryRunner.query(`DROP TABLE "project_apus_materials"`);
    await queryRunner.query(`DROP TABLE "master_materials"`);
    await queryRunner.query(`DROP TABLE "project_apus_equipments"`);
    await queryRunner.query(`DROP TABLE "master_equipments"`);
    await queryRunner.query(`DROP TABLE "budgets"`);
    await queryRunner.query(`DROP TABLE "project_disciplines"`);
    await queryRunner.query(`DROP TABLE "project_areas"`);
  }
}
