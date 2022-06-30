/* eslint-disable import/no-cycle */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Budget } from '../budget/Budget.entity';
import { ProjectApu } from '../project-apu/ProjectApu.entity';
import { ProjectArea } from '../project-area/ProjectArea.entity';

@Entity('project_disciplines')
export class ProjectDiscipline {
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

  @OneToMany(() => ProjectApu, (apu: { discipline: any }) => apu.discipline)
  apus: ProjectApu[];

  @ManyToMany(() => ProjectArea)
  @JoinTable({
    name: 'project_disciplines_areas',
    joinColumn: { name: 'discipline_id', referencedColumnName: 'id' },
    inverseJoinColumn: {
      name: 'area_id',
      referencedColumnName: 'id',
    },
  })
  areas: ProjectArea[];

  @ManyToOne(() => Budget, (i: { disciplines: any }) => i.disciplines)
  @JoinColumn({ name: 'budget_id' })
  budget: Budget;
}
