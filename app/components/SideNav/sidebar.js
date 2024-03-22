import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Sidebar Header
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        {/* Add more li elements for additional pages */}
      </ul>
    </div>
  );
};

export default Sidebar;