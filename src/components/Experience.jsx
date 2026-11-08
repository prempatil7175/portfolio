import React from 'react';
import { ZapIcon, SettingsIcon, CpuIcon, CheckCircleIcon } from './Icons';

export const Experience = () => {
  const experiences = [
    {
      period: "Feb 2010 — Present",
      duration: "14+ Years",
      role: "Deputy Manager — Electrical",
      company: "JK Paper Ltd.",
      location: "Songadh, Gujarat",
      status: "CURRENT POST",
      scope: "Directing electrical maintenance, capital projects, SAP-PM digital transformation, and leading automation upgrades for 24/7 machine reliability.",
      highlights: [
        "Executive leadership of multi-discipline electrical engineering teams across pulp, paper machines (BM-5), and power plants.",
        "Commissioned and synchronized dual Siemens Turbines (28MW + 18MW) ensuring 100% self-sustained captive power generation.",
        "Spearheaded enterprise-wide SAP Plant Maintenance (SAP-PM) rollout, driving preventive compliance and inventory reduction.",
        "Modernized automation architectures across drives (ABB ACS-800/880) and PLCs (Siemens S7-300/400) for zero unscheduled downtime."
      ],
      icon: ZapIcon
    },
    {
      period: "Apr 2001 — Jan 2010",
      duration: "9 Years",
      role: "Senior Service Engineer",
      company: "Sahajanand Technologies",
      location: "Surat, Gujarat",
      status: "MILESTONE TENURE",
      scope: "R&D, installation, and CNC/laser machine maintenance.",
      highlights: [
        "Headed customer engineering, commissioning, and precision calibration for high-end industrial diamond laser processing and CNC machinery.",
        "Collaborated with core R&D teams for motherboard diagnostics, galvanometer scanner optics, and CNC motion controllers.",
        "Resolved complex field failures under critical client deadlines across major manufacturing hubs.",
        "Trained junior field service engineers and established standard operating procedures for field testing."
      ],
      icon: CpuIcon
    },
    {
      period: "May 2000 — Apr 2001",
      duration: "1 Year",
      role: "Service Engineer",
      company: "TEXTRONIC Industries",
      location: "Gujarat, India",
      status: "CAREER FOUNDATION",
      scope: "Textile electronics units commissioning.",
      highlights: [
        "Hands-on installation, loop tuning, and testing of specialized electronic control units for high-speed textile machinery.",
        "Field troubleshooting of power supplies, relay logics, digital yarn clearing monitors, and servo drives.",
        "Conducted preventive maintenance checkups and client operator handovers across spinning and weaving mills."
      ],
      icon: SettingsIcon
    }
  ];

  return (
    <section id="experience" className="py-28 bg-[#090909] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Subheader */}
        <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#E50914] mb-3">
          <span className="w-8 h-[1px] bg-[#E50914]" />
          <span>05 // PROFESSIONAL CHRONOLOGY</span>
        </div>

        {/* Giant Section Header */}
        <div className="border-b border-[#222222] pb-8 mb-16">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            TERUS BERGERAK. <br />
            <span className="text-[#E50914]">TERUS BERKARYA.</span>
          </h2>
          <p className="font-mono-tech text-xs sm:text-sm text-[#A0A0A0] uppercase tracking-widest mt-4">
            [ CONTINUOUS MOVEMENT. CONTINUOUS INNOVATION. — 26 YEARS OF RELENTLESS INDUSTRIAL EXECUTION ]
          </p>
        </div>

        {/* Vertical Timeline Layout with Clean Left Rail */}
        <div className="relative border-l-2 border-[#222222] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-12 space-y-16">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div key={idx} className="relative group">
                {/* Glowing Red Timeline Node on Rail */}
                <div className="absolute -left-[32px] sm:-left-[48px] md:-left-[56px] top-2 w-6 h-6 rounded-full bg-[#090909] border-2 border-white/30 group-hover:border-[#E50914] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_#E50914] z-10">
                  <div className="w-2 h-2 rounded-full bg-[#E50914]" />
                </div>

                {/* Timeline Card Content */}
                <div className="bg-[#111111] border border-[#222222] group-hover:border-[#E50914] p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_35px_rgba(229,9,20,0.15)]">
                  {/* Top Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-0.5 bg-[#E50914]/15 border border-[#E50914] font-mono-tech text-xs text-white uppercase font-bold tracking-wider">
                          {exp.status}
                        </span>
                        <span className="font-mono-tech text-xs text-[#E50914] font-semibold">
                          {exp.period}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="font-mono-tech text-xs text-[#A0A0A0]">
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase group-hover:text-[#E50914] transition-colors leading-tight pt-1">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 font-mono-tech text-sm text-[#A0A0A0]">
                        <span className="text-white font-semibold uppercase">{exp.company}</span>
                        <span className="text-white/20">•</span>
                        <span>📍 {exp.location}</span>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-[#E50914] flex items-center justify-center self-start flex-shrink-0 transition-colors">
                      <Icon className="w-6 h-6 text-[#E50914]" />
                    </div>
                  </div>

                  {/* Scope Description */}
                  <div className="bg-[#171717] p-5 border-l-4 border-[#E50914] mb-6">
                    <span className="font-mono-tech text-[10px] text-[#A0A0A0] uppercase tracking-widest block mb-1">
                      EXECUTIVE CHARGE & MISSION:
                    </span>
                    <p className="text-white text-sm sm:text-base font-body leading-relaxed">
                      {exp.scope}
                    </p>
                  </div>

                  {/* Key Deliverables & Highlights Grid */}
                  <div className="space-y-3">
                    <span className="font-mono-tech text-xs text-[#A0A0A0] uppercase tracking-wider block">
                      KEY DELIVERABLES & IMPACT:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#A0A0A0] font-body bg-white/[0.02] border border-white/5 p-3.5 group-hover:border-white/10 transition-colors leading-relaxed"
                        >
                          <span className="text-[#E50914] font-mono-tech font-bold mt-0.5 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

