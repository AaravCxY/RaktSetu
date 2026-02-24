// src/pages/Requests.js
// ─────────────────────────────────────────────────────
// Shows all the donors the user has requested help from.
// Data comes from RequestContext (shared global state).
// ─────────────────────────────────────────────────────

import { useRequests } from "../context/RequestContext";

export default function Requests() {
  const { requests } = useRequests();

  // ── Empty state ──
  if (requests.length === 0) {
    return (
      <div className="section">
        <h2 className="section-title">My Requests</h2>
        <p className="section-subtitle">Donors you have requested will appear here.</p>

        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <p>No requests yet. Go to Donors and click "Request Help".</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <h2 className="section-title">My Requests</h2>
      <p className="section-subtitle">
        You have sent {requests.length} request{requests.length > 1 ? "s" : ""}.
      </p>

      <div className="request-list">
        {requests.map((r) => (
          <div className="request-item" key={r.id}>
            {/* Left: donor details */}
            <div className="request-info">
              <h4>{r.name}</h4>
              <p>
                {r.email} &nbsp;·&nbsp; 📍 {r.city} &nbsp;·&nbsp;
                <strong style={{ color: "#c0392b" }}>{r.bloodType}</strong>
              </p>
              <p style={{ marginTop: "0.2rem", fontSize: "0.75rem", color: "#bbb" }}>
                Requested at: {r.requestedAt}
              </p>
            </div>

            {/* Right: status badge */}
            <span className="request-status-badge">Request Sent ✅</span>
          </div>
        ))}
      </div>
    </div>
  );
}