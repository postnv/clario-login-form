import { ZodSchema } from "zod";
import { InputHTMLAttributes } from "react";
import { ValidationError } from "@tanstack/react-form";
import classNames from "classnames";

import css from "./styles.module.css";

interface PropsType {
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  errors: ValidationError[];
  rules: { schema: ZodSchema; message: string }[];
}

export const FieldRules = ({ rules, value, errors }: PropsType) => (
  <ul className="space-y-1">
    {rules.map((rule) => {
      const isValid = rule.schema.safeParse(value).success;
      const hasError = errors.join(",").includes(rule.message);

      return (
        <li
          key={rule.message}
          className={classNames({
            [css.valid]: isValid,
            [css.invalid]: hasError,
          })}
        >
          {rule.message}
        </li>
      );
    })}
  </ul>
);
