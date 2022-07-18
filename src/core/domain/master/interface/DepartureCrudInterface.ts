// import { DepartureEntity } from '../entity/DepartureEntity';

import { CreateDepartureDto } from '../dto/CreateDeparture.dto';
import { DepartureDto } from '../dto/Departure.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IDepartureCrudRepository {
  create(dto: CreateDepartureDto): Promise<DepartureDto>;
  findAll(): Promise<DepartureDto[]>;
  findById(id: number): Promise<DepartureDto>;
  update(id: number, dto: CreateDepartureDto): Promise<DepartureDto>;
  // remove(id: number): Promise<DepartureEntity>;
  findOneByName(name: string): Promise<DepartureDto>;
}
