import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h1 className="logo">
        SMARTCRM
      </h1>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/clients">
        Clients
      </Link>

      <Link to="/staff">
        Staff
      </Link>

      <Link to="/tasks">
        Tasks
      </Link>

      <Link to="/analytics">
        Analytics
      </Link>

      <Link to="/team">
        Team
      </Link>

      <Link to="/settings">
        Settings
      </Link>

      <Link to="/contact">
        Contact
      </Link>

    </div>

  );
}

export default Sidebar;