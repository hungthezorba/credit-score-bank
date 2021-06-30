import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { CreditHistory } from "../entity/CreditHistory.entity";

@Service()
@EntityRepository(CreditHistory)
export class CreditHistoryRepository extends Repository<CreditHistory> {}
