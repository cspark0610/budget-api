import { Budget } from '@infrastructure/adapter/data-persistence/typeorm/entity/budget/Budget.entity';

import { BudgetDto } from '@core/domain/budget/dto/Budget.dto';

export class BudgetMapper {
  public static toOrmDomainDto(ormBudget: Budget): BudgetDto {
    const budgetDto: BudgetDto = new BudgetDto();
    if (ormBudget) {
      budgetDto.id = ormBudget.id;
      budgetDto.name = ormBudget.name;
      budgetDto.description = ormBudget.description;
      budgetDto.code = ormBudget.code;
      budgetDto.site = ormBudget.site;
      budgetDto.costWorkforce = ormBudget.costWorkforce;
      budgetDto.costMaterial = ormBudget.costMaterial;
      budgetDto.costEquipment = ormBudget.costEquipment;
      budgetDto.costSubcontract = ormBudget.costSubcontract;
    }

    return budgetDto;
  }

  public static toOrmDomainDtos(ormBudgets: Budget[]): BudgetDto[] {
    return ormBudgets.map((ormBudget) => this.toOrmDomainDto(ormBudget));
  }
}
