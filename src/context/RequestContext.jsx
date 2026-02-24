// src/context/RequestContext.js
// ─────────────────────────────────────────────────────
// This file manages the GLOBAL state for blood requests.
// Any component can read `requests` or call `addRequest`.
// ─────────────────────────────────────────────────────

import { createContext, useContext, useState } from "react";

const RequestContext = createContext();

export function RequestProvider({ children }) {
  const [requests, setRequests] = useState([]);

  // Add a new request — called when user clicks "Request Help"
  function addRequest(donor) {
    setRequests((prev) => {
      const alreadyExists = prev.find((r) => r.id === donor.id);
      if (alreadyExists) return prev;
      return [...prev, { ...donor, requestedAt: new Date().toLocaleString() }];
    });
  }

  // Check if a donor has already been requested
  function isRequested(donorId) {
    return requests.some((r) => r.id === donorId);
  }

  return (
    <RequestContext.Provider value={{ requests, addRequest, isRequested }}>
      {children}
    </RequestContext.Provider>
  );
}

// Custom hook — use this in any component to access requests
export function useRequests() {
  return useContext(RequestContext);
}