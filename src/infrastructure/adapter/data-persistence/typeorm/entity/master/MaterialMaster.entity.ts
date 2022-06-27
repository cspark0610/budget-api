import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
    
  import { ProjectApuMaterial } from '../project-apu/ProjectApuMaterial.entity';
  
  @Entity('master_materials')
  export class Material {
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
    /*@OneToMany(() => ApuMaterial, (i) => i.material)
    apus: Array<ApuMaterial>;*/
  
    @OneToMany(() => ProjectApuMaterial, (i: { material: any; }) => i.material)
    projectApuMaterial: Array<ProjectApuMaterial>;
  }
  