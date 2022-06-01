import ProjectApuEntity from '../../../domain/project-apus/entity/ProjectApuEntity';
import IProjectApuRepository from '../../../domain/project-apus/interface/ProjectApuInterface';
//import { ApuRepositoryInterface } from '@ioc:MyBudget/ApuRepositoryAdapter';
import ProjectApu from '../../database/models/project-apus/ProjectApuModel';

export default class ProjectApuRepository implements IProjectApuRepository {
  public updateUser(apu: any): Promise<ProjectApuEntity> {
    throw new Error('Method not implemented.' + { apu });
  }
  public async create(apu: any) {
    const post = await ProjectApu.create(apu);

    return post;
  }
}
