import { z } from "zod";

import { validationMessage } from "~/src/features/auth/model";

export const passwordDisplayRules = [
  {
    schema: z.string().min(8, validationMessage.min(8)),
    message: validationMessage.min(8),
  },
  {
    schema: z.string().regex(/[A-Z]/, validationMessage.upperCase),
    message: validationMessage.upperCase,
  },
  {
    schema: z.string().regex(/\d/, validationMessage.digit),
    message: validationMessage.digit,
  },
];
