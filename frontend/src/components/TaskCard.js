import React from "react";

function TaskCard({ task }) {

  return (

    <div className="card">

      <h3>{task.title}</h3>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

    </div>

  );
}

export default TaskCard;