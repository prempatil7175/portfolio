import React from 'react';
import { CpuIcon, ShieldIcon, CheckCircleIcon, ZapIcon, SettingsIcon } from './Icons';

export const SkillsEducation = () => {
  const education = [
    {
      title: "B.E. in Electronics & Communication",
      institution: "Institution of Engineers (India) - IEI",
      badge: "DEGREE",
      year: "Graduated with Honors",
      desc: "Comprehensive engineering curriculum covering microprocessor systems, signal processing, instrumentation, and control system engineering."
    },
    {
      title: "Diploma of Industrial Electronics",
      institution: "Technical Examination Board",
      badge: "DIPLOMA",
      year: "Industrial Foundation",
      desc: "Specialized training in power electronics, industrial control circuits, sensor interfacing, and semiconductor drives."
    },
    {
      title: "PG Diploma in Business Administration - Operations",
      institution: "Symbiosis Center for Distance Learning (SCDL)",
      badge: "POST GRADUATE",
      year: "Operations Management",
      desc: "Strategic operations management, supply chain integration, inventory optimization, and capital project budget governance."
    },
    {
      title: "Six Sigma Yellow Belt",
      institution: "Continuous Improvement Institute",
      badge: "QUALITY",
      year: "DMAIC Framework",
      desc: "Root-cause analysis, variance reduction in continuous paper mill operations, and Kaizen methodology deployment."
    },
    {
      title: "Siemens SIMOTION & SIMOREG Certified",
      institution: "Siemens SITRAIN Automation Academy",
      badge: "OEM SPECIALIST",
      year: "Motion & Drives",
      desc: "Advanced motion control systems, multi-axis synchronization, and DC/AC variable speed drive architecture."
    }
  ];

  const proficiencies = [
    {
      title: "Industrial Automation",
      subtitle: "Siemens S7, ABB, SCADA",
      level: 98,
      items: ["Siemens S7-300 / S7-400 / S7-1500", "WinCC SCADA & TIA Portal", "ABB ACS-800 & ACS-880 Drives", "DCS Process Interlocking", "Profibus & Industrial Ethernet"]
    },
    {
      title: "Power Distribution & Protection",
      subtitle: "SIPROTEC & HT/LT Substations",
      level: 95,
      items: ["Siemens SIPROTEC Numerical Relays", "66kV / 11kV Substation Switchgear", "Turbine Synchronization (46MW)", "Transformer Differential Protection", "Arc Flash & Load Shedding Logic"]
    },
    {
      title: "Digital Maintenance Management",
      subtitle: "SAP-PM & Predictive Reliability",
      level: 94,
      items: ["SAP Plant Maintenance (PM) Module Lead", "Preventive & Condition-Based Maintenance", "Mean Time Between Failures (MTBF) Optimization", "Spares Planning & Cost Governance", "24/7 Zero-Downtime Shift Strategy"]
    },
    {
      title: "QEHS & Compliance Governance",
      subtitle: "TPM/TQM, Lean tools & ISO",
      level: 96,
      items: ["ISO 9001, 14001 & OHSAS 45001 Auditor", "Total Productive Maintenance (TPM)", "5S & 7 Quality Tools Deployment", "Hazardous Area Zone Safety Protocols", "Zero Harm Industrial Safety Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-[#090909] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subheader */}
        <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#E50914] mb-3">
          <span className="w-8 h-[1px] bg-[#E50914]" />
          <span>04 // CORE CAPABILITIES & ACADEMICS</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222] pb-8 mb-16">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase text-white leading-none">
            ENGINEERED <br />
            <span className="text-[#E50914] hover:text-white transition-colors">MASTERY.</span>
          </h2>
          <p className="max-w-md text-[#A0A0A0] text-sm sm:text-base font-body">
            Combining formal academic rigor in electronics and business operations with 26 years of heavy-industrial hands-on execution.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Education & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#E50914]" />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                  EDUCATION & CERTIFICATIONS
                </h3>
              </div>
              <span className="font-mono-tech text-xs text-[#A0A0A0]">05 CREDENTIALS</span>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-[#111111] border border-[#222222] hover:border-[#E50914] p-6 transition-all duration-300 relative"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#E50914]/15 border border-[#E50914] font-mono-tech text-[10px] text-white uppercase">
                      {item.badge}
                    </span>
                    <span className="font-mono-tech text-xs text-[#A0A0A0]">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="font-heading text-xl font-bold text-white group-hover:text-[#E50914] transition-colors uppercase leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-mono-tech text-xs text-[#A0A0A0] mt-1 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-xs text-white/60 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Proficiencies */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-white" />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                  CORE PROFICIENCIES
                </h3>
              </div>
              <span className="font-mono-tech text-xs text-[#A0A0A0]">OPERATIONAL DOMAINS</span>
            </div>

            <div className="space-y-6">
              {proficiencies.map((prof, idx) => (
                <div
                  key={idx}
                  className="group bg-[#111111] border border-[#222222] hover:border-[#E50914] p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-2xl font-bold text-white group-hover:text-[#E50914] transition-colors uppercase">
                      {prof.title}
                    </h4>
                    <span className="font-mono-tech text-xs font-bold text-[#E50914]">
                      {prof.level}%
                    </span>
                  </div>

                  <p className="font-mono-tech text-xs text-[#A0A0A0] mb-4 uppercase">
                    {prof.subtitle}
                  </p>

                  {/* Telemetry Progress Bar */}
                  <div className="w-full h-1.5 bg-[#222222] mb-5 overflow-hidden">
                    <div
                      className="h-full bg-[#E50914] group-hover:bg-[#FF1E27] transition-all duration-500 shadow-[0_0_8px_#E50914]"
                      style={{ width: `${prof.level}%` }}
                    />
                  </div>

                  {/* Bulleted Competency Tags */}
                  <div className="flex flex-wrap gap-2">
                    {prof.items.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 font-mono-tech text-[10px] text-[#A0A0A0] group-hover:text-white group-hover:border-white/20 transition-colors uppercase"
                      >
                        <CheckCircleIcon className="w-3 h-3 text-[#E50914]" />
                        {sub}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;

