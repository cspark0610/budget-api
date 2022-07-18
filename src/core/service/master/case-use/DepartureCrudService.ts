import { DepartureDITokens } from '@core/domain/master/di/DepartureDITokens';
import DepartureInterface from '@core/domain/master/interface/DepartureCrudInterface';
import { Inject } from '@nestjs/common';

import { CreateDepartureDto } from '@core/domain/master/dto/CreateDeparture.dto';
import { DepartureDto } from '@core/domain/master/dto/Departure.dto';

export default class DepartureCrudService {
  constructor(
    @Inject(DepartureDITokens.DepartureCrudRepository)
    private readonly departureInterface: DepartureInterface,
  ) {}

  public async create(dto: CreateDepartureDto): Promise<DepartureDto> {
    const departure = await this.departureInterface.create(dto);

    return departure;
  }

  public async findAll(): Promise<DepartureDto[]> {
    const departures = await this.departureInterface.findAll();

    return departures;
  }

  public async findById(id: number): Promise<DepartureDto> {
    const departure = await this.departureInterface.findById(id);

    return departure;
  }

  public async findByName(name: string): Promise<DepartureDto> {
    const departure = await this.departureInterface.findOneByName(name);

    return departure;
  }
}
