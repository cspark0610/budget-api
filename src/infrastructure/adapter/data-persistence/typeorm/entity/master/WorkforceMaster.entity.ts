import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProjectApuWorkforce } from '../project-apu/ProjectApuWorkforce.entity';

@Entity('master_workforces')
export class WorkForce {
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
  /* @OneToMany(() => ApuWorkforce, (i) => i.workforce)
    apus: Array<ApuWorkforce>; */

  @OneToMany(() => ProjectApuWorkforce, (i: { workforce: any }) => i.workforce)
  projectApuWorkforce: Array<ProjectApuWorkforce>;
}
