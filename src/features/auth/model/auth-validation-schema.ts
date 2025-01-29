import { z } from "zod";

export const validationMessage = {
  email: "Invalid email address",
  upperCase: "Uppercase and lowercase letters",
  digit: "1 digit minimum",
  spaces: "Password must not contain spaces",
  min: (min: number) => `Has at least ${min} characters (no spaces)`,
  max: (max: number) => `Password must not exceed ${max} characters`,
};

export const authValidationSchema = z.object({
  email: z.string().email(validationMessage.email),
  password: z
    .string()
    .min(8, validationMessage.min(8))
    .max(64, validationMessage.max(64))
    .regex(/[A-Z]/, validationMessage.upperCase)
    .regex(/\d/, validationMessage.digit)
    .regex(/^\S*$/, validationMessage.spaces),
});

export type AuthValidationSchemaType = z.infer<typeof authValidationSchema>;
