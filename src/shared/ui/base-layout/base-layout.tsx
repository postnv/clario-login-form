import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export const BaseLayout = ({ children }: PropsType) => {
  return <main>{children}</main>;
};
