import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Mock data for the badges
const badges = [
  { id: 1, name: "QuickSkill veteran", icon: "/Badge.svg" },
  { id: 2, name: "Practice killer", icon: "/Badge.svg" },
  { id: 3, name: "Answers guru", icon: "/Badge.svg" },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

const BadgesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="badges-slider-container">
      <h2 className="titleQuicky">Badges</h2>
      <Slider {...settings}>
        {badges.map((badge) => (
          <div key={badge.id} className="badge-item">
            <img src={badge.icon} alt={badge.name} />
            <p>{badge.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BadgesSlider;
