import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFaq, toggleQuestion } from "../../../features/faq/faqSlice";
import { CirclePlus, CircleX } from "lucide-react";

import styles from "./Accordion.module.scss";
import classNames from "classnames";

const Accordion: FC = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dispatch = useDispatch();
  const { questions, openQuestionId } = useSelector(selectFaq);

  const handleToggle = (id: number) => {
    dispatch(toggleQuestion(id));
  };

  return (
    <>
      <div className={styles.accordion}>
        {questions.map(({ id, question, answer }, index) => (
          <div key={id} className={styles.item}>
            <div className={styles.question} onClick={() => handleToggle(id)}>
              <div>{question}</div>
              {openQuestionId === id ? <CircleX /> : <CirclePlus />}
            </div>
            <div
              className={styles.collapse}
              style={
                openQuestionId === id
                  ? { height: itemRefs.current[index]?.scrollHeight }
                  : { height: "0px" }
              }
            >
              <div
                className={classNames(styles.body)}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                {answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
