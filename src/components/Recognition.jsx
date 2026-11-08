import React, { useState } from 'react';
import { AwardIcon, ShieldIcon, CheckCircleIcon, ArrowUpRightIcon } from './Icons';

export const Recognition = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const awards = [
    {
      id: "01",
      title: "Chartered Engineer (C.Eng)",
      organization: "Institution of Engineers (India)",
      category: "PROFESSIONAL CREDENTIAL",
      summary: "Globally recognized benchmark of technical competence, peer governance, and professional engineering leadership in Electrical & Industrial Automation systems."
    },
    {
      id: "02",
      title: "Krishna-Arjuna Leadership Initiative: Identified High Performer",
      organization: "JK Paper Ltd. Corporate Talent Pipeline",
      category: "EXECUTIVE LEADERSHIP",
      summary: "Selected into elite executive leadership development track for high-potential engineering managers demonstrating strategic cross-functional impact."
    },
    {
      id: "03",
      title: "CII Kaizen Award Winner",
      organization: "Confederation of Indian Industry (CII)",
      category: "OPERATIONAL EXCELLENCE",
      summary: "Awarded top honors for designing and implementing continuous operational innovations yielding tangible energy savings and machinery uptime."
    },
    {
      id: "04",
      title: "Certified Lead Auditor: ISO 9001, 14001, OHSAS 45001",
      organization: "International Standards Organization (ISO)",
      category: "GOVERNANCE & COMPLIANCE",
      summary: "Certified lead auditor for Quality (9001), Environmental Management (14001), and Occupational Health & Safety (OHSAS 45001) compliance systems."
    },
    {
      id: "05",
      title: "UDDAN Award",
      organization: "Organizational Excellence Council",
      category: "BREAKTHROUGH ACHIEVEMENT",
      summary: "Recognized for driving rapid digital transformation in maintenance management (SAP-PM) and setting plant-wide equipment reliability records."
    }
  ];

  return (
    <section id="recognition" className="py-28 bg-[#090909] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subheader */}
        <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#E50914] mb-3">
          <span className="w-8 h-[1px] bg-[#E50914]" />
          <span>03 // HONORS & ACCREDITATIONS</span>
        </div>

        {/* Giant Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222] pb-8 mb-12">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase text-white leading-none">
            THE WORK. <br />
            <span className="text-[#E50914] hover:text-white transition-colors">THE RECOGNITION.</span>
          </h2>
          <p className="max-w-md text-[#A0A0A0] text-sm sm:text-base font-body">
            Peer-reviewed certifications, industrial efficiency trophies, and high-performance engineering milestones throughout a 26-year career.
          </p>
        </div>

        {/* Sleek Interactive List */}
        <div className="border-t border-[#222222] divide-y divide-[#222222]">
          {awards.map((award, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={award.id}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`interactive-element group relative p-6 sm:p-8 transition-all duration-300 cursor-pointer ${
                  isHovered ? 'bg-[#141414] pl-10' : 'bg-transparent'
                }`}
              >
                {/* Red Left Accent Indicator on Hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-2 bg-[#E50914] transition-all duration-300 shadow-[0_0_15px_#E50914] ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  
                  {/* Numerical ID */}
                  <div className="lg:col-span-1 font-mono-tech text-sm text-[#A0A0A0] group-hover:text-[#E50914] transition-colors">
                    [{award.id}]
                  </div>

                  {/* Main Award Title */}
                  <div className="lg:col-span-6">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E50914] transition-colors uppercase leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-sm text-[#A0A0A0] font-body mt-1">
                      {award.organization}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="lg:col-span-4 flex items-center lg:justify-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 group-hover:border-[#E50914]/40 font-mono-tech text-xs text-[#A0A0A0] group-hover:text-white uppercase transition-colors">
                      <AwardIcon className="w-3.5 h-3.5 text-[#E50914]" />
                      {award.category}
                    </span>
                  </div>

                  {/* Visual Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E50914] group-hover:bg-[#E50914] transition-all">
                      <ArrowUpRightIcon className="w-4 h-4 text-[#A0A0A0] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                </div>

                {/* Subtitle / Description disclosure */}
                <div
                  className={`mt-4 pt-3 border-t border-white/5 transition-all duration-300 ${
                    isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden mt-0 pt-0 border-0'
                  }`}
                >
                  <p className="text-sm text-[#A0A0A0] font-body max-w-4xl">
                    {award.summary}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Recognition;

