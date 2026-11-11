import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { FluidWaveBackground } from "./components/common/FluidWaveBackground";

/**
 * Root Application Component with React Router DOM integration
 * Sophisticated Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029) visual identity.
 */
function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-[#ECF4F7] text-[#393F4B] selection:bg-[#910029] selection:text-[#ECF4F7]">
        {/* Clean Minimal Background */}
        <FluidWaveBackground />

        {/* Clean Ice-Glass Navigation Bar */}
        <Navbar />

        {/* Main Application Routes */}
        <div className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
