import { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const Form: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCheked, setIsCheked] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(isNameValid && isPhoneValid && isCheked);
  }, [isNameValid, isPhoneValid, isCheked]);

  const validateName = (name: string) => /^[a-zA-Zа-яА-Я\s]+$/.test(name);
  const validatePhone = (phone: string) => /^\+?\d{10,15}$/.test(phone);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name);
    setIsNameValid(validateName(name));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhone(phone);
    setIsPhoneValid(validatePhone(phone));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCheked(e.target.checked);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, phone, isCheked);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          id="name"
          additionalClass={styles.input}
          placeholder="Имя"
          onChangeValid={handleNameChange}
          isValid={isNameValid}
        />
        <Input
          id="phone"
          additionalClass={styles.input}
          placeholder="Телефон"
          onChangeValid={handlePhoneChange}
          isValid={isPhoneValid}
        />
        <Checkbox
          id="agry"
          label="Согласен, отказываюсь"
          checked={isCheked}
          onChange={handleCheckboxChange}
        />
        <Button type="submit" buttonType="primary" disabled={!isFormValid}>
          Отправить
        </Button>
      </form>
    </>
  );
};
export default Form;
