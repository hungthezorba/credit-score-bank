import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { CreditHistory } from "../entity/CreditHistory.entity";

@Service()
@EntityRepository(CreditHistory)
export class CreditHistoryRepository extends Repository<CreditHistory> {
  // public async findAllCreditHistoryByCustomer(customer: Customer) {
  //   const connection = getConnection();
  //   const creditHistoryList = await connection
  //         .createQueryBuilder()
  //         .select("credit_history")
  //         .from(CreditHistory, "credit_history")
  //         .where("credit_history.user_id = :id", {id: })
  // }
}
