import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProjectApu } from '../project-apu/ProjectApu.entity';
import { ProjectArea } from '../project-area/ProjectArea.entity';
import { ProjectDiscipline } from '../project-discipline/ProjectDiscipline.entity';

@Entity('budgets')
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  site: string;

  @Column({
    name: 'cost_workforce',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  costWorkforce: number;

  @Column({
    name: 'cost_material',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  costMaterial: number;

  @Column({
    name: 'cost_equipment',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  costEquipment: number;

  @Column({
    name: 'cost_subcontract',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  costSubcontract: number;

  @Column({
    name: 'cost_procura',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  costProcura: number;

  @Column({
    name: 'hours_man',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  hoursMan: number;

  @Column({
    name: 'company_id',
    type: 'int',
    nullable: false,
  })
  companyId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  /* ======= RELATIONS ======= */
  @OneToMany(() => ProjectApu, (i: { budget: any }) => i.budget)
  projectApu: Array<ProjectApu>;

  @OneToMany(() => ProjectArea, (i: { budget: any }) => i.budget)
  areas: Array<ProjectArea>;

  @OneToMany(() => ProjectDiscipline, (i: { budget: any }) => i.budget)
  disciplines: Array<ProjectDiscipline>;
}
