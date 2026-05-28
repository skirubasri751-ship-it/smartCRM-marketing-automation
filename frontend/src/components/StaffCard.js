import React from "react";

function StaffCard({ staff }) {
  return (
    <div className="client-card">
      <h2>{staff.name}</h2>

      <p>
        <strong>Role:</strong> {staff.role}
      </p>

      <p>
        <strong>Email:</strong> {staff.email}
      </p>

      <p>
        <strong>Department:</strong> {staff.department}
      </p>
    </div>
  );
}

export default StaffCard;