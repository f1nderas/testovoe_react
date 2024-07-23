import { FC } from "react";
import Button from "../Button/Button";
import CardType1 from "../CardType1/CardType1";
import "./Main.scss";
import Survey from "../Survey/Survey";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Accordion from "../Accordion/Accordion";
import Form from "../Form/Form";

const how_work = [
  {
    img: "/testovoe_react/src/assets/how_work/1.svg",
    title: "Прочитай задание внимательно",
    text: "Думаю у тебя не займет это больше двух-трех минут",
  },
  {
    img: "/testovoe_react/src/assets/how_work/2.svg",
    title: "Изучи весь макет заранее",
    text: "Подумай как это будет работать на разных разрешениях и при скролле",
  },
  {
    img: "/testovoe_react/src/assets/how_work/3.svg",
    title: "Сделай хорошо",
    text: "Чтобы мы могли тебе доверить подобные задачи в будущем",
  },
  {
    img: "/testovoe_react/src/assets/how_work/4.svg",
    title: "Получи предложение",
    text: "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
  },
];

const survey_list = [
  {
    id: 1,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
  },
  {
    id: 2,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
  },
  {
    id: 3,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
  },
  {
    id: 4,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
  },
];

const Main: FC = () => {
  return (
    <>
      <main className="main">
        <div className="whole-screen">
          <div className="whole-screen__inner">
            <h1 className="whole-screen__title h1">
              Говорят, никогда не поздно сменить профессию
            </h1>
            <div className="whole-screen__text">
              Сделай круто тестовое задание и у тебя получится
            </div>
            <Button
              type="button"
              buttonType="secondary"
              additionalClass="whole-screen__btn"
            >
              Проще простого
            </Button>
          </div>
        </div>
        <div className="how-work" id="how-work">
          <div className="container section">
            <div className="how-work__inner">
              <h2 className="h2 how-work__title">Как это работает</h2>
              <div className="how-work__list">
                {how_work.map((el) => {
                  return <CardType1 key={el.img} {...el} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="third-block" id="third-block">
          <div className="container section">
            <div className="third-block__inner">
              <div className="third-block__info">
                <h3 className="h3 third-block__title">
                  Круто, ты дошел до третьего блока
                </h3>
                <div className="third-block__text ">
                  <p>
                    63% опрошенных пользовались кредитами из-за того, что не
                    могли покрыть непредвиденные расходы свыше 15 000 ₽.
                  </p>
                  <br />
                  <p>
                    Доступ к заработанным деньгам помогает отказаться от
                    кредитов и экономить деньги на процентах и штрафах.
                  </p>
                </div>
              </div>
              <div className="third-block__images">
                <img
                  className="third-block__img"
                  src="/testovoe_react/third_1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="feed-back">
          <div className="container section">
            <div className="feed-back__inner">
              <h2 className="h2 feed-back__title">Отзывы</h2>
              <ReviewSlider />
            </div>
          </div>
        </div>
        <div className="faq" id="faq">
          <div className="container section">
            <div className="faq__inner">
              <h2 className="h2 faq__title">Вопросы и ответы</h2>
              <Accordion />
            </div>
          </div>
        </div>
        <div className="review">
          <div className="container section">
            <div className="review__inner">
              {survey_list.map((survey) => {
                return <Survey key={survey.id} {...survey} />;
              })}
            </div>
          </div>
        </div>
        <div className="form" id="form">
          <div className="container section">
            <div className="form__inner">
              <h2 className="h2 form__title">Отправь форму</h2>
              <Form />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
