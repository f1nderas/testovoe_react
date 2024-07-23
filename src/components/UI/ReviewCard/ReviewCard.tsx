import { FC } from "react";
import styles from "./ReviewCard.module.scss";
import classNames from "classnames";
interface IReviewCardProps {
  review: {
    img: string;
    name: string;
    location: string;
    text: string;
  };
}
const ReviewCard: FC<IReviewCardProps> = ({ review }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.img} src={review.img} alt="" />
        <h6 className={classNames("h6", styles.name)}>{review.name}</h6>
        <div className={styles.location}>{review.location}</div>
        <div className={styles.text}>{review.text}</div>
      </div>
    </>
  );
};

export default ReviewCard;
