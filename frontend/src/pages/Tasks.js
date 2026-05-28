import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    status: ""
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/tasks"
      );

      setTasks(res.data || []);

    } catch (error) {

      console.log(error);

      setTasks([]);

    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://smart-crm-marketing-automation.vercel.app/api/tasks",
        formData
      );

      fetchTasks();

      setFormData({
        title: "",
        priority: "",
        status: ""
      });

    } catch (error) {

      console.log(error);

      alert("Error Adding Task");

    }
  };

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          TASK MANAGEMENT
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Task Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Priority"
            value={formData.priority}
            onChange={(e) =>
              setFormData({
                ...formData,
                priority: e.target.value
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
            Add Task
          </button>

        </form>

        <div className="card-grid">

          {tasks && tasks.length > 0 ? (

            tasks.map((task) => (

              <TaskCard
                key={task._id}
                task={task}
              />

            ))

          ) : (

            <p style={{ color: "white" }}>
              No Tasks Added
            </p>

          )}

        </div>

      </div>

    </div>

  );
}

export default Tasks;