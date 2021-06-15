import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";

export function TemplateResolver(suffix: string) {
  @Service()
  @Resolver({ isAbstract: true })
  abstract class TemplateResolverClass {
    @Query(() => String, { name: `healthCheck${suffix}` })
    async healthCheck(): Promise<string> {
      return `Health check successfully for resolver ${suffix}`;
    }
  }
  return TemplateResolverClass;
}
