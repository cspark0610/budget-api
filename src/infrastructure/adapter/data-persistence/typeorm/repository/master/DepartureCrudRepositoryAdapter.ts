/* eslint-disable import/order */
import IDepartureCrudRepository from '@core/domain/master/interface/DepartureCrudInterface';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';

import { DepartureMapper } from '../../entity/master/mapper/DepartureMapper';

import { Departure } from '../../entity/master/DepartureMaster.entity';

import { CreateDepartureDto } from '@core/domain/master/dto/CreateDeparture.dto';
import { DepartureDto } from '@core/domain/master/dto/Departure.dto';
import { UpdateDepartureDto } from '@core/domain/master/dto/UpdateDeparture.dto';

@Injectable()
export default class DepartureCrudRepositoryAdapter
  implements IDepartureCrudRepository
{
  constructor(
    @InjectRepository(Departure)
    private readonly departureRepository: Repository<Departure>,
  ) {}

  public async update(
    id: number,
    dto: UpdateDepartureDto,
  ): Promise<DepartureDto> {
    const departure = await this.departureRepository.findOne({
      where: { id },
    });
    if (!departure) throw new BadRequestException('Departure not found');

    const editdDeparture = Object.assign(departure, dto);
    const payload = await this.departureRepository.save(editdDeparture);
    const departureDto = DepartureMapper.toOrmDomainDto(payload);

    return departureDto;
  }

  public async findOneByName(n: string): Promise<DepartureDto> {
    const departure = await this.departureRepository.findOneBy({
      name: Raw((alias) => `unaccent(lower(${alias})) = unaccent(lower(:n))`, {
        n,
      }),
    });
    const departureDto = DepartureMapper.toOrmDomainDto(departure);

    return departureDto;
  }

  public async findAll(): Promise<DepartureDto[]> {
    const departure = await this.departureRepository.find();
    const departureDto = DepartureMapper.toOrmDomainDtos(departure);

    return departureDto;
  }

  public async findById(id: number): Promise<DepartureDto> {
    const departure = await this.departureRepository.findOne({
      where: { id },
    });
    const departureDto = DepartureMapper.toOrmDomainDto(departure);

    return departureDto;
  }

  public async create(dto: CreateDepartureDto): Promise<DepartureDto> {
    const newDeparture = this.departureRepository.create(dto);
    const payload = await this.departureRepository.save(newDeparture);
    const departureDto = DepartureMapper.toOrmDomainDto(payload);

    return departureDto;
  }
}
