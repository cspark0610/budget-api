import { Budget } from '@infrastructure/adapter/data-persistence/typeorm/entity/budget/Budget.entity';

import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';

export class BudgetMapper {
  public static toEntityDomain(ormBudget: Budget): CreateBudgetDto {
    const budgetDto: CreateBudgetDto = new CreateBudgetDto();
    budgetDto.name = ormBudget.name;
    budgetDto.description = ormBudget.description;
    budgetDto.code = ormBudget.code;
    budgetDto.site = ormBudget.site;
    budgetDto.costWorkforce = ormBudget.costWorkforce;
    budgetDto.costMaterial = ormBudget.costMaterial;
    budgetDto.costEquipment = ormBudget.costEquipment;
    budgetDto.costSubcontract = ormBudget.costSubcontract;

    return budgetDto;
  }

  public static toEntitiesDomain(ormBudgets: Budget[]): CreateBudgetDto[] {
    return ormBudgets.map((ormBudget) => this.toEntityDomain(ormBudget));
  }
}
