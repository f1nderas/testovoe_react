import { ReactNode, FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
interface IButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  additionalClass?: string;
  buttonType: "primary" | "secondary";
  disabled?: boolean;
}
const Button: FC<IButtonProps> = ({
  type,
  children,
  additionalClass,
  buttonType,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "btn",
        additionalClass,
        styles[buttonType],
        styles.button
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
