import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../../../features/reviews/reviewsSlice";

const AddReview: FC = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newReview = { name, location, text };
    dispatch(addReview(newReview));
    setName("");
    setLocation("");
    setText("");
  };
  return (
    <>
      <div className="add-review">
        <h3>Добавить отзыв</h3>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Местоположение"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          placeholder="Отзыв"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Добавить</button>
      </div>
    </>
  );
};

export default AddReview;
