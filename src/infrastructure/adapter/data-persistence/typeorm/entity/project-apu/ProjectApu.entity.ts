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

import {
  ProjectApuEquipment,
  ProjectApuMaterial,
  ProjectApuSubcontract,
  ProjectApuWorkforce,
} from './index';

import { Budget } from '../budget/ProjectBudget.entity';
import { Departure } from '../master/DepartureMaster.entity';
import { ProjectArea } from '../project-area/ProjectArea.entity';
import { ProjectDiscipline } from '../project-discipline/ProjectDiscipline.entity';

@Entity('project_apus')
export class ProjectApu {
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
    name: 'partial_hh',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: false,
  })
  partialHH: number;

  @Column({
    name: 'efficiency_MO',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  efficiency_MO: number;

  @Column({
    name: 'efficiency_EQ',
    type: 'numeric',
    precision: 9,
    scale: 2,
    nullable: true,
  })
  efficiency_EQ: number;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
    default: 'Pendiente',
  })
  status: string;

  @Column({
    name: 'id_apu_profile',
    type: 'int',
    nullable: true,
  })
  idApuProfile: number;

  @Column({ type: 'numeric', precision: 9, scale: 2, nullable: false })
  measured: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  /* ======= RELATIONS ======= */

  @ManyToOne(() => Budget, (i: { projectApu: any }) => i.projectApu)
  @JoinColumn({ name: 'budget_id' })
  budget: Budget;

  @OneToMany(
    () => ProjectApuEquipment,
    (i: { projectApu: any }) => i.projectApu,
    {
      cascade: true,
    },
  )
  projectApuEquipment: Array<ProjectApuEquipment>;

  @OneToMany(
    () => ProjectApuMaterial,
    (i: { projectApu: any }) => i.projectApu,
    {
      cascade: true,
    },
  )
  projectApuMaterial: Array<ProjectApuMaterial>;

  @OneToMany(
    () => ProjectApuSubcontract,
    (i: { projectApu: any }) => i.projectApu,
    {
      cascade: true,
    },
  )
  projectApuSubcontract: Array<ProjectApuSubcontract>;

  @OneToMany(
    () => ProjectApuWorkforce,
    (i: { projectApu: any }) => i.projectApu,
    {
      cascade: true,
    },
  )
  projectApuWorkforce: Array<ProjectApuWorkforce>;

  @ManyToOne(() => Departure, (departure: { apus: any }) => departure.apus)
  @JoinColumn({ name: 'departure_id', referencedColumnName: 'id' })
  departure: Departure;

  @ManyToOne(() => ProjectArea, (area: { apus: any }) => area.apus)
  @JoinColumn({ name: 'area_id', referencedColumnName: 'id' })
  area: ProjectArea;

  @ManyToOne(
    () => ProjectDiscipline,
    (discipline: { apus: any }) => discipline.apus,
  )
  @JoinColumn({ name: 'discipline_id', referencedColumnName: 'id' })
  discipline: ProjectDiscipline;
}
