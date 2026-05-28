import React from "react";
import Sidebar from "../components/Sidebar";

function Analytics() {

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          ANALYTICS
        </h1>

        <div className="analytics-grid">

          <div className="analytics-card">
            <h2>120+</h2>
            <p>Total Clients</p>
          </div>

          <div className="analytics-card">
            <h2>85%</h2>
            <p>Campaign Success</p>
          </div>

          <div className="analytics-card">
            <h2>250+</h2>
            <p>Completed Tasks</p>
          </div>

          <div className="analytics-card">
            <h2>40+</h2>
            <p>Marketing Staff</p>
          </div>

          <div className="analytics-card">
            <h2>92%</h2>
            <p>Customer Satisfaction</p>
          </div>

          <div className="analytics-card">
            <h2>75+</h2>
            <p>Active Campaigns</p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Analytics;