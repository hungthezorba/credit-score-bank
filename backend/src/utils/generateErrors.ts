export type ValidationErrorSchema = {
  message: string;
  path: string[];
  type?: string;
};

export function throwValidationError() {}
