// src/components/LoadingScreen.js
// ─────────────────────────────────────────────────────
// Shows a red splash screen for ~1 second on app load.
// CSS handles the fade-out after 1s (see index.css).
// ─────────────────────────────────────────────────────

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-icon">🩸</div>
      <div className="loading-text">BloodConnect</div>
    </div>
  );
}