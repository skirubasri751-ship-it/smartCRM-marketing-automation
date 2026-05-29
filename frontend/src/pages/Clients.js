import React, { useEffect, useState } from "react";
import API from "../api";
import Sidebar from "../components/Sidebar";
import ClientCard from "../components/ClientCard";

function Clients() {

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    status: ""
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {

    try {

      const res = await API.get(
        "http://localhost:5000/api/clients"
      );

      setClients(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        await API.put(
          `http://localhost:5000/api/clients/${editId}`,
          formData
        );

        setEditId(null);

      } else {

        await API.post(
          "http://localhost:5000/api/clients",
          formData
        );
      }

      fetchClients();

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        status: ""
      });

    } catch (error) {

      console.log(error);
    }
  };

  const deleteClient = async (id) => {

    try {

      await API.delete(
        `http://localhost:5000/api/clients/${id}`
      );

      fetchClients();

    } catch (error) {
      console.log(error);
    }
  };

  const editClient = (client) => {

    setFormData({
      name: client.name,
      company: client.company,
      email: client.email,
      phone: client.phone,
      status: client.status
    });

    setEditId(client._id);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          CLIENT MANAGEMENT
        </h1>

        <input
          type="text"
          placeholder="Search Client..."
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

          <button className="btn">
            {editId ? "Update Client" : "Add Client"}
          </button>

        </form>

        <div className="card-grid">

          {filteredClients.map((client) => (

            <div key={client._id}>

              <ClientCard client={client} />

              <button
                className="edit-btn"
                onClick={() =>
                  editClient(client)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteClient(client._id)
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

export default Clients;