import { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { CircleCheck, CircleX } from "lucide-react";

interface IInput {
  id: string;
  additionalClass?: string;
  placeholder?: string;
  onChangeValid?: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
}

const Input: FC<IInput> = ({
  id,
  additionalClass,
  placeholder,
  onChangeValid,
  isValid,
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTouched(true);
    onChangeValid?.(e);
  };

  useEffect(() => {
    if (value.length === 0) {
      setTouched(false);
    }
  }, [value]);

  const renderIcon = () => {
    if (!touched) return null;
    return isValid ? <CircleCheck /> : <CircleX />;
  };

  const wrapperClasses = classNames(styles.wrapper, {
    [styles["is-valid"]]: isValid && touched,
    [styles["is-invalid"]]: !isValid && touched,
  });

  const inputClasses = classNames(styles.input, additionalClass, {
    [styles["is-empty"]]: value.length === 0,
  });

  return (
    <>
      <div className={wrapperClasses}>
        <input
          className={inputClasses}
          id={id}
          type="text"
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor={id}>
          {placeholder}
        </label>
        <span className={styles.icon}>{renderIcon()}</span>
      </div>
    </>
  );
};
export default Input;
