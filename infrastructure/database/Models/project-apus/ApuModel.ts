import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import ProjectApuEquipment from './ApuEquipmentModel';

export default class ProjectApu extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public code: string;

  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public unit: string;

  @column()
  public unit_price: number;

  @column()
  public partial_hh: number;

  @column()
  public efficiency_mo: number;

  @column()
  public efficiency_eq: number;

  @column()
  public status: string;

  @column()
  public id_apu_profile: number;

  @column()
  public measured: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  /* ======= RELATIONS ======= */

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @hasMany(() => ProjectApuEquipment)
  project_apus_equipments: HasMany<typeof ProjectApuEquipment>;
}
