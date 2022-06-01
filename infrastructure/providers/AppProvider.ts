import { ApplicationContract } from '@ioc:Adonis/Core/Application';
import { IocContract } from '@adonisjs/fold';
//import ApuService from '../../app/Services/project-apus/ApuService';
// import ApuRepositoryAdapter from '../repository/project-apus/ApuRepositoryAdapter';

export default class AppProvider {
  constructor(
    protected app: ApplicationContract,
    protected $container: IocContract
  ) {}

  public register() {
    // Register your own bindings
    //this.$container.singleton('MyBudget/ApuService', () => new ApuService());
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
