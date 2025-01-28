import { useState } from "react";

import { Input, InputProps } from "~/src/shared/ui/input";
import { Button } from "~/src/shared/ui/button";

type PropsType = Omit<InputProps, "type">;

export const Password = (props: PropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <Input {...props} type={showPassword ? "text" : "password"} />
      <Button onClick={handleTogglePassword}>Icon</Button>
    </div>
  );
};
