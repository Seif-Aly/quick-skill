import React from "react";
import { FaHeart } from "react-icons/fa6";

const ConnectionDiagram = () => {
  return (
    <div className="diagram-container">
      <div className="icons-container">
        {/* Repeat this block for each icon */}
        <div className="icon-item">
          <div className="icon-circle">
            <FaHeart color="red" className="heart-icnn" />
          </div>
          <span className="icon-name">Жизни</span>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <img src="/crystal.svg" alt="Python SDK" className="icon11" />
          </div>
          <span className="icon-name">Кристаллы</span>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <img src="/freeze.svg" alt="Python SDK" className="icon9" />
          </div>
          <span className="icon-name">Заморозкы</span>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <img src="/fire.svg" alt="Python SDK" className="icon8" />
          </div>
          <span className="icon-name">Ударный режим</span>
        </div>
      </div>
    </div>
  );
};

export default ConnectionDiagram;
