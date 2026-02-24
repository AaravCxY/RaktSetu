// src/components/Navbar.js
// ─────────────────────────────────────────────────────
// Top navigation bar.
// Props:
//   activePage  — "home" | "donors" | "requests"
//   setPage     — function to switch pages
//   requestCount — number shown as badge on Requests tab
// ─────────────────────────────────────────────────────

export default function Navbar({ activePage, setPage, requestCount }) {
  const links = [
    { id: "home",     label: "Home" },
    { id: "donors",   label: "Donors" },
    { id: "requests", label: `Requests ${requestCount > 0 ? `(${requestCount})` : ""}` },
  ];

  return (
    <nav className="navbar">
      {/* Logo — left side */}
      <div className="navbar-logo" onClick={() => setPage("home")}>
        <span>🩸</span> RaktSetu
      </div>

      {/* Nav links — right side */}
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id}>
            <button
              className={activePage === link.id ? "active" : ""}
              onClick={() => setPage(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}