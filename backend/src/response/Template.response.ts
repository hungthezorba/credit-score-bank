import { Field, ObjectType } from "type-graphql";

@ObjectType({ isAbstract: true })
export abstract class TemplateResponse {
  @Field(() => Number, { nullable: true })
  timestamp?: number;
}

// Decorator to auto add timestamp for each response
export function ResponseTimestamp(): MethodDecorator {
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);
      return {
        ...result,
        timestamp: Date.now(),
      };
    };
  };
}
