import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Analytics = () => {

  const [analytics, setAnalytics] = useState({
    totalClients: 0,
    totalStaff: 0,
    totalTasks: 0,
    totalMessages: 0,
    completedTasks: 0,
    pendingTasks: 0
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/analytics"
      );

      setAnalytics(res.data);

    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  return (
    <div>

      <h2>Analytics Dashboard</h2>

      <div className="analytics-grid">

        <div className="card">
          <h3>Total Clients</h3>
          <p>{analytics.totalClients}</p>
        </div>

        <div className="card">
          <h3>Total Staff</h3>
           <p>{analytics.totalStaff}</p>
        </div>

        <div className="card">
          <h3>Total Tasks</h3>
          <p>{analytics.totalTasks}</p>
        </div>

        <div className="card">
          <h3>Total Messages</h3>
          <p>{analytics.totalMessages}</p>
        </div>

        <div className="card">
          <h3>Completed Tasks</h3>
          <p>{analytics.completedTasks}</p>
        </div>

        <div className="card">
          <h3>Pending Tasks</h3>
          <p>{analytics.pendingTasks}</p>
        </div>
        <div>

          <button onClick={() => navigate(-1)}>
          Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default Analytics;