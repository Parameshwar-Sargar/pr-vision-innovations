import * as THREE from "three";

/**
 * Procedural screen textures for the PR VISION INNOVATIONS 3D Digital Workspace.
 * Colors: Royal Purple (#7B2CBF), Crimson Red (#D90429), Golden Yellow (#FFD166), Orange (#FB8500), Deep Plum (#3D0066).
 * No black or navy blue as dominant backgrounds!
 */

// 1. Laptop Screen: Realistic PR VISION INNOVATIONS Website Preview
export function createLaptopWebsiteTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");

  // Deep Plum to Royal Purple Background
  const bg = ctx.createLinearGradient(0, 0, 1024, 640);
  bg.addColorStop(0, "#2D0A4E"); // Deep Plum
  bg.addColorStop(0.5, "#420F6B"); // Royal Purple
  bg.addColorStop(1, "#1F0538"); // Rich Dark Plum
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1024, 640);

  // Subtle fluid glow in the background
  const glow = ctx.createRadialGradient(512, 220, 20, 512, 220, 420);
  glow.addColorStop(0, "rgba(217, 4, 41, 0.28)"); // Crimson
  glow.addColorStop(0.5, "rgba(251, 133, 0, 0.15)"); // Orange
  glow.addColorStop(1, "rgba(45, 10, 78, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1024, 640);

  // Top Navigation Bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.fillRect(40, 24, 944, 52);
  ctx.strokeStyle = "rgba(255, 209, 102, 0.25)";
  ctx.lineWidth = 1;
  ctx.strokeRect(40, 24, 944, 52);

  // Brand Logo Mark Pill
  const logoGrad = ctx.createLinearGradient(60, 36, 170, 36);
  logoGrad.addColorStop(0, "#D90429"); // Crimson
  logoGrad.addColorStop(0.5, "#FB8500"); // Orange
  logoGrad.addColorStop(1, "#FFD166"); // Golden Yellow
  ctx.fillStyle = logoGrad;
  ctx.beginPath();
  ctx.roundRect(60, 36, 110, 28, 7);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("PR VISION", 80, 55);

  // Navigation Links
  const navLinks = ["Services", "Portfolio", "Process", "Studio", "Contact"];
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "500 12px 'Plus Jakarta Sans', sans-serif";
  navLinks.forEach((item, i) => {
    ctx.fillText(item, 380 + i * 95, 55);
  });

  // CTA Button
  const btnGrad = ctx.createLinearGradient(875, 36, 965, 36);
  btnGrad.addColorStop(0, "#D90429");
  btnGrad.addColorStop(1, "#FB8500");
  ctx.fillStyle = btnGrad;
  ctx.beginPath();
  ctx.roundRect(875, 36, 90, 28, 7);
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 11px sans-serif";
  ctx.fillText("Get Started", 890, 54);

  // Hero Headline Section
  // Location Pill
  ctx.fillStyle = "rgba(255, 209, 102, 0.15)";
  ctx.strokeStyle = "rgba(255, 209, 102, 0.4)";
  ctx.beginPath();
  ctx.roundRect(60, 110, 240, 24, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#FFD166";
  ctx.font = "bold 10px sans-serif";
  ctx.fillText("★ SANGOLA, MAHARASHTRA • DIGITAL STUDIO", 75, 126);

  // Main Headline
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 38px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Building Digital Experiences That", 60, 175);

  const headGrad = ctx.createLinearGradient(60, 220, 680, 220);
  headGrad.addColorStop(0, "#FFD166"); // Golden Yellow
  headGrad.addColorStop(0.4, "#FB8500"); // Orange
  headGrad.addColorStop(0.8, "#D90429"); // Crimson Red
  headGrad.addColorStop(1, "#A81E80"); // Plum
  ctx.fillStyle = headGrad;
  ctx.fillText("Move Businesses Forward.", 60, 225);

  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  ctx.font = "15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Empowering enterprises with bespoke web architecture, interactive 3D, and cloud systems.", 60, 265);

  // 3 Digital Architecture Feature Cards
  const cards = [
    { title: "React & Next.js", desc: "Modular, sub-second hydration", tag: "Full Stack", color: "#FFD166" },
    { title: "Mobile & Hybrid", desc: "Cross-platform iOS & Android", tag: "Mobile Apps", color: "#FB8500" },
    { title: "3D Spatial WebGL", desc: "Fluid 60 FPS studio visuals", tag: "Creative Tech", color: "#D90429" },
  ];

  cards.forEach((c, idx) => {
    const x = 60 + idx * 315;
    const y = 310;

    // Card Glass Container
    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(x, y, 290, 270, 18);
    ctx.fill();
    ctx.stroke();

    // Color Accent Strip
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.roundRect(x + 20, y + 25, 45, 6, 3);
    ctx.fill();

    // Card Title
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(c.title, x + 20, y + 68);

    // Card Desc
    ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
    ctx.font = "13px sans-serif";
    ctx.fillText(c.desc, x + 20, y + 96);

    // Graphic Chart Simulation inside card
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.beginPath();
    ctx.roundRect(x + 20, y + 120, 250, 85, 12);
    ctx.fill();

    // Draw mini bars
    ctx.fillStyle = c.color;
    for (let b = 0; b < 7; b++) {
      const bh = 15 + ((b * 14 + idx * 8) % 52);
      ctx.fillRect(x + 36 + b * 32, y + 190 - bh, 18, bh);
    }

    // Tag badge
    ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
    ctx.beginPath();
    ctx.roundRect(x + 20, y + 225, 95, 24, 6);
    ctx.fill();
    ctx.fillStyle = c.color;
    ctx.font = "bold 11px sans-serif";
    ctx.fillText(c.tag, x + 30, y + 241);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 2. Browser Window: Modern Business Website Preview
export function createBrowserWebsiteTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 540;
  const ctx = canvas.getContext("2d");

  // Deep Plum / Royal Purple Canvas
  const bg = ctx.createLinearGradient(0, 0, 800, 540);
  bg.addColorStop(0, "#380D5E");
  bg.addColorStop(1, "#1E0638");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 800, 540);

  // Chrome Header
  ctx.fillStyle = "#250840";
  ctx.fillRect(0, 0, 800, 56);

  // Traffic Light Buttons
  ctx.fillStyle = "#D90429"; // Crimson
  ctx.beginPath();
  ctx.arc(32, 28, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FFD166"; // Yellow
  ctx.beginPath();
  ctx.arc(54, 28, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FB8500"; // Orange
  ctx.beginPath();
  ctx.arc(76, 28, 7, 0, Math.PI * 2);
  ctx.fill();

  // Search URL Bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.beginPath();
  ctx.roundRect(115, 14, 570, 28, 14);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 209, 102, 0.9)";
  ctx.font = "12px font-mono";
  ctx.fillText("🔒 https://prvision.in/enterprise-solutions", 135, 33);

  // Website Hero Section
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 26px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Enterprise Digital Solutions", 45, 115);

  ctx.fillStyle = "#FFD166";
  ctx.font = "14px sans-serif";
  ctx.fillText("Powering Global Brands from Sangola, Maharashtra", 45, 145);

  // Two Column Grid Layout
  // Left column: Metric KPI
  ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
  ctx.strokeStyle = "rgba(217, 4, 41, 0.35)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(45, 175, 330, 310, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "13px sans-serif";
  ctx.fillText("Quarterly Transactions", 70, 215);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 36px sans-serif";
  ctx.fillText("$3,842,900", 70, 265);

  ctx.fillStyle = "#FFD166";
  ctx.font = "bold 14px sans-serif";
  ctx.fillText("↑ +38.6% Conversion Rate", 70, 305);

  // Visual wave inside card
  ctx.beginPath();
  ctx.moveTo(70, 420);
  ctx.bezierCurveTo(150, 350, 230, 440, 340, 360);
  ctx.strokeStyle = "#FB8500";
  ctx.lineWidth = 3.5;
  ctx.stroke();

  // Right column: Service Modules
  ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
  ctx.strokeStyle = "rgba(255, 209, 102, 0.35)";
  ctx.beginPath();
  ctx.roundRect(405, 175, 350, 310, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 16px sans-serif";
  ctx.fillText("Active Systems Architecture", 430, 215);

  const modules = [
    { name: "Next.js 15 SSR Gateway", status: "100% Uptime", col: "#FFD166" },
    { name: "PostgreSQL Multi-Region", status: "14ms Latency", col: "#FB8500" },
    { name: "Cloudflare Edge Cache", status: "Global CDN", col: "#D90429" },
  ];

  modules.forEach((m, idx) => {
    const my = 245 + idx * 75;
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.beginPath();
    ctx.roundRect(430, my, 300, 60, 10);
    ctx.fill();

    ctx.fillStyle = m.col;
    ctx.beginPath();
    ctx.arc(450, my + 30, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(m.name, 470, my + 28);

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "11px sans-serif";
    ctx.fillText(m.status, 470, my + 46);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 3. Smartphone: Modern Mobile Application Interface
export function createSmartphoneAppTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Deep Plum / Royal Purple Wallpaper
  const bg = ctx.createLinearGradient(0, 0, 512, 1024);
  bg.addColorStop(0, "#280644");
  bg.addColorStop(0.5, "#420F6B");
  bg.addColorStop(1, "#18032E");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 1024);

  // Status Bar
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 20px sans-serif";
  ctx.fillText("9:41", 45, 52);
  ctx.font = "14px sans-serif";
  ctx.fillText("5G  100%", 410, 52);

  // Dynamic Island Notch
  ctx.fillStyle = "#0A0014";
  ctx.beginPath();
  ctx.roundRect(176, 28, 160, 36, 18);
  ctx.fill();

  // App Title Header
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 26px sans-serif";
  ctx.fillText("PR Vision Hub", 40, 135);

  ctx.fillStyle = "#FFD166";
  ctx.font = "14px sans-serif";
  ctx.fillText("Mobile Experience Portal", 40, 168);

  // Primary Gradient Card
  const cardGrad = ctx.createLinearGradient(40, 200, 472, 380);
  cardGrad.addColorStop(0, "#D90429"); // Crimson
  cardGrad.addColorStop(0.5, "#FB8500"); // Orange
  cardGrad.addColorStop(1, "#7B2CBF"); // Royal Purple
  ctx.fillStyle = cardGrad;
  ctx.beginPath();
  ctx.roundRect(40, 200, 432, 220, 24);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "15px sans-serif";
  ctx.fillText("Active Client Project Value", 70, 248);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 44px sans-serif";
  ctx.fillText("$92,450.00", 70, 310);

  ctx.fillStyle = "#FFD166";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText("↑ +24.8% Monthly ROI", 70, 365);

  // 3 Action Buttons
  const actions = ["Deploy", "Analytics", "Security"];
  actions.forEach((act, idx) => {
    const x = 40 + idx * 150;
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.roundRect(x, 455, 132, 85, 18);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(act, x + 35, 505);
  });

  // Recent Activity Feed
  const feeds = [
    { title: "React 19 Frontend Deployed", sub: "Production • 2m ago", color: "#FFD166" },
    { title: "Mobile Flutter Build V2", sub: "iOS & Android • 12m ago", color: "#FB8500" },
    { title: "Automated Cloud Backup", sub: "Encrypted AES-256 • 1h ago", color: "#D90429" },
  ];

  feeds.forEach((f, idx) => {
    const y = 570 + idx * 105;
    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
    ctx.beginPath();
    ctx.roundRect(40, y, 432, 85, 18);
    ctx.fill();

    ctx.fillStyle = f.color;
    ctx.beginPath();
    ctx.arc(75, y + 42, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText(f.title, 105, y + 40);

    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.font = "13px sans-serif";
    ctx.fillText(f.sub, 105, y + 65);
  });

  // Bottom Navigation Bar
  ctx.fillStyle = "rgba(30, 5, 55, 0.95)";
  ctx.fillRect(0, 920, 512, 104);

  // Home indicator
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.beginPath();
  ctx.roundRect(176, 990, 160, 6, 3);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 4. Dashboard: Professional Analytics Dashboard Panel
export function createDashboardAnalyticsTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Deep Plum to Royal Purple Background
  const bg = ctx.createLinearGradient(0, 0, 768, 512);
  bg.addColorStop(0, "#360A5A");
  bg.addColorStop(1, "#1E0434");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 768, 512);

  // Header Bar
  ctx.fillStyle = "#25063E";
  ctx.fillRect(0, 0, 768, 58);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Telemetry Analytics Dashboard", 35, 36);

  ctx.fillStyle = "#FFD166";
  ctx.beginPath();
  ctx.arc(690, 29, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "12px sans-serif";
  ctx.fillText("Live Stream", 705, 34);

  // 3 Metric Stat Cards
  const stats = [
    { label: "Active Users", val: "142,800", chg: "+18.4%", color: "#FFD166" },
    { label: "Throughput", val: "1.8 GB/s", chg: "+34.2%", color: "#FB8500" },
    { label: "Uptime Health", val: "99.99%", chg: "Tier 4", color: "#D90429" },
  ];

  stats.forEach((st, idx) => {
    const x = 35 + idx * 235;
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, 80, 220, 105, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
    ctx.font = "12px sans-serif";
    ctx.fillText(st.label, x + 18, 110);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText(st.val, x + 18, 145);

    ctx.fillStyle = st.color;
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(st.chg, x + 18, 172);
  });

  // Large Smooth Area Spline Chart
  const chartX = 35;
  const chartY = 210;
  const chartW = 698;
  const chartH = 270;

  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctx.beginPath();
  ctx.roundRect(chartX, chartY, chartW, chartH, 16);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 14px sans-serif";
  ctx.fillText("Network Requests & API Invocations (24h)", chartX + 25, chartY + 35);

  // Spline Fill
  ctx.beginPath();
  ctx.moveTo(chartX + 25, chartY + 230);
  ctx.bezierCurveTo(chartX + 160, chartY + 110, chartX + 280, chartY + 190, chartX + 410, chartY + 90);
  ctx.bezierCurveTo(chartX + 510, chartY + 140, chartX + 600, chartY + 70, chartX + 675, chartY + 80);
  ctx.lineTo(chartX + 675, chartY + 250);
  ctx.lineTo(chartX + 25, chartY + 250);
  ctx.closePath();

  const chartGrad = ctx.createLinearGradient(0, chartY + 70, 0, chartY + 250);
  chartGrad.addColorStop(0, "rgba(251, 133, 0, 0.45)"); // Orange
  chartGrad.addColorStop(0.6, "rgba(217, 4, 41, 0.2)"); // Crimson
  chartGrad.addColorStop(1, "rgba(40, 6, 68, 0)");
  ctx.fillStyle = chartGrad;
  ctx.fill();

  // Spline Line Stroke
  ctx.beginPath();
  ctx.moveTo(chartX + 25, chartY + 230);
  ctx.bezierCurveTo(chartX + 160, chartY + 110, chartX + 280, chartY + 190, chartX + 410, chartY + 90);
  ctx.bezierCurveTo(chartX + 510, chartY + 140, chartX + 600, chartY + 70, chartX + 675, chartY + 80);
  ctx.strokeStyle = "#FFD166";
  ctx.lineWidth = 3.5;
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 5. Code Editor Window: Syntax-Highlighted Code
export function createCodeEditorTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 440;
  const ctx = canvas.getContext("2d");

  // Code editor Dark Plum background
  ctx.fillStyle = "#200438";
  ctx.fillRect(0, 0, 640, 440);

  // Window Top Bar
  ctx.fillStyle = "#2D074E";
  ctx.fillRect(0, 0, 640, 42);

  // 3 Window Buttons
  ctx.fillStyle = "#D90429";
  ctx.beginPath();
  ctx.arc(22, 21, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FFD166";
  ctx.beginPath();
  ctx.arc(40, 21, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FB8500";
  ctx.beginPath();
  ctx.arc(58, 21, 6, 0, Math.PI * 2);
  ctx.fill();

  // Tab Title
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.beginPath();
  ctx.roundRect(85, 8, 160, 28, 6);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 12px font-mono";
  ctx.fillText("HeroWorkspace.jsx", 100, 26);

  // Syntax-Highlighted Lines
  const codeLines = [
    { num: "01", text: "import React, { useState } from 'react';", color: "#FFD166" },
    { num: "02", text: "import { Canvas } from '@react-three/fiber';", color: "#FB8500" },
    { num: "03", text: "import { PRVisionStudio } from './studio';", color: "#D90429" },
    { num: "04", text: "", color: "#FFFFFF" },
    { num: "05", text: "export function DigitalWorkspace() {", color: "#FFFFFF" },
    { num: "06", text: "  const [experience, setExperience] = useState({", color: "#FFD166" },
    { num: "07", text: "    fps: 60, fidelity: 'ultra-premium',", color: "#FB8500" },
    { num: "08", text: "    studio: 'PR VISION INNOVATIONS'", color: "#FFD166" },
    { num: "09", text: "  });", color: "#FFFFFF" },
    { num: "10", text: "", color: "#FFFFFF" },
    { num: "11", text: "  return <StudioEcosystem {...experience} />;", color: "#D90429" },
    { num: "12", text: "}", color: "#FFFFFF" },
  ];

  ctx.font = "13px font-mono";
  codeLines.forEach((cl, idx) => {
    const y = 75 + idx * 26;
    // Line number
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
    ctx.fillText(cl.num, 20, y);

    // Code text
    ctx.fillStyle = cl.color;
    ctx.fillText(cl.text, 55, y);
  });

  // Editor bottom status bar
  ctx.fillStyle = "#2D074E";
  ctx.fillRect(0, 410, 640, 30);
  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.font = "11px font-mono";
  ctx.fillText("UTF-8   JavaScript React   ✓ 0 errors", 20, 428);

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  return texture;
}

// 6. Design Canvas: UI/UX Layouts & Color Swatches
export function createDesignCanvasTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 440;
  const ctx = canvas.getContext("2d");

  // Deep Plum / Royal Purple Canvas
  const bg = ctx.createLinearGradient(0, 0, 640, 440);
  bg.addColorStop(0, "#2B0748");
  bg.addColorStop(1, "#18032E");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 640, 440);

  // Top Design Toolbar
  ctx.fillStyle = "#380D5E";
  ctx.fillRect(0, 0, 640, 44);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 13px sans-serif";
  ctx.fillText("Design Tokens & UI Canvas", 25, 27);

  // Brand Color Palette Swatches at top right
  const palette = [
    { name: "Royal Purple", col: "#7B2CBF" },
    { name: "Crimson Red", col: "#D90429" },
    { name: "Golden Yellow", col: "#FFD166" },
    { name: "Orange", col: "#FB8500" },
    { name: "Deep Plum", col: "#4A0E4E" },
  ];

  palette.forEach((p, idx) => {
    ctx.fillStyle = p.col;
    ctx.beginPath();
    ctx.arc(430 + idx * 38, 22, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Floating Design Frame 1
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.strokeStyle = "rgba(217, 4, 41, 0.4)";
  ctx.beginPath();
  ctx.roundRect(25, 65, 280, 340, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 14px sans-serif";
  ctx.fillText("Component: StudioHero", 45, 95);

  ctx.fillStyle = "#D90429";
  ctx.fillRect(45, 115, 60, 4);

  // Wireframe UI elements
  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctx.beginPath();
  ctx.roundRect(45, 140, 240, 90, 10);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 209, 102, 0.2)";
  ctx.beginPath();
  ctx.roundRect(45, 250, 115, 45, 8);
  ctx.fill();
  ctx.fillStyle = "#FFD166";
  ctx.font = "bold 12px sans-serif";
  ctx.fillText("Button Primary", 55, 278);

  ctx.fillStyle = "rgba(251, 133, 0, 0.2)";
  ctx.beginPath();
  ctx.roundRect(170, 250, 115, 45, 8);
  ctx.fill();
  ctx.fillStyle = "#FB8500";
  ctx.font = "bold 12px sans-serif";
  ctx.fillText("Button Secondary", 175, 278);

  // Floating Design Frame 2
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.strokeStyle = "rgba(255, 209, 102, 0.4)";
  ctx.beginPath();
  ctx.roundRect(330, 65, 285, 340, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 14px sans-serif";
  ctx.fillText("Layout: Grid 12-Column", 350, 95);

  ctx.fillStyle = "#FFD166";
  ctx.fillRect(350, 115, 60, 4);

  // 4 Grid Column Previews
  for (let c = 0; c < 4; c++) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.roundRect(350 + c * 62, 140, 50, 240, 8);
    ctx.fill();
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  return texture;
}

