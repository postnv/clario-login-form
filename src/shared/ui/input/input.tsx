import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: InputPropsType["value"];
  type: InputPropsType["type"];
  onChange: InputPropsType["onChange"];
  onBlur?: InputPropsType["onBlur"];
}

export const Input = ({
  name,
  value,
  label,
  type,
  onChange,
  onBlur,
  placeholder,
}: InputProps) => (
  <div>
    {!!label && <label htmlFor={name}>{label}</label>}
    <input
      id={name}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);
