import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { FluidWaveBackground } from "./components/common/FluidWaveBackground";

/**
 * Root Application Component with React Router DOM integration
 * Dark Cinematic identity with Pure Black (#050505), Electric Blue (#1677FF),
 * and Deep Crimson (#B5122A).
 */
function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#1677FF] selection:text-white">
        {/* Global Dark Cinematic Ambient Background */}
        <FluidWaveBackground />

        {/* Translucent Glass Navigation Bar */}
        <Navbar />

        {/* Main Application Routes */}
        <div className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Future pages can be plugged into this router */}
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
