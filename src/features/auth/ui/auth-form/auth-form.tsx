"use client";

import { useForm } from "@tanstack/react-form";

import css from "./styles.module.css";

import {
  authValidationSchema,
  AuthValidationSchemaType,
} from "~/src/features/auth/model";
import {
  Input,
  Password,
  FieldError,
  FieldRules,
  ProjectButton,
} from "~/src/shared/ui";
import { passwordDisplayRules } from "~/src/features/auth/lib";
import { errorsToArr } from "~/src/shared/lib";

export const AuthForm = () => {
  const form = useForm<AuthValidationSchemaType>({
    defaultValues: { email: "", password: "" },
    validators: { onSubmit: authValidationSchema },
    onSubmit: ({ value }) => console.log(value),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    void form.handleSubmit();
  };

  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Sign Up</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <form.Field name="email">
          {(field) => (
            <div className={css.field}>
              <Input
                type="email"
                placeholder="Email"
                name={field.name}
                value={field.state.value}
                error={!!field.state.meta.errors.length}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
              />
              <FieldError errors={errorsToArr(field.state.meta.errors)} />
            </div>
          )}
        </form.Field>
        <form.Field name="password">
          {(field) => (
            <div className={css.field}>
              <Password
                placeholder="Password"
                name={field.name}
                value={field.state.value}
                error={!!field.state.meta.errors.length}
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
        <ProjectButton className={css.button} type="submit">
          Sign Up
        </ProjectButton>
      </form>
    </div>
  );
};
