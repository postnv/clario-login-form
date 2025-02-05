import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";

import css from "./styles.module.css";

type InputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps {
  name: string;
  placeholder?: string;
  value: InputPropsType["value"];
  type: InputPropsType["type"];
  onChange: InputPropsType["onChange"];
  onBlur?: InputPropsType["onBlur"];
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Input = ({
  name,
  value,
  type,
  onChange,
  onBlur,
  placeholder,
  error,
  success,
  disabled,
  className,
}: InputProps) => (
  <input
    className={classNames(css.input, className, {
      [css.error]: !!error,
      [css.success]: !!success,
    })}
    id={name}
    name={name}
    value={value}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
    onBlur={onBlur}
  />
);
