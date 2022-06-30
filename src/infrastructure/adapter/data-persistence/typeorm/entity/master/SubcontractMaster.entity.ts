/* eslint-disable import/no-cycle */
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProjectApuSubcontract } from '../project-apu/ProjectApuSubcontract.entity';

@Entity('master_subcontracts')
export class Subcontract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  unit: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  /* ======= RELATIONS ======= */
  /* @OneToMany(() => ApuSubcontract, (i) => i.subcontract)
    apus: Array<ApuSubcontract>; */

  @OneToMany(
    () => ProjectApuSubcontract,
    (i: { subcontract: any }) => i.subcontract,
  )
  projectApuSubcontract: Array<ProjectApuSubcontract>;
}
