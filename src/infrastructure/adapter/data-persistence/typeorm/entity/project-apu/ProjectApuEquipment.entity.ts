/* eslint-disable import/no-cycle */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Equipment } from '../master/EquipmentMaster.entity';
import { ProjectApu } from './ProjectApu.entity';

@Entity('project_apus_equipments')
export class ProjectApuEquipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'unit_price',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: false,
  })
  unitPrice: number;

  @Column({
    name: 'unit_price_factored',
    type: 'numeric',
    precision: 13,
    scale: 2,
    nullable: true,
  })
  unitPriceFactored: number;

  @Column({ type: 'numeric', precision: 9, scale: 2, nullable: false })
  quadrille: number;

  @Column({ type: 'numeric', precision: 9, scale: 2, nullable: true })
  quantitymt: number;

  @Column({ type: 'int', nullable: true })
  factor: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  /* ======= RELATIONS ======= */
  @ManyToOne(
    () => ProjectApu,
    (i: { projectApuEquipment: any }) => i.projectApuEquipment,
    {
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'project_apu_id' })
  projectApu: ProjectApu;

  @ManyToOne(
    () => Equipment,
    (i: { projectApuEquipment: any }) => i.projectApuEquipment,
  )
  @JoinColumn({ name: 'equipment_id' })
  equipment: Equipment;
}
