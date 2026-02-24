// src/data/helpers.js
// ─────────────────────────────────────────────────────
// Helper functions used to enrich API data with
// blood type and availability (since the API doesn't have them).
// ─────────────────────────────────────────────────────

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const CITIES = [
  "Mumbai", "Delhi", "Bengaluru", "Chennai",
  "Kolkata", "Hyderabad", "Pune", "Ahmedabad",
  "Jaipur", "Lucknow",
];

// Randomly pick blood type for a donor
export function randomBloodType() {
  return BLOOD_TYPES[Math.floor(Math.random() * BLOOD_TYPES.length)];
}

// Randomly decide if donor is available (70% chance = true)
export function randomAvailability() {
  return Math.random() > 0.3;
}

// Randomly assign a city
export function randomCity() {
  return CITIES[Math.floor(Math.random() * CITIES.length)];
}

// Get initials from full name (e.g. "John Doe" → "JD")
export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export { CITIES };