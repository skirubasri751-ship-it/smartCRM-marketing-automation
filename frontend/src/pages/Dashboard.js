import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {

  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          SMARTCRM DASHBOARD
        </h1>

        <div className="dashboard-cards">

          <div className="dashboard-box">
            <h2>120+</h2>
            <p>Total Clients</p>
          </div>

          <div className="dashboard-box">
            <h2>40+</h2>
            <p>Staff Members</p>
          </div>

          <div className="dashboard-box">
            <h2>87%</h2>
            <p>Marketing Growth</p>
          </div>

          <div className="dashboard-box">
            <h2>65+</h2>
            <p>Completed Campaigns</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;