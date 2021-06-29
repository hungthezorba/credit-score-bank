import { ApolloError } from "apollo-server-errors";
import { ValidationError } from "joi";

export class DuplicatedError extends ApolloError {
  constructor(message: string, extensions: Record<string, any> | undefined) {
    super(message, "DUPLICATED_ERROR", extensions);
  }
}

export class CustomValidationError extends ValidationError {
  constructor(message: string, details: any, original: any) {
    super(message, details, original);
  }
}
