import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { FluidWaveBackground } from "./components/common/FluidWaveBackground";

/**
 * Root Application Component with React Router DOM integration
 * Features global 3D Fluid Waves Background with colorful layered aesthetic
 */
function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen text-[#0F172A] selection:bg-[#F04CBF] selection:text-white">
        {/* Global 3D Layered Fluid Waves Background */}
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
