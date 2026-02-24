// src/components/Footer.js
// ─────────────────────────────────────────────────────
// Simple site footer — shown on every page.
// ─────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>BloodConnect</strong> — Every drop counts. Save lives today. ❤️
      </p>
      <p style={{ marginTop: "0.4rem", fontSize: "0.75rem" }}>
        © {new Date().getFullYear()} RaktSetu. All rights reserved.
      </p>
    </footer>
  );
}