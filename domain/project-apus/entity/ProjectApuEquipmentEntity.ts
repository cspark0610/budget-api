import { DateTime } from 'luxon';
import { column } from '@ioc:Adonis/Lucid/Orm';

export default class ProjectApuEquipment {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public unit_price: number;

  @column()
  public quadrille: number;

  @column()
  public factor: number;

  @column()
  public quantitymt: number;

  @column()
  public unit_price_factored: number;

  @column()
  public project_apu_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
