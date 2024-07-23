import { FC } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import ReviewCard from "../ReviewCard/ReviewCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewSlider.scss";

const ReviewSlider: FC = () => {
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <>
      <Slider {...settings} className="slider-container">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </Slider>
    </>
  );
};

export default ReviewSlider;
