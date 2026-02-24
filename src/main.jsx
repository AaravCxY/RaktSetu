// src/index.js
// ─────────────────────────────────────────────────────
// Entry point — mounts the React app into #root div.
// ─────────────────────────────────────────────────────

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);