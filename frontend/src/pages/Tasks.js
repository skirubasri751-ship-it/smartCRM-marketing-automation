import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Tasks = () => {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending"
  });

  // FETCH TASKS
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const res = await API.get(
        "/tasks"
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // ADD TASK
  const addTask = async () => {

    try {

      await API.post(
        "/tasks",
        formData
      );

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        status: "Pending"
      });

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await API.delete(
        `/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };

  // EDIT TASK
  const editTask = (task) => {

    setEditingId(task._id);

    setFormData({
      title: task.title || "",
      description: task.description || "",
      status: task.status || "Pending"
    });
  };

  // UPDATE TASK
  const updateTask = async () => {

    try {

      await API.put(
        `/tasks/${editingId}`,
        formData
      );

      fetchTasks();

      setEditingId(null);

      setFormData({
        title: "",
        description: "",
        status: "Pending"
      });

    } catch (error) {

      console.log(error);
    }
  };

  // SEARCH
  const filteredTasks = tasks.filter((task) =>
    task.title &&
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="tasks-container">

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate(-1)}
        className="back-btn"
      >
        ← Back
      </button>

      <h1 className="tasks-heading">
        Tasks Management
      </h1>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search Task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* FORM */}

      <div className="task-form">

        <h2>
          {editingId ? "Edit Task" : "Add Task"}
        </h2>

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

        <textarea
          placeholder="Task Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value
            })
          }
        />

        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value
            })
          }
        >

          <option value="Pending">
            Pending
          </option>

          <option value="Completed">
            Completed
          </option>

        </select>

        {editingId ? (

          <button
            onClick={updateTask}
            className="update-btn"
          >
            Update Task
          </button>

        ) : (

          <button
            onClick={addTask}
            className="add-btn"
          >
            Add Task
          </button>

        )}

      </div>

      {/* TASKS */}

      <div className="tasks-grid">

        {filteredTasks.map((task) => (

          <div
            key={task._id}
            className="task-card"
          >

            <h3>
              {task.title}
            </h3>

            <p>
              {task.description}
            </p>

            <p>
              Status: {task.status}
            </p>

            <div className="task-buttons">

              <button
                onClick={() => editTask(task)}
                className="edit-btn"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className="delete-btn"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Tasks;