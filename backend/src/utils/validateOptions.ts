import { ValidationOptions } from "joi";

// Define Joi validate option
export const validateOptions: ValidationOptions = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
  noDefaults: true,
};
