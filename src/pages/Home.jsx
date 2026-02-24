// src/pages/Home.js
// ─────────────────────────────────────────────────────
// Landing page with:
//   1. Banner (headline + CTA button)
//   2. Stats row (Donors, Cities, Requests)
// Props:
//   setPage      — to navigate to Donors page from banner button
//   totalDonors  — number of donors fetched
//   requestCount — number of requests made so far
// ─────────────────────────────────────────────────────

import { CITIES } from "../data/helpers";

export default function Home({ setPage, totalDonors, requestCount }) {
  const stats = [
    { icon: "🩸", number: "2,847", label: "Registered Donors" },
    { icon: "🏙️", number: "35+", label: "Cities Covered" },
    { icon: "📋", number: requestCount, label: "Requests Made" },
  ];

  return (
    <div>
      {/* ── Banner ── */}
      <section className="banner">
        <h1>RaktSetu — Khoon Ka Rishta</h1>
        <p>
          Ek drop se badal sakti hai kisi ki zindagi. Apne sheher mein verified
          donors dhundo — jaldi, asaan, aur bilkul free.
        </p>
        <button className="banner-btn" onClick={() => setPage("donors")}>
          Browse Donors →
        </button>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
