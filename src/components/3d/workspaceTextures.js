import * as THREE from "three";

/**
 * Procedural screen textures for the PR VISION INNOVATIONS 3D Digital Workspace.
 * Strict Dark Cinematic Palette:
 * - Primary Background: Pure Black #050505
 * - Secondary Background: #0A0A0D
 * - Electric Blue Accent: #1677FF / #287BFF
 * - Dark Red / Deep Crimson Accent: #8B0000 / #B5122A
 * - Text: #FFFFFF / #A1A1AA
 */

// 1. Laptop Screen: Realistic PR VISION INNOVATIONS Website Preview
export function createLaptopWebsiteTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");

  // Pure Black Base with subtle dark graphite gradient
  const bg = ctx.createLinearGradient(0, 0, 1024, 640);
  bg.addColorStop(0, "#050505");
  bg.addColorStop(0.5, "#0A0A0D");
  bg.addColorStop(1, "#050505");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1024, 640);

  // Subtle Electric Blue Ambient Sheen
  const glow = ctx.createRadialGradient(512, 180, 20, 512, 180, 480);
  glow.addColorStop(0, "rgba(22, 119, 255, 0.18)");
  glow.addColorStop(0.6, "rgba(181, 18, 42, 0.08)");
  glow.addColorStop(1, "rgba(5, 5, 5, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1024, 640);

  // Top Navigation Bar
  ctx.fillStyle = "rgba(10, 10, 13, 0.9)";
  ctx.fillRect(40, 24, 944, 52);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.strokeRect(40, 24, 944, 52);

  // Brand Logo Mark Pill
  const logoGrad = ctx.createLinearGradient(60, 36, 170, 36);
  logoGrad.addColorStop(0, "#1677FF");
  logoGrad.addColorStop(1, "#B5122A");
  ctx.fillStyle = logoGrad;
  ctx.beginPath();
  ctx.roundRect(60, 36, 110, 28, 7);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("PR VISION", 80, 55);

  // Navigation Links
  const navLinks = ["Services", "Portfolio", "Process", "Studio", "Contact"];
  ctx.fillStyle = "#A1A1AA";
  ctx.font = "500 12px 'Plus Jakarta Sans', sans-serif";
  navLinks.forEach((item, i) => {
    if (i === 0) ctx.fillStyle = "#287BFF";
    else ctx.fillStyle = "#A1A1AA";
    ctx.fillText(item, 380 + i * 95, 55);
  });

  // CTA Button
  ctx.fillStyle = "#1677FF";
  ctx.beginPath();
  ctx.roundRect(875, 36, 90, 28, 7);
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 11px sans-serif";
  ctx.fillText("Get Started", 890, 54);

  // Hero Section Preview
  // Location Pill
  ctx.fillStyle = "rgba(22, 119, 255, 0.12)";
  ctx.strokeStyle = "rgba(22, 119, 255, 0.35)";
  ctx.beginPath();
  ctx.roundRect(60, 110, 240, 24, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#287BFF";
  ctx.font = "bold 10px sans-serif";
  ctx.fillText("★ SANGOLA, MAHARASHTRA • DIGITAL STUDIO", 75, 126);

  // Main Headline
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 38px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Building Digital Experiences That", 60, 175);

  const headGrad = ctx.createLinearGradient(60, 220, 680, 220);
  headGrad.addColorStop(0, "#1677FF");
  headGrad.addColorStop(0.5, "#287BFF");
  headGrad.addColorStop(1, "#B5122A");
  ctx.fillStyle = headGrad;
  ctx.fillText("Move Businesses Forward.", 60, 225);

  // Description
  ctx.fillStyle = "#A1A1AA";
  ctx.font = "15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("We design and develop modern websites and digital solutions that help", 60, 268);
  ctx.fillText("businesses establish a powerful online presence with pure engineering.", 60, 292);

  // CTA Buttons
  ctx.fillStyle = "#1677FF";
  ctx.beginPath();
  ctx.roundRect(60, 330, 150, 42, 9);
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 13px sans-serif";
  ctx.fillText("Explore Our Work →", 80, 356);

  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.beginPath();
  ctx.roundRect(225, 330, 120, 42, 9);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("Let's Talk", 260, 356);

  // Feature Cards Row
  const cards = [
    { title: "React & Next.js", tag: "MODULAR", stat: "100% Tailored", color: "#1677FF" },
    { title: "Full Stack Suite", tag: "SCALABLE", stat: "Fast Delivery", color: "#287BFF" },
    { title: "Mobile Systems", tag: "NATIVE", stat: "iOS & Android", color: "#B5122A" },
  ];

  cards.forEach((card, idx) => {
    const x = 60 + idx * 300;
    const y = 420;
    ctx.fillStyle = "rgba(10, 10, 13, 0.85)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(x, y, 280, 175, 12);
    ctx.fill();
    ctx.stroke();

    // Top border accent
    ctx.fillStyle = card.color;
    ctx.fillRect(x + 20, y, 60, 3);

    ctx.fillStyle = card.color;
    ctx.font = "bold 10px monospace";
    ctx.fillText(card.tag, x + 20, y + 36);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(card.title, x + 20, y + 70);

    ctx.fillStyle = "#A1A1AA";
    ctx.font = "12px sans-serif";
    ctx.fillText(card.stat, x + 20, y + 105);

    // Clean Progress Bar
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fillRect(x + 20, y + 130, 240, 6);
    ctx.fillStyle = card.color;
    ctx.fillRect(x + 20, y + 130, 160 + idx * 35, 6);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 2. Floating Mobile Interface Texture
export function createSmartphoneAppTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Pure Black Background
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, 512, 1024);

  // Top Status Bar
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 16px sans-serif";
  ctx.fillText("09:41", 40, 48);

  ctx.fillStyle = "#287BFF";
  ctx.beginPath();
  ctx.arc(460, 42, 6, 0, Math.PI * 2);
  ctx.fill();

  // App Bar
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 22px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("PR VISION Suite", 40, 110);
  ctx.fillStyle = "#A1A1AA";
  ctx.font = "14px sans-serif";
  ctx.fillText("Live Production Telemetry", 40, 138);

  // Metric Card (Electric Blue border)
  ctx.fillStyle = "#0A0A0D";
  ctx.strokeStyle = "rgba(22, 119, 255, 0.4)";
  ctx.beginPath();
  ctx.roundRect(40, 175, 432, 160, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#287BFF";
  ctx.font = "bold 13px monospace";
  ctx.fillText("SYSTEM PERFORMANCE", 65, 215);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 38px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("99.98%", 65, 268);

  ctx.fillStyle = "#A1A1AA";
  ctx.font = "14px sans-serif";
  ctx.fillText("Latency: 1.2ms • Native 60 FPS", 65, 305);

  // Activity Feed Cards
  const activities = [
    { title: "React Build Pipeline", time: "2m ago", status: "SUCCESS", color: "#1677FF" },
    { title: "Security Node Ping", time: "14m ago", status: "VERIFIED", color: "#287BFF" },
    { title: "API Microservice Deployed", time: "1h ago", status: "ONLINE", color: "#B5122A" },
    { title: "Edge Gateway Synced", time: "3h ago", status: "OPTIMIZED", color: "#1677FF" },
  ];

  activities.forEach((item, idx) => {
    const y = 370 + idx * 110;
    ctx.fillStyle = "#0A0A0D";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(40, y, 432, 90, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(68, y + 45, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(item.title, 90, y + 42);

    ctx.fillStyle = "#A1A1AA";
    ctx.font = "12px sans-serif";
    ctx.fillText(item.time, 90, y + 65);

    ctx.fillStyle = item.color;
    ctx.font = "bold 11px monospace";
    ctx.fillText(item.status, 370, y + 45);
  });

  // Bottom Navigation Bar
  ctx.fillStyle = "#0A0A0D";
  ctx.fillRect(0, 930, 512, 94);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.beginPath();
  ctx.moveTo(0, 930);
  ctx.lineTo(512, 930);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 3. Translucent Analytics Dashboard Texture
export function createDashboardAnalyticsTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");

  // Pure Black Base
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, 1024, 640);

  // Top Header Bar
  ctx.fillStyle = "#0A0A0D";
  ctx.fillRect(30, 25, 964, 55);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.strokeRect(30, 25, 964, 55);

  ctx.fillStyle = "#287BFF";
  ctx.font = "bold 14px monospace";
  ctx.fillText("PR VISION // PRODUCTION TELEMETRY STREAM", 55, 58);

  ctx.fillStyle = "#B5122A";
  ctx.fillRect(860, 40, 110, 26);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 11px monospace";
  ctx.fillText("LIVE METRICS", 878, 57);

  // KPI Boxes
  const kpis = [
    { label: "UPTIME", val: "99.98%", sub: "High Reliability", col: "#1677FF" },
    { label: "REQUESTS", val: "2.4M", sub: "Daily Volume", col: "#287BFF" },
    { label: "RESP TIME", val: "1.2ms", sub: "Edge Optimized", col: "#B5122A" },
  ];

  kpis.forEach((k, idx) => {
    const x = 30 + idx * 328;
    ctx.fillStyle = "#0A0A0D";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(x, 105, 308, 125, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = k.col;
    ctx.fillRect(x + 20, 105, 45, 3);

    ctx.fillStyle = "#A1A1AA";
    ctx.font = "bold 11px monospace";
    ctx.fillText(k.label, x + 20, 138);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(k.val, x + 20, 185);

    ctx.fillStyle = "#A1A1AA";
    ctx.font = "11px sans-serif";
    ctx.fillText(k.sub, x + 20, 210);
  });

  // Chart Container
  ctx.fillStyle = "#0A0A0D";
  ctx.strokeStyle = "rgba(22, 119, 255, 0.25)";
  ctx.beginPath();
  ctx.roundRect(30, 255, 964, 355, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Real-Time Application Throughput", 60, 295);

  // Spline Chart Line (Electric Blue)
  ctx.beginPath();
  ctx.strokeStyle = "#1677FF";
  ctx.lineWidth = 3;
  ctx.moveTo(60, 520);
  ctx.bezierCurveTo(200, 480, 300, 380, 450, 420);
  ctx.bezierCurveTo(600, 460, 750, 330, 960, 360);
  ctx.stroke();

  // Secondary Crimson Spline Line
  ctx.beginPath();
  ctx.strokeStyle = "#B5122A";
  ctx.lineWidth = 2;
  ctx.moveTo(60, 560);
  ctx.bezierCurveTo(200, 530, 350, 460, 500, 490);
  ctx.bezierCurveTo(650, 520, 800, 410, 960, 430);
  ctx.stroke();

  // Data Dots
  [
    { x: 450, y: 420 },
    { x: 960, y: 360 },
  ].forEach((pt) => {
    ctx.fillStyle = "#287BFF";
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 4. Subtle Glass UI Design Panel Texture
export function createDesignCanvasTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");

  // Pure Black Base
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, 1024, 640);

  // Top Design Bar
  ctx.fillStyle = "#0A0A0D";
  ctx.fillRect(30, 25, 964, 50);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.strokeRect(30, 25, 964, 50);

  ctx.fillStyle = "#287BFF";
  ctx.font = "bold 13px monospace";
  ctx.fillText("FIGMA DESIGN SYSTEM // TOKENS & WIREFRAMES", 55, 56);

  // Wireframe Panels
  const wireframes = [
    { title: "Hero Ecosystem Component", color: "#1677FF" },
    { title: "Mobile Navigation Architecture", color: "#287BFF" },
    { title: "Analytics Stream Layer", color: "#B5122A" },
  ];

  wireframes.forEach((wf, idx) => {
    const x = 30 + idx * 328;
    ctx.fillStyle = "#0A0A0D";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(x, 100, 308, 420, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = wf.color;
    ctx.fillRect(x + 20, 100, 50, 3);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(wf.title, x + 20, 135);

    // Mock UI blocks
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(x + 20, 160, 268, 120);

    ctx.fillStyle = "rgba(22, 119, 255, 0.15)";
    ctx.fillRect(x + 20, 300, 120, 24);

    ctx.fillStyle = "rgba(181, 18, 42, 0.15)";
    ctx.fillRect(x + 155, 300, 133, 24);

    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(x + 20, 340, 268, 60);

    ctx.fillStyle = "#A1A1AA";
    ctx.font = "11px monospace";
    ctx.fillText("TOKEN: 100% PRODUCTION READY", x + 20, 480);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}
