/* eslint-disable import/no-cycle */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Budget } from '../budget/Budget.entity';
import { ProjectApu } from '../project-apu/ProjectApu.entity';

@Entity('project_areas')
export class ProjectArea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => ProjectApu, (apu: { area: any }) => apu.area)
  apus: ProjectApu[];

  @ManyToOne(() => Budget, (i: { areas: any }) => i.areas)
  @JoinColumn({ name: 'budget_id' })
  budget: Budget;
}
