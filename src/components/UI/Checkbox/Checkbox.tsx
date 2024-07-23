import { FC, ChangeEvent } from "react";
import styles from "./Checkbox.module.scss";

interface ICheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}
const Checkbox: FC<ICheckboxProps> = ({ id, checked, onChange, label }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.checkbox}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
