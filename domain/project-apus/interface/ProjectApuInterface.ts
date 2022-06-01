import ProjectApu from '../entity/ProjectApuEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectApuRepository {
  /*findUser(
    by: { id?: string; email?: string },
    options?: RepositoryFindOptions
  ): Promise<Optional<User>>;  */
  create(apu: any): Promise<ProjectApu>;

  updateUser(apu: ProjectApu): Promise<ProjectApu>;
}
