// src/components/DonorCard.js
// ─────────────────────────────────────────────────────
// Displays one donor's info inside a card.
// Props:
//   donor     — { id, name, email, city, bloodType, available }
//   onRequest — function called when "Request Help" is clicked
//   requested — boolean — has this donor been requested already?
// ─────────────────────────────────────────────────────

import { getInitials } from "../data/helpers";

export default function DonorCard({ donor, onRequest, requested }) {
  // Decide button look based on state
  const btnClass = requested
    ? "request-btn sent"
    : donor.available
    ? "request-btn idle"
    : "request-btn disabled";

  const btnText = requested
    ? "Request Sent ✅"
    : donor.available
    ? "Request Help"
    : "Unavailable";

  return (
    <div className="donor-card">
      {/* Top row: avatar + blood badge */}
      <div className="donor-card-header">
        <div className="donor-avatar">{getInitials(donor.name)}</div>
        <span className="blood-badge">{donor.bloodType}</span>
      </div>

      {/* Name & email */}
      <div className="donor-name">{donor.name}</div>
      <div className="donor-email">{donor.email}</div>

      {/* City & availability */}
      <div className="donor-info-row">
        <div className="info-item">
          <label>City</label>
          <span>📍 {donor.city}</span>
        </div>
        <div className="info-item">
          <label>Availability</label>
          <span>
            <span
              className={`availability-dot ${
                donor.available ? "available" : "unavailable"
              }`}
            />
            {donor.available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      {/* Request button */}
      <button
        className={btnClass}
        disabled={requested || !donor.available}
        onClick={() => onRequest(donor)}
      >
        {btnText}
      </button>
    </div>
  );
}