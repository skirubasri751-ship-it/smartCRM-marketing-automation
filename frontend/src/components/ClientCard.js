import React from "react";

function ClientCard({ client }) {
  return (
    <div className="card">
      <h3>{client.name}</h3>

      <p>
        <strong>Company:</strong> {client.company}
      </p>

      <p>
        <strong>Status:</strong> {client.status}
      </p>

      {client.email && (
        <p>
          <strong>Email:</strong> {client.email}
        </p>
      )}

      {client.phone && (
        <p>
          <strong>Phone:</strong> {client.phone}
        </p>
      )}
    </div>
  );
}

export default ClientCard;