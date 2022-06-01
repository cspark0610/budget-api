import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ApuService from '../../../Services/project-apus/ApuService';
//import ApuService from '@ioc:MyBudget/ApuService';

export default class ApuController {
  public apuService: ApuService;
  constructor() {
    this.apuService = new ApuService();
  }

  public async create({ request, response }: HttpContextContract) {
    const input = request.only([
      'code',
      'name',
      'description',
      'unit',
      'unit_price',
      'partial_hh',
      'efficiency_mo',
      'efficiency_eq',
      'status',
      'id_apu_profile',
      'measured',
    ]);
    const post = await this.apuService.create(input);
    return response.status(200).created(post);
  }
}
