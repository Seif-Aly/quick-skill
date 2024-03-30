import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./mockData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="custom-button-group">
      <FaArrowCircleLeft onClick={previous} className="custom-left-arrow" />
      <FaArrowCircleRight onClick={next} className="custom-right-arrow" />
    </div>
  );
};

const LeaderboardCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      ssr
      infinite={false}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={300}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      centerMode={true}
      customButtonGroup={<CustomButtonGroup />}
      renderButtonGroupOutside={true}
      arrows={false}
    >
      {data.leagues.map((league, idx) => {
        const isPastOrCurrent =
          idx <= data.leagues.findIndex((l) => l.name === data.currentLeague);
        const isCurrent = league.name === data.currentLeague;
        return (
          <div
            key={idx}
            className={`league-item ${
              isPastOrCurrent ? "current-or-past" : "future-league"
            } ${isCurrent ? "current-league" : ""}`}
          >
            <img src={league.icon} alt={league.name} className="league-icon" />
            {isPastOrCurrent && <p className="league-name">{league.name}</p>}
          </div>
        );
      })}
    </Carousel>
  );
};

export default LeaderboardCarousel;
