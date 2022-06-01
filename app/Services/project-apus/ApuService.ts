import IProjectApuRepository from '../../../domain/project-apus/interface/ProjectApuInterface';
import ApuRepositoryAdapter from '../../../infrastructure/repository/project-apus/ProjectApuRepository';
//import ApuRepositoryAdapter from '@ioc:MyBudget/ApuRepositoryAdapter';

export default class ApuService {
  public projectApuRepository: IProjectApuRepository =
    new ApuRepositoryAdapter();

  public async create(apu: any) {
    //const input = request.only(['title', 'textBody', 'published']);
    const post = await this.projectApuRepository.create(apu);

    return post;
  }
}
