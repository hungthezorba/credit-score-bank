// import DataLoader from "dataloader";
// import { getRepository } from "typeorm";
// import { CreditHistory } from "../entity/CreditHistory.entity";
// import { Customer } from "../entity/Customer.entity";

export const createCreditHistoryLoader = () => {
  // return new DataLoader<number, CreditHistory | undefined>(
  //   async (customerIds) => {
  //     const customerRepository = getRepository(Customer);
  //     const customers = customerRepository.find({
  //       relations: ["creditHistoryList"],
  //       where: { id: In(customerIds as number[]) },
  //     });
  //     return;
  //   }
  // );
};
