import React from 'react';
import { ArrowUpRightIcon, ZapIcon, ShieldIcon, CpuIcon } from './Icons';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#090909] bg-grid-pattern overflow-hidden"
    >
      {/* Ambient Red Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#E50914]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-28 left-8 text-white/20 font-mono-tech text-xs hidden md:block select-none">
        + LOC: 21.1702° N, 72.8311° E
      </div>
      <div className="absolute top-28 right-8 text-white/20 font-mono-tech text-xs hidden md:block select-none">
        + STATUS: HIGH_VOLTAGE_ACTIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Giant Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Brutalist Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono-tech uppercase tracking-widest text-[#A0A0A0]">
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
              <span>26 YEARS INDUSTRY LEADERSHIP // DEPUTY MANAGER</span>
            </div>

            {/* Giant Headline */}
            <div className="space-y-1">
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-white uppercase">
                MUKESH <span className="text-[#E50914]">PATIL.</span>
              </h1>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#E50914] uppercase leading-none pt-2">
                ELECTRICAL & <br className="hidden sm:inline" />
                <span className="text-white hover:text-[#E50914] transition-colors">AUTOMATION</span> ENGINEER.
              </h2>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#A0A0A0] max-w-2xl font-body leading-relaxed pt-2">
              Strategic and hands-on professional with <span className="text-white font-semibold">26 years</span> of extensive experience in managing large-scale electrical and automation systems.
            </p>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Red Button */}
              <a
                href="#contact"
                className="interactive-element group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E50914] hover:bg-[#FF1E27] text-white font-heading text-lg font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:shadow-[0_0_35px_rgba(229,9,20,0.7)]"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white" />
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white" />
              </a>

              {/* Secondary Outline Button */}
              <a
                href="#experience"
                className="interactive-element group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 hover:border-[#E50914] text-white hover:text-[#E50914] font-heading text-lg font-bold tracking-wider uppercase transition-all duration-300 bg-transparent hover:bg-[#E50914]/5"
              >
                <span>VIEW EXPERIENCE</span>
              </a>
            </div>

            {/* Key Engineering Telemetry Counters */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#222222]">
              <div className="border-l-2 border-[#E50914] pl-3 py-1">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">26+</div>
                <div className="font-mono-tech text-[11px] text-[#A0A0A0] uppercase">Years Exp.</div>
              </div>
              <div className="border-l-2 border-white/20 pl-3 py-1 hover:border-[#E50914] transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">46 MW</div>
                <div className="font-mono-tech text-[11px] text-[#A0A0A0] uppercase">Turbine Capacity</div>
              </div>
              <div className="border-l-2 border-white/20 pl-3 py-1 hover:border-[#E50914] transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">24 / 7</div>
                <div className="font-mono-tech text-[11px] text-[#A0A0A0] uppercase">Uptime Reliability</div>
              </div>
              <div className="border-l-2 border-white/20 pl-3 py-1 hover:border-[#E50914] transition-colors">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">C.Eng</div>
                <div className="font-mono-tech text-[11px] text-[#A0A0A0] uppercase">Chartered Engr</div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait Placeholder & Technical Holo-Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] bg-[#111111] border-2 border-[#222222] p-4 group">
              
              {/* Industrial Framing Brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#E50914]" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#E50914]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#E50914]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#E50914]" />

              {/* Portrait Visual Container */}
              <div className="relative w-full h-full bg-[#161616] overflow-hidden flex flex-col justify-between p-6">
                
                {/* Tech Header Overlay */}
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#A0A0A0] border-b border-white/10 pb-3 z-10">
                  <span className="flex items-center gap-1 text-[#E50914]">
                    <ZapIcon className="w-3.5 h-3.5" />
                    SYSTEM ARCHITECT
                  </span>
                  <span>ID: MP-ELEC-98</span>
                </div>

                {/* Industrial Technical Avatar Graphic */}
                <div className="relative my-auto flex flex-col items-center justify-center text-center py-8">
                  {/* Glowing Schematic Rings */}
                  <div className="relative w-44 h-44 rounded-full border border-dashed border-[#E50914]/40 flex items-center justify-center group-hover:border-[#E50914] transition-colors">
                    <div className="absolute inset-2 rounded-full border border-white/10 animate-spin-slow" />
                    
                    {/* Portrait Icon / Emblem */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border border-white/20 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-[#E50914]/10 group-hover:bg-[#E50914]/20 transition-colors" />
                      <CpuIcon className="w-12 h-12 text-[#E50914] mb-1 relative z-10" />
                      <span className="font-heading text-xs tracking-wider text-white font-bold relative z-10">
                        MUKESH PATIL
                      </span>
                      <span className="font-mono-tech text-[9px] text-[#A0A0A0] relative z-10">
                        C.Eng | IEI
                      </span>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="mt-6 space-y-1 z-10">
                    <div className="font-heading text-xl font-bold tracking-wider text-white uppercase">
                      CHIEF AUTOMATION LEAD
                    </div>
                    <div className="font-mono-tech text-xs text-[#A0A0A0]">
                      JK PAPER LTD. // FORT SONGADH
                    </div>
                  </div>
                </div>

                {/* Technical Card Footer */}
                <div className="border-t border-white/10 pt-3 z-10 flex items-center justify-between font-mono-tech text-[10px] text-[#A0A0A0]">
                  <div className="flex items-center gap-1.5">
                    <ShieldIcon className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>ISO 9001 / 14001 / 45001</span>
                  </div>
                  <span className="text-white font-semibold">CII KAIZEN WINNER</span>
                </div>

                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none opacity-50" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

