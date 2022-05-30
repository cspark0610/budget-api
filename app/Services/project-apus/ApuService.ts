import ApuRepositoryInterface from '../../../domain/project-apus/interface/ApuInterface';
import { inject } from '@adonisjs/fold';

@inject()
export default class ApuService {
  constructor(private readonly apuRepository: ApuRepositoryInterface) {}

  public async create(apu: any) {
    //const input = request.only(['title', 'textBody', 'published']);
    const post = await this.apuRepository.create(apu);
    return post;
  }
}
