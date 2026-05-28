import React from "react";
import Sidebar from "../components/Sidebar";

function Team() {

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          TEAM MEMBERS
        </h1>

        <div className="card-grid">

          <div className="card">
            <h3>Marketing Lead</h3>
            <p>
              Handles customer campaigns and CRM strategies.
            </p>
          </div>

          <div className="card">
            <h3>Sales Manager</h3>
            <p>
              Manages sales and client communication.
            </p>
          </div>

          <div className="card">
            <h3>Support Team</h3>
            <p>
              Provides customer support and issue resolution.
            </p>
          </div>

          <div className="card">
            <h3>UI/UX Designer</h3>
            <p>
              Designs professional CRM interfaces and layouts.
            </p>
          </div>

          <div className="card">
            <h3>Backend Developer</h3>
            <p>
              Maintains APIs, database and server integration.
            </p>
          </div>

          <div className="card">
            <h3>Project Manager</h3>
            <p>
              Oversees project planning and team coordination.
            </p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Team;