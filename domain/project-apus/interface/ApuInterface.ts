import ProjectApu from '../entity/ApuEntity';

export default interface ApuRepositoryInterface {
  /*findUser(
    by: { id?: string; email?: string },
    options?: RepositoryFindOptions
  ): Promise<Optional<User>>;  */

  create(apu: any): Promise<ProjectApu>;

  updateUser(apu: ProjectApu): Promise<ProjectApu>;
}
