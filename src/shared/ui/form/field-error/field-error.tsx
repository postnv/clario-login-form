import css from "./styles.module.css";

type ErrorType = string | undefined | null | false;

interface PropsType {
  errors: ErrorType[];
}

export const FieldError = ({ errors }: PropsType) => {
  const hasErrors = !!errors.length;

  if (!hasErrors) return null;

  return (
    <ul className={css.list}>
      {errors.map((error) => (
        <li key={`${error}`}>{error}</li>
      ))}
    </ul>
  );
};
