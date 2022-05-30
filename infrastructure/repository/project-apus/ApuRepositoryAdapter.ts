import ProjectApuEntity from '../../../domain/project-apus/entity/ApuEntity';
import ApuRepositoryInterface from '../../../domain/project-apus/interface/ApuInterface';
import ProjectApu from '../../database/models/project-apus/ApuModel';

export default class ApuRepositoryAdapter implements ApuRepositoryInterface {
  public updateUser(apu: any): Promise<ProjectApuEntity> {
    throw new Error('Method not implemented.' + { apu });
  }
  public async create(apu: any) {
    const post = await ProjectApu.create(apu);

    return post;
  }
  /* updateUser(apu: ApuEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }*/
}
