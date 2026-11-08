import React from 'react';

export const TelemetryTicker = () => {
  const telemetryItems = [
    "SYSTEM_STATUS: ALL CAPTIVE UNITS NOMINAL",
    "GRID FREQ: 50.02 Hz // LOCKED",
    "CAPTIVE TURBINE-1: 28.0 MW [SYNCHRONIZED]",
    "CAPTIVE TURBINE-2: 18.0 MW [SYNCHRONIZED]",
    "BM-5 PRODUCTION SPEED: 1,120 MPM",
    "HV SUBSTATION: 66kV / 11kV BALANCED",
    "SCADA BUS: 1,420 ACTIVE I/O NODES",
    "PROTECTION: SIPROTEC NUMERICAL RELAYS ONLINE",
    "SAFETY GOVERNANCE: ZERO LTI // 26 YRS RECORD"
  ];

  return (
    <div className="w-full bg-[#111111] border-y border-[#222222] py-3 overflow-hidden select-none">
      <div className="flex items-center gap-8 whitespace-nowrap animate-pulse-slow">
        <div className="flex items-center gap-2 px-4 border-r border-[#E50914] text-[#E50914] font-mono-tech text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
          LIVE TELEMETRY
        </div>
        <div className="flex items-center gap-8 font-mono-tech text-xs text-[#A0A0A0]">
          {telemetryItems.map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-white hover:text-[#E50914] transition-colors">{item}</span>
              <span className="text-[#E50914]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TelemetryTicker;

