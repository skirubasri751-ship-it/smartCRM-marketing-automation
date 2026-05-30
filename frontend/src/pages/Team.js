import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Team = () => {

  const [team, setTeam] = useState({
    uiDesigner: 0,
    marketingLead: 0,
    developer: 0,
    sales: 0
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {

    try {

      const res = await API.get(
        "/team"
      );

      setTeam(res.data);

    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div>

      <h2>Team Overview</h2>

      <div className="team-grid">

        <div className="card">
          <h3>UI Designer</h3>
          <p>{team.uiDesigner}</p>
        </div>

        <div className="card">
          <h3>Marketing Lead</h3>
          <p>{team.marketingLead}</p>
          </div>

        <div className="card">
          <h3>Developer</h3>
          <p>{team.developer}</p>
        </div>

        <div className="card">
          <h3>Sales</h3>
          <p>{team.sales}</p>
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

export default Team;