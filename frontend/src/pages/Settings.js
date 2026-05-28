import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Settings() {

  const [settings, setSettings] = useState({
    companyName:"",
    businessEmail:""
  });

  const handleSubmit = async(e) => {

    e.preventDefault();

    try{

      await axios.post(
        "https://smart-crm-marketing-automation.vercel.app/api/settings",
        settings
      );

      alert("Settings Saved");

    }catch(error){

      alert("Error Saving Settings");

    }
  };

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          SETTINGS
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Company Name"
            value={settings.companyName}
            onChange={(e)=>
              setSettings({
                ...settings,
                companyName:e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Business Email"
            value={settings.businessEmail}
            onChange={(e)=>
              setSettings({
                ...settings,
                businessEmail:e.target.value
              })
            }
          />

          <button className="btn">
            Save Settings
          </button>

        </form>

      </div>

    </div>
  );
}

export default Settings;