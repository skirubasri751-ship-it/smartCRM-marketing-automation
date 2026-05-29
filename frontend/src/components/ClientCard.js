import React from "react";

function ClientCard({ client }) {

  return (

    <div className="card">

      <h3>{client.name}</h3>

      <p>
        Company: {client.company}
      </p>

      <p>
        Email: {client.email}
      </p>

      <p>
        Phone: {client.phone}
      </p>

      <p>
        Status: {client.status}
      </p>

    </div>
  );
}

export default ClientCard;