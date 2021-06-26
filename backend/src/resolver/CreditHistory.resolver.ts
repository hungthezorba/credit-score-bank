import { Resolver } from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CreditHistoryRepository } from "../repository/CreditHistory.repository";
import { TemplateResolver } from "./Template.resolver";

const CreditHistoryTemplateResolver = TemplateResolver("CreditHistory");

@Resolver()
export default class CreditHistoryResolver extends CreditHistoryTemplateResolver {
  @InjectRepository()
  private creditHistoryResolver: CreditHistoryRepository;
}
