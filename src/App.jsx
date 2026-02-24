// src/App.js
// ─────────────────────────────────────────────────────
// Root component. Controls:
//   • Loading screen (shown for 1s on first render)
//   • Active page routing (home / donors / requests)
//   • Wraps everything in RequestProvider (global state)
// ─────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { RequestProvider, useRequests } from "./context/RequestContext";

import LoadingScreen from "./components/LoadingScreen";
import Navbar        from "./components/Navbar";
import Footer        from "./components/Footer";

import Home     from "./pages/Home";
import Donors   from "./pages/Donors";
import Requests from "./pages/Requests";

// ── Inner app (needs access to RequestContext) ──
function AppContent() {
  const [activePage, setActivePage] = useState("home");
  const [donorCount, setDonorCount] = useState(10);  // updated after fetch

  const { requests } = useRequests();

  // Render the correct page
  function renderPage() {
    if (activePage === "home")     return <Home setPage={setActivePage} totalDonors={donorCount} requestCount={requests.length} />;
    if (activePage === "donors")   return <Donors onCountUpdate={setDonorCount} />;
    if (activePage === "requests") return <Requests />;
  }

  return (
    <div>
      <Navbar
        activePage={activePage}
        setPage={setActivePage}
        requestCount={requests.length}
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

// ── Root App with loading screen ──
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Hide loading screen after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <RequestProvider>
      {isLoading && <LoadingScreen />}
      <AppContent />
    </RequestProvider>
  );
}