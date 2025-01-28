import { ReactNode } from "react";

interface PropsType {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "submit";
  disabled?: boolean;
}

export const Button = ({ onClick, children, disabled, type }: PropsType) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
