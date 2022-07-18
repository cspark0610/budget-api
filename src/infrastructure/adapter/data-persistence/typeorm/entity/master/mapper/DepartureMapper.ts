import { Departure } from '@infrastructure/adapter/data-persistence/typeorm/entity/master/DepartureMaster.entity';

import { DepartureDto } from '@core/domain/master/dto/Departure.dto';

export class DepartureMapper {
  public static toOrmDomainDto(ormDeparture: Departure): DepartureDto {
    const departureDto: DepartureDto = new DepartureDto();
    if (ormDeparture) {
      departureDto.id = ormDeparture.id;
      departureDto.name = ormDeparture.name;
      departureDto.description = ormDeparture.description;
      departureDto.code = ormDeparture.code;
      departureDto.unit = ormDeparture.unit;
    }

    return departureDto;
  }

  public static toOrmDomainDtos(ormDepartures: Departure[]): DepartureDto[] {
    return ormDepartures.map((ormDeparture) =>
      this.toOrmDomainDto(ormDeparture),
    );
  }
}
