import { ReactNode } from "react";

import css from "./styles.module.css";

interface PropsType {
  children: ReactNode;
}

export const BaseLayout = ({ children }: PropsType) => {
  return <main className={css.main}>{children}</main>;
};
