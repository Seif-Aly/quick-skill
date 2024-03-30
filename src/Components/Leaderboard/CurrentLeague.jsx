import React from "react";
import { Card } from "react-bootstrap";

const CurrentLeague = ({ currentLeague }) => {
  return (
    <>
      <div className="league-cont">
        <h1>Current League:</h1>
        <Card className="card-current">
          <Card.Body className="cont-league">
            <img
              src={currentLeague.icon}
              alt={currentLeague.name}
              className="mr-3 mt-2"
            />
            <Card.Title className="mt-3">{currentLeague.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CurrentLeague;
