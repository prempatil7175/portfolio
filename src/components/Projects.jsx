import React, { useState } from 'react';
import { ArrowUpRightIcon, ZapIcon, SettingsIcon, CpuIcon } from './Icons';

// Bespoke Industrial Technical Schematic SVG Components
const TurbineSchematic = () => (
  <svg className="w-full h-full text-white/30 group-hover:text-[#E50914] transition-colors duration-500" viewBox="0 0 320 180" fill="none" stroke="currentColor">
    {/* Grid & Reference Lines */}
    <path d="M10 90h300M160 10v160" strokeWidth="0.5" strokeDasharray="4 4" stroke="currentColor" opacity="0.4" />
    <circle cx="160" cy="90" r="65" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    
    {/* Turbine Casing */}
    <path d="M60 45h200l-30 90H90L60 45z" strokeWidth="1.5" />
    <rect x="135" y="25" width="50" height="20" strokeWidth="1" />
    <line x1="160" y1="20" x2="160" y2="25" strokeWidth="1.5" />
    
    {/* High Pressure Blades Rotor */}
    <circle cx="120" cy="90" r="28" strokeWidth="1.2" />
    <path d="M120 62v56M92 90h56M100 70l40 40M100 110l40-40" strokeWidth="1" />
    
    {/* Low Pressure Blades Rotor */}
    <circle cx="200" cy="90" r="38" strokeWidth="1.2" />
    <path d="M200 52v76M162 90h76M173 63l54 54M173 117l54-54" strokeWidth="1" />
    
    {/* Generator Shaft & Output */}
    <rect x="230" y="80" width="60" height="20" strokeWidth="1.5" fill="#141414" />
    <text x="245" y="94" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">GEN 28MW</text>
    
    {/* Left Steam Input */}
    <path d="M30 90h30" strokeWidth="2" markerEnd="url(#arrow)" />
    <text x="25" y="80" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">STEAM IN</text>
    
    {/* Telemetry Labels */}
    <text x="20" y="165" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">[SIEMENS DUAL 28MW + 18MW]</text>
    <text x="220" y="165" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">50Hz // 11kV</text>
  </svg>
);

const AutomationSchematic = () => (
  <svg className="w-full h-full text-white/30 group-hover:text-[#E50914] transition-colors duration-500" viewBox="0 0 320 180" fill="none" stroke="currentColor">
    {/* SCADA / Bus Network Loop */}
    <rect x="25" y="25" width="270" height="130" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
    
    {/* S7-300 PLC Rack */}
    <rect x="40" y="45" width="90" height="70" strokeWidth="1.5" fill="#141414" />
    <line x1="70" y1="45" x2="70" y2="115" strokeWidth="1" />
    <line x1="100" y1="45" x2="100" y2="115" strokeWidth="1" />
    <circle cx="55" cy="58" r="2" fill="currentColor" />
    <circle cx="55" cy="66" r="2" fill="currentColor" />
    <circle cx="55" cy="74" r="2" fill="currentColor" />
    <text x="45" y="105" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">S7-300 CPU</text>

    {/* Profibus Communication Line */}
    <path d="M130 80h40" strokeWidth="2" strokeDasharray="2 2" />
    <text x="132" y="73" fill="currentColor" fontSize="6" fontFamily="monospace" stroke="none">PROFIBUS</text>

    {/* ABB ACS-800 Drive */}
    <rect x="170" y="40" width="110" height="80" strokeWidth="1.5" fill="#141414" />
    {/* Inverter Bridge Symbol */}
    <polygon points="190,60 215,60 202,80" strokeWidth="1" />
    <polygon points="215,100 190,100 202,80" strokeWidth="1" />
    <text x="225" y="70" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">ABB ACS800</text>
    <text x="225" y="85" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">DTC DRIVE</text>
    <text x="225" y="100" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">SYNC MOTOR</text>

    {/* Waveform graphic */}
    <path d="M40 145 q15 -15 30 0 t30 0 t30 0 t30 0 t30 0" strokeWidth="1.2" />
    <text x="200" y="150" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">[WINCC SCADA LIVE]</text>
  </svg>
);

const ChemicalPlantSchematic = () => (
  <svg className="w-full h-full text-white/30 group-hover:text-[#E50914] transition-colors duration-500" viewBox="0 0 320 180" fill="none" stroke="currentColor">
    {/* Chemical Reaction Vessel */}
    <path d="M80 40h70v70c0 19-16 35-35 35s-35-16-35-35V40z" strokeWidth="1.5" fill="#141414" />
    {/* Impeller Shaft */}
    <line x1="115" y1="20" x2="115" y2="120" strokeWidth="1.5" />
    <path d="M95 120h40M100 130h30" strokeWidth="1.5" />
    {/* Flameproof Motor on Top */}
    <rect x="100" y="12" width="30" height="22" strokeWidth="1.5" fill="#141414" />
    <text x="104" y="26" fill="currentColor" fontSize="6" fontFamily="monospace" stroke="none">Ex-d</text>

    {/* Piping & Safety Interlocks */}
    <path d="M150 70h40v45h40" strokeWidth="1.5" />
    {/* Control Valve Symbol */}
    <polygon points="175,65 185,75 175,75 185,65" strokeWidth="1" />
    
    {/* Hazardous Zone Enclosure */}
    <rect x="230" y="90" width="70" height="55" strokeWidth="1" strokeDasharray="3 3" />
    <text x="235" y="110" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">ZONE-1 Ex</text>
    <text x="235" y="125" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">NANOFIBER</text>
    <text x="235" y="138" fill="currentColor" fontSize="6" fontFamily="monospace" stroke="none">INTERLOCK OK</text>

    {/* Base Reference */}
    <line x1="20" y1="160" x2="300" y2="160" strokeWidth="0.8" />
    <text x="25" y="172" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">[SPCC CHEMICAL ERECTION & COMMISSIONING]</text>
  </svg>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Mill Expansion Project",
      timeline: "2019 - 2022",
      role: "Lead Electrical Project Engineer",
      scope: "Installation of Siemens Turbines (28MW & 18MW), Board Machine-5, and Pulp Mill.",
      details: [
        "Full installation, protective relay coordination, and synchronization of 28MW & 18MW dual Siemens power generation steam turbines.",
        "Erection, testing, and commissioning of high-speed state-of-the-art Board Machine-5 (BM-5).",
        "Pulp Mill integration with central DCS & SCADA power automation.",
        "Engineered protective relaying, HT/LT substation switchgear, and uninterrupted grid distribution."
      ],
      tags: ["Siemens Turbines (46MW)", "Board Machine-5", "Pulp Mill", "Substation 66kV", "DCS / SCADA"],
      category: "POWER & EXPANSION",
      icon: ZapIcon,
      Schematic: TurbineSchematic
    },
    {
      id: "02",
      title: "Automation & Drive Systems",
      timeline: "Continuous Modernization",
      role: "Lead Automation & Controls Engineer",
      scope: "Upgraded stock preparation with Siemens S7-300 PLC, WinCC SCADA, and ABB ACS-800 drives.",
      details: [
        "Modernized entire stock preparation line from legacy relays to coordinated Siemens S7-300 PLC architecture.",
        "Designed centralized WinCC SCADA visualization for live recipe control, batching, and energy logging.",
        "Integrated multi-motor synchronized ABB ACS-800 variable frequency drive suites for precision speed holding.",
        "Achieved 18% improvement in line throughput with zero unscheduled drive trips."
      ],
      tags: ["Siemens S7-300", "WinCC SCADA", "ABB ACS-800 Drives", "Stock Prep", "Process Control"],
      category: "AUTOMATION & DRIVES",
      icon: CpuIcon,
      Schematic: AutomationSchematic
    },
    {
      id: "03",
      title: "SPCC (Nanofiber) Plant",
      timeline: "Erection & Commissioning",
      role: "Electrical Lead Engineer",
      scope: "Electrical lead for the erection and commissioning of the Chemical Plant.",
      details: [
        "Head of electrical engineering for chemical process erection, specialized hazardous-area cabling, and safety interlocking.",
        "Commissioned flame-proof motors, hazardous-area control panels, and fail-safe instrumentation loops.",
        "Led inter-departmental contractor groups, commissioning schedules, and factory acceptance tests (FAT/SAT).",
        "Completed commissioning with 100% adherence to corporate safety mandates and zero recordable incidents."
      ],
      tags: ["Nanofiber Plant", "Hazardous Area Zone-1", "Erection & Commissioning", "Chemical Processing", "Process Safety"],
      category: "CHEMICAL & COMMISSIONING",
      icon: SettingsIcon,
      Schematic: ChemicalPlantSchematic
    }
  ];

  return (
    <section id="projects" className="py-28 bg-[#090909] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Section Subheader & Code */}
        <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#E50914] mb-3">
          <span className="w-8 h-[1px] bg-[#E50914]" />
          <span>02 // MAJOR PROJECT EXECUTION</span>
        </div>

        {/* Giant Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222] pb-8">
          <div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase text-white leading-none">
              FROM RAW. <br />
              <span className="text-[#E50914] hover:text-white transition-colors">TO REAL.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#A0A0A0] text-sm sm:text-base font-body">
            High-voltage infrastructure, heavy industrial drive systems, and multi-megawatt generation units built for non-stop industrial endurance.
          </p>
        </div>

        {/* 3-Column Visual Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((proj) => {
            const Icon = proj.icon;
            const SchematicComponent = proj.Schematic;
            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group interactive-element relative bg-[#111111] border border-[#222222] hover:border-[#E50914] transition-all duration-300 flex flex-col justify-between p-7 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.25)]"
              >
                {/* Top Corner Bracket Accent */}
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-[#E50914] transition-colors" />
                
                {/* Dark Visual Placeholder with Technical Blueprint SVG */}
                <div className="relative h-52 w-full bg-[#151515] border border-white/5 mb-6 overflow-hidden flex items-center justify-center p-3">
                  {/* Subtle Grid / Technical Lines inside preview */}
                  <div className="absolute inset-0 bg-dot-pattern opacity-30 group-hover:opacity-50 transition-opacity" />
                  
                  {/* Technical Blueprint SVG */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <SchematicComponent />
                  </div>

                  {/* Red Gradient Flare on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E50914]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Timeline Badge in Top-Left */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-white/10 font-mono-tech text-[10px] text-white">
                    {proj.timeline}
                  </div>

                  {/* Project ID */}
                  <div className="absolute bottom-2 right-3 font-heading text-2xl font-bold text-white/20 group-hover:text-[#E50914] transition-colors pointer-events-none">
                    {proj.id}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-mono-tech text-[10px] text-[#E50914] uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{proj.category}</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E50914] transition-colors leading-tight mb-3 uppercase">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6 font-body">
                      {proj.scope}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono-tech text-[#A0A0A0] uppercase group-hover:border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Action Link */}
                    <div className="flex items-center justify-between text-xs font-mono-tech text-white group-hover:text-[#E50914] pt-2">
                      <span className="tracking-widest uppercase">EXPLORE SCHEMATICS</span>
                      <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-2xl w-full bg-[#111111] border-2 border-[#E50914] p-6 sm:p-8 shadow-[0_0_50px_rgba(229,9,20,0.4)] max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="font-mono-tech text-xs text-[#E50914] tracking-widest uppercase">
                  PROJECT SPECIFICATION // {selectedProject.id}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase mt-1">
                  {selectedProject.title}
                </h3>
                <span className="font-mono-tech text-xs text-[#A0A0A0] block mt-1">
                  {selectedProject.timeline} • {selectedProject.role}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-[#E50914] font-mono-tech text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono-tech text-xs text-[#A0A0A0] uppercase tracking-wider mb-2">
                  PRIMARY OBJECTIVE:
                </h4>
                <p className="text-white text-base font-body bg-[#181818] p-4 border-l-2 border-[#E50914]">
                  {selectedProject.scope}
                </p>
              </div>

              <div>
                <h4 className="font-mono-tech text-xs text-[#A0A0A0] uppercase tracking-wider mb-3">
                  ENGINEERING DELIVERABLES & EXECUTION:
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#A0A0A0] font-body">
                      <span className="text-[#E50914] font-mono-tech font-bold mt-0.5">[{i + 1}]</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono-tech text-xs text-[#A0A0A0] uppercase tracking-wider mb-2">
                  SYSTEM ARCHITECTURE / TAGS:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#E50914]/15 border border-[#E50914] text-xs font-mono-tech text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono-tech text-xs font-bold uppercase tracking-wider transition-colors"
              >
                CLOSE SPECIFICATION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
