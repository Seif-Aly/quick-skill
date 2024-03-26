import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Settings.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Settings 🛠️</div>
      <NavLink
        exact
        to="/settings/profile"
        activeClassName="active"
        className="sidebar-link"
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings/goals"
        activeClassName="active"
        className="sidebar-link"
      >
        Goal settings
      </NavLink>
      <NavLink
        to="/settings/delete"
        activeClassName="active"
        className="sidebar-link delete-link"
      >
        Delete account
      </NavLink>
    </div>
  );
};

export default Sidebar;
