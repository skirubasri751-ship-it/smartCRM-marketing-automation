import React, { useEffect, useState } from "react";
import API from "../api";
import Sidebar from "../components/Sidebar";

function Settings() {

  const [settings, setSettings] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    companyName: "",
    businessEmail: ""
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {

    try {

      const res = await API.get("/settings");

      setSettings(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        await API.put(
          `/settings/${editId}`,
          formData
        );

      } else {

        await API.post(
          "/settings",
          formData
        );
      }

      fetchSettings();

      setEditId(null);

      setFormData({
        companyName: "",
        businessEmail: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  const deleteSetting = async (id) => {

    try {

      await API.delete(`/settings/${id}`);

      fetchSettings();

    } catch (error) {
      console.log(error);
    }
  };

  const editSetting = (setting) => {

    setFormData({
      companyName: setting.companyName,
      businessEmail: setting.businessEmail
    });

    setEditId(setting._id);
  };

  const filteredSettings = settings.filter((setting) =>
    setting.companyName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1>SETTINGS</h1>

        <input
          type="text"
          placeholder="Search Company"
          className="search-bar"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({
                ...formData,
                companyName: e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Business Email"
            value={formData.businessEmail}
            onChange={(e) =>
              setFormData({
                ...formData,
                businessEmail: e.target.value
              })
            }
          />

          <button className="btn">
            {editId ? "Update" : "Add"}
          </button>

        </form>

        <div className="card-grid">

          {filteredSettings.map((setting) => (

            <div
              className="card"
              key={setting._id}
            >

              <h3>
                {setting.companyName}
              </h3>

              <p>
                {setting.businessEmail}
              </p>

              <button
                className="edit-btn"
                onClick={() =>
                  editSetting(setting)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteSetting(setting._id)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Settings;