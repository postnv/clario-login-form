import { useState } from "react";
import classNames from "classnames";

import css from "./styles.module.css";

import { Input, InputProps, Button, EyeIcon } from "~/src/shared/ui";

type PropsType = Omit<InputProps, "type">;

export const Password = (props: PropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={css.wrapper}>
      <Input {...props} type={showPassword ? "text" : "password"} />
      <Button className={css.button} onClick={handleTogglePassword}>
        <EyeIcon
          className={classNames(css.icon, {
            [css.error]: props.error,
            [css.success]: props.success,
          })}
          variant={showPassword ? "show" : "hide"}
        />
      </Button>
    </div>
  );
};
