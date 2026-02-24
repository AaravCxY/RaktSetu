// src/pages/Donors.js
// ─────────────────────────────────────────────────────
// Fetches 10 users from JSONPlaceholder API.
// Adds bloodType, city, availability via Math.random helpers.
// Renders a DonorCard for each donor.
// ─────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import DonorCard from "../components/DonorCard";
import { useRequests } from "../context/RequestContext";
import { randomBloodType, randomAvailability, randomCity } from "../data/helpers";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Donors() {
  const [donors, setDonors]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const { addRequest, isRequested } = useRequests();

  // ── Fetch donors on mount ──
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => {
        // Map API users → donor objects with random blood/city/availability
        const mapped = users.slice(0, 10).map((user) => ({
          id:           user.id,
          name:         user.name,
          email:        user.email,
          city:         randomCity(),
          bloodType:    randomBloodType(),
          available:    randomAvailability(),
        }));
        setDonors(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load donors. Please try again.");
        setLoading(false);
      });
  }, []); // empty array = runs once on mount

  // ── States ──
  if (loading) {
    return (
      <div className="spinner-wrap">
        <div className="spinner" />
        <p>Loading donors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⚠️</div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h2 className="section-title">Available Donors</h2>
      <p className="section-subtitle">
        Showing {donors.length} donors. Click "Request Help" to send a request.
      </p>

      <div className="donor-grid">
        {donors.map((donor) => (
          <DonorCard
            key={donor.id}
            donor={donor}
            onRequest={addRequest}
            requested={isRequested(donor.id)}
          />
        ))}
      </div>
    </div>
  );
}