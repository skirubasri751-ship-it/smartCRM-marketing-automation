import React, { useEffect, useState } from "react";
import API from "../api";
import Sidebar from "../components/Sidebar";
import StaffCard from "../components/StaffCard";

function Staff() {

  const [staffs, setStaffs] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

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

      const res = await API.get(
        "http://localhost:5000/api/staff"
      );

      setStaffs(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        await API.put(
          `http://localhost:5000/api/staff/${editId}`,
          formData
        );

        setEditId(null);

      } else {

        await API.post(
          "http://localhost:5000/api/staff",
          formData
        );
      }

      fetchStaffs();

      setFormData({
        name: "",
        role: "",
        email: "",
        department: ""
      });

    } catch (error) {

      console.log(error);
    }
  };

  const deleteStaff = async (id) => {

    try {

      await API.delete(
        `http://localhost:5000/api/staff/${id}`
      );

      fetchStaffs();

    } catch (error) {
      console.log(error);
    }
  };

  const editStaff = (staff) => {

    setFormData({
      name: staff.name,
      role: staff.role,
      email: staff.email,
      department: staff.department
    });

    setEditId(staff._id);
  };

  const filteredStaffs = staffs.filter((staff) =>
    staff.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          STAFF MANAGEMENT
        </h1>

        <input
          type="text"
          placeholder="Search Staff..."
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
            {editId ? "Update Staff" : "Add Staff"}
          </button>

        </form>

        <div className="card-grid">

          {filteredStaffs.map((staff) => (

            <div key={staff._id}>

              <StaffCard staff={staff} />

              <button
                className="edit-btn"
                onClick={() =>
                  editStaff(staff)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteStaff(staff._id)
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

export default Staff;