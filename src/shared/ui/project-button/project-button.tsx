import classNames from "classnames";

import css from "./styles.module.css";

import { Button, ButtonProps } from "~/src/shared/ui";

export const ProjectButton = ({
  children,
  className,
  ...props
}: ButtonProps) => (
  <Button {...props} className={classNames(css.projectBtn, className)}>
    {children}
  </Button>
);
