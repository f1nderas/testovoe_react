import { FC } from "react";
import styles from "./Survey.module.scss";
interface ISurveyProps {
  title: string;
  text: string;
}
const Survey: FC<ISurveyProps> = ({ title, text }) => {
  return (
    <>
      <div className={styles.survey}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </>
  );
};

export default Survey;
