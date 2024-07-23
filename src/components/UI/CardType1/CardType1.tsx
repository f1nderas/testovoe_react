import { FC } from "react";
import styles from "./CardType1.module.scss";
import classNames from "classnames";
interface ICardType1 {
  img: string;
  title: string;
  text: string;
}

const CardType1: FC<ICardType1> = ({ img, title, text }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.img} src={img} alt="" />
        <h6 className={classNames("h6", styles.title)}>{title}</h6>
        <div className={styles.text}>{text}</div>
      </div>
    </>
  );
};

export default CardType1;
