import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ClientCard from "../components/ClientCard";

function Clients() {

  const [clients, setClients] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    status: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await axios.get("http://localhost:5000/api/clients");
    setClients(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/clients",
      formData
    );

    fetchClients();

    setFormData({
      name: "",
      company: "",
      status: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          CLIENT MANAGEMENT
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Client Name"
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
            placeholder="Company"
            value={formData.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Status"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value
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
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value
              })
            }
          />

          <button className="btn">
            Add Client
          </button>

        </form>

        <div className="card-grid">

          {clients.map((client) => (
            <ClientCard
              key={client._id}
              client={client}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Clients;