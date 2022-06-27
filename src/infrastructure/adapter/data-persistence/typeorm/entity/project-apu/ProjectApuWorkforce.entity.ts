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

import { WorkForce } from '../master/WorkforceMaster.entity';
import { ProjectApu } from './ProjectApu.entity';

@Entity('project_apus_workforces')
export class ProjectApuWorkforce {
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
    (i: { projectApuWorkforce: any }) => i.projectApuWorkforce,
    {
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'project_apu_id' })
  projectApu: ProjectApu;

  @ManyToOne(
    () => WorkForce,
    (i: { projectApuWorkforce: any }) => i.projectApuWorkforce,
  )
  @JoinColumn({ name: 'workforce_id' })
  workforce: WorkForce;
}
