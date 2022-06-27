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

import { Subcontract } from '../master/SubcontractMaster.entity';
import { ProjectApu } from './ProjectApu.entity';

@Entity('project_apus_subcontracts')
export class ProjectApuSubcontract {
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
  quantity: number;

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
    (i: { projectApuSubcontract: any }) => i.projectApuSubcontract,
    {
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'project_apu_id' })
  projectApu: ProjectApu;

  @ManyToOne(
    () => Subcontract,
    (i: { projectApuSubcontract: any }) => i.projectApuSubcontract,
  )
  @JoinColumn({ name: 'subcontract_id' })
  subcontract: Subcontract;
}
