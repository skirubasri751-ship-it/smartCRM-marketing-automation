import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import StaffCard from "../components/StaffCard";

function Staff() {

  const [staffs, setStaffs] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    department: ""
  });

  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchStaffs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/staff"
      );

      setStaffs(res.data || []);

    } catch (error) {

      console.log(error);

      setStaffs([]);

    }
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "http://localhost:5000/api/staff",
      formData
    );

    alert("Staff Added Successfully");

    fetchStaffs();

    setFormData({
      name: "",
      role: "",
      email: "",
      department: ""
    });

  } catch (error) {

    console.log(error);

    alert("Error Adding Staff");

  }
};
  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          STAFF MANAGEMENT
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Staff Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Role"
            value={formData.role}
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value
              })
            }
          />

          <button className="btn">
            Add Staff
          </button>

        </form>

        <div className="card-grid">

          {staffs && staffs.length > 0 ? (

            staffs.map((staff) => (

              <StaffCard
                key={staff._id}
                staff={staff}
              />

            ))

          ) : (

            <p style={{ color: "white" }}>
              No Staff Added
            </p>

          )}

        </div>

      </div>

    </div>

  );
}

export default Staff;