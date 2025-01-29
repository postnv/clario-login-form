import css from "./styles.module.css";

import { AuthForm } from "~/src/features/auth/ui";

export const SignUpPage = () => (
  <div className={css.content}>
    <AuthForm />
  </div>
);
