import React from "react";
import { Container } from "react-bootstrap";
import LeagueSlider from "./LeagueSlider";
import UsersRating from "./UsersRating";
import CurrentLeague from "./CurrentLeague";
import mockData from "./mockData";
import NavbarInCourse from "../Navbars/NavbarInCourse";
import "../Style/LeaderboardPage.css";

const LeaderboardPage = () => {
  return (
    <>
      <NavbarInCourse />
      <Container className="leaderboard-page">
        <LeagueSlider
          leagues={mockData.leagues}
          currentLeague={mockData.currentLeague}
        />
        <div className="rating-and-league-container">
          <div className="users-rating-container">
            <UsersRating />
          </div>
          <div>
            <CurrentLeague
              currentLeague={mockData.leagues.find(
                (league) => league.name === mockData.currentLeague
              )}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LeaderboardPage;
