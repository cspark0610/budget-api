/* eslint-disable import/no-cycle */
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProjectApuEquipment } from '../project-apu/ProjectApuEquipment.entity';

@Entity('master_equipments')
export class Equipment {
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
  /* @OneToMany(() => ApuEquipment, (i) => i.equipment)
    apus: Array<ApuEquipment>; */

  @OneToMany(() => ProjectApuEquipment, (i: { equipment: any }) => i.equipment)
  projectApuEquipment: Array<ProjectApuEquipment>;
}
