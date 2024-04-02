import React, { useState } from "react";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import { useNavigate } from "react-router-dom";
import "../Style/SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleBack = () => {
    navigate(-1);
  };

  const showMoreUsers = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const userRecommendations = [
    { username: "Alexey Kiselev", mutuals: 1, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
    { username: "Kotak Jeme", mutuals: 0, photo: "/prof.png" },
  ];

  return (
    <>
      <NavbarSignedIn />
      <button onClick={handleBack} className="back-button">
        {"< Profile"}
      </button>
      <div className="search-page-container">
        <h1 className="text-left">Find new people here 🔍</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2 className="text-left">You may know them:</h2>
        <div className="user-recommendations">
          {userRecommendations.slice(0, visibleCount).map((user, index) => (
            <div className="user-card" key={index}>
              <div className="user-info">
                <img src={user.photo} alt={user.username} />
                <span>{user.username}</span>
                <br />
                <span className="mut-fol"> {user.mutuals} mutal follower</span>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
          ))}
        </div>
        {visibleCount < userRecommendations.length && (
          <button className="show-more-btn" onClick={showMoreUsers}>
            Show more
          </button>
        )}
      </div>
    </>
  );
};

export default SearchPage;
