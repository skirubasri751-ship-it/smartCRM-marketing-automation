import React, { useEffect, useState } from "react";
import API from "../api";
import Sidebar from "../components/Sidebar";

function Contact() {

  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {

    try {

      const res = await API.get("/messages");

      setMessages(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        await API.put(
          `/messages/${editId}`,
          formData
        );

      } else {

        await API.post(
          "/messages",
          formData
        );
      }

      fetchMessages();

      setEditId(null);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id) => {

    try {

      await API.delete(`/messages/${id}`);

      fetchMessages();

    } catch (error) {
      console.log(error);
    }
  };

  const editMessage = (msg) => {

    setFormData({
      name: msg.name,
      email: msg.email,
      message: msg.message
    });

    setEditId(msg._id);
  };

  const filteredMessages = messages.filter((msg) =>
    msg.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1>CONTACT / MESSAGES</h1>

        <input
          type="text"
          placeholder="Search Message"
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
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
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
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value
              })
            }
          />

          <button className="btn">
            {editId ? "Update" : "Add"}
          </button>

        </form>

        <div className="card-grid">

          {filteredMessages.map((msg) => (

            <div
              className="card"
              key={msg._id}
            >

              <h3>{msg.name}</h3>

              <p>{msg.email}</p>

              <p>{msg.message}</p>

              <button
                className="edit-btn"
                onClick={() =>
                  editMessage(msg)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteMessage(msg._id)
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

export default Contact;