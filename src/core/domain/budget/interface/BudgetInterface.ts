import { BudgetDto } from '../dto/Budget.dto';
import { CreateBudgetDto } from '../dto/CreateBudget.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IBudgetRepository {
  create(dto: CreateBudgetDto): Promise<CreateBudgetDto>;
  findAll(): Promise<CreateBudgetDto[]>;
  findById(id: number): Promise<BudgetDto>;
}
