import { ValidationError } from "@tanstack/react-form";

const SEPARATOR = ",";

export const errorsToArr = (errors: ValidationError[]) =>
  errors.join(SEPARATOR).split(SEPARATOR).filter(Boolean);
