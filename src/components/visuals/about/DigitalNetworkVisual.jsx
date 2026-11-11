import React from "react";
import { ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

/**
 * Studio Engineering Standards Showcase
 * Strictly styled in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 */
export function DigitalNetworkVisual() {
  const metrics = [
    { label: "Architecture", val: "React 19 & Vite", desc: "Modular, high-performance web systems", icon: Zap },
    { label: "Engineering Standard", val: "Lighthouse 100", desc: "Top-tier speed, SEO & accessibility", icon: ShieldCheck },
    { label: "Craftsmanship", val: "Clean Code", desc: "Bespoke styling with zero bloat", icon: Layers },
    { label: "Transparency", val: "Direct Engineer Access", desc: "No middle layers or bureaucracy", icon: Sparkles },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-[#393F4B]/10 shadow-xs p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#393F4B]/10 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#910029]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#393F4B] font-mono">
            Studio Engineering Standards
          </span>
        </div>
        <span className="text-xs text-[#910029] font-mono font-semibold">
          Sangola Studio • Global Quality
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="flex flex-col gap-1.5 p-4 rounded-xl bg-[#ECF4F7] border border-[#393F4B]/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#910029]">
                <Icon className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
                <span>{m.label}</span>
              </div>
              <div className="text-base font-bold text-[#393F4B] mt-1">{m.val}</div>
              <div className="text-xs text-[#393F4B]/70">{m.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DigitalNetworkVisual;
