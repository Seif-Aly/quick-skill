import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Settings.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Settings 🛠️</div>
      <NavLink
        to="/settings/profile"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings/goals"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        Goal settings
      </NavLink>
      <NavLink
        to="/settings/delete"
        className={({ isActive }) =>
          isActive
            ? "sidebar-link active delete-link"
            : "sidebar-link delete-link"
        }
      >
        Delete account
      </NavLink>
    </div>
  );
};

export default Sidebar;
