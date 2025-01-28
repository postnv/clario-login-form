"use client";

import { useForm } from "@tanstack/react-form";

import {
  AuthValidationSchemaType,
  emailSchema,
  passwordSchema,
} from "~/src/features/auth/model";
import {
  Input,
  Password,
  Button,
  FieldError,
  FieldRules,
} from "~/src/shared/ui";
import { passwordDisplayRules } from "~/src/features/auth/lib";
import { errorsToArr } from "~/src/shared/lib";

export const AuthForm = () => {
  const form = useForm<AuthValidationSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => console.log(value),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    void form.handleSubmit();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <form.Field name="email" validators={{ onBlur: emailSchema }}>
          {(field) => (
            <div>
              <Input
                type="email"
                placeholder="Email"
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
              />
              <FieldError errors={errorsToArr(field.state.meta.errors)} />
            </div>
          )}
        </form.Field>
        <form.Field name="password" validators={{ onSubmit: passwordSchema }}>
          {(field) => (
            <div>
              <Password
                placeholder="Password"
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldRules
                value={field.state.value}
                errors={errorsToArr(field.state.meta.errors)}
                rules={passwordDisplayRules}
              />
            </div>
          )}
        </form.Field>
        <Button type="submit" disabled={!form.state.canSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
