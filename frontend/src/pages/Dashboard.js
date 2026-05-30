import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const [dashboard, setDashboard] = useState({
    clientsCount: 0,
    staffCount: 0,
    tasksCount: 0,
    contactsCount: 0,
    usersCount: 0
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await API.get(
        "/dashboard"
      );

      setDashboard(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="app">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h1 className="logo">
          SMARTCRM
        </h1>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/clients">Clients</Link>

        <Link to="/staff">Staff</Link>

        <Link to="/tasks">Tasks</Link>

        <Link to="/analytics">Analytics</Link>

        <Link to="/team">Team</Link>

        <Link to="/settings">Settings</Link>

        <Link to="/contact">Contact</Link>

      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">

        <h1 className="page-title">
          Dashboard
        </h1>

        <div className="dashboard-cards">

          <div className="dashboard-box">
            <h2>{dashboard.clientsCount}</h2>
            <p>Total Clients</p>
          </div>

          <div className="dashboard-box">
            <h2>{dashboard.staffCount}</h2>
            <p>Total Staff</p>
          </div>

          <div className="dashboard-box">
            <h2>{dashboard.tasksCount}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="dashboard-box">
            <h2>{dashboard.contactsCount}</h2>
            <p>Total Contacts</p>
          </div>

          <div className="dashboard-box">
            <h2>{dashboard.usersCount}</h2>
            <p>Registered Users</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;