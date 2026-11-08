import React from 'react';
import { DownloadIcon, XIcon, AwardIcon, CheckCircleIcon, ZapIcon } from './Icons';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#111111] border-2 border-[#E50914] text-white p-6 sm:p-10 shadow-[0_0_60px_rgba(229,9,20,0.5)] my-8">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#E50914] shadow-[0_0_8px_#E50914]" />
            <span className="font-mono-tech text-xs uppercase tracking-widest text-white">
              EXECUTIVE ENGINEERING DOSSIER // MUKESH PATIL
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-[#A0A0A0] hover:text-white p-1 font-mono-tech text-lg"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8 font-body print:text-black">
          
          {/* Header */}
          <div className="border-b border-[#222222] pb-6">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              MUKESH PATIL
            </h1>
            <p className="font-mono-tech text-sm text-[#E50914] font-semibold uppercase tracking-wider mt-1">
              ELECTRICAL & AUTOMATION ENGINEER • 26 YEARS INDUSTRIAL LEADERSHIP
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono-tech text-[#A0A0A0]">
              <span>📍 Fort Songadh, Tapi, Gujarat, India</span>
              <span>📞 +91 8320756921 / +91 9328921198</span>
              <span>✉️ mukpatil2k1@yahoo.co.in / Mukpatil2k1@gmail.com</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-heading text-xl font-bold uppercase text-[#E50914] tracking-wider mb-2">
              EXECUTIVE PROFILE
            </h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              Strategic and hands-on professional with 26 years of extensive experience in managing large-scale electrical and automation systems. Proven track record in multi-megawatt captive power turbine synchronization (Siemens 28MW & 18MW), paper machine automation (BM-5), high-reliability drive systems (ABB ACS-800/880), SAP-PM digital maintenance governance, and certified multi-standard compliance (ISO 9001/14001/45001 Lead Auditor).
            </p>
          </div>

          {/* Key Work Experience */}
          <div>
            <h2 className="font-heading text-xl font-bold uppercase text-[#E50914] tracking-wider mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-2 border-[#E50914] pl-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-white uppercase">Deputy Manager — Electrical</h3>
                  <span className="font-mono-tech text-xs text-[#A0A0A0]">Feb 2010 — Present</span>
                </div>
                <div className="text-xs font-mono-tech text-[#E50914] mb-1">JK Paper Ltd. • Songadh, Gujarat</div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Directing electrical maintenance, capital projects, SAP-PM digital transformation, and leading automation upgrades for 24/7 machine reliability. Successfully commissioned dual Siemens turbines (46MW) and spearheaded DCS / SCADA modernization.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-white uppercase">Senior Service Engineer</h3>
                  <span className="font-mono-tech text-xs text-[#A0A0A0]">Apr 2001 — Jan 2010</span>
                </div>
                <div className="text-xs font-mono-tech text-[#A0A0A0] mb-1">Sahajanand Technologies • Surat, Gujarat</div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  R&D, installation, and CNC/laser machine maintenance across high-precision industrial sectors.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-white uppercase">Service Engineer</h3>
                  <span className="font-mono-tech text-xs text-[#A0A0A0]">May 2000 — Apr 2001</span>
                </div>
                <div className="text-xs font-mono-tech text-[#A0A0A0] mb-1">TEXTRONIC Industries • Gujarat</div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Commissioning of textile electronics units, drive systems, and control panels.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Accreditations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="font-heading text-lg font-bold uppercase text-[#E50914] tracking-wider mb-2">
                EDUCATION & LICENSURE
              </h2>
              <ul className="space-y-1.5 text-xs text-[#A0A0A0]">
                <li>• <strong className="text-white">B.E. in Electronics & Communication</strong> (IEI)</li>
                <li>• <strong className="text-white">Chartered Engineer (C.Eng)</strong> (IEI)</li>
                <li>• <strong className="text-white">Diploma of Industrial Electronics</strong></li>
                <li>• <strong className="text-white">PG Diploma in Business Admin (Operations)</strong> (Symbiosis)</li>
                <li>• <strong className="text-white">Six Sigma Yellow Belt</strong></li>
                <li>• <strong className="text-white">Siemens SIMOTION & SIMOREG Certified</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold uppercase text-[#E50914] tracking-wider mb-2">
                HONORS & AUDITING
              </h2>
              <ul className="space-y-1.5 text-xs text-[#A0A0A0]">
                <li>• <strong className="text-white">ISO 9001, 14001, OHSAS 45001</strong> Certified Lead Auditor</li>
                <li>• <strong className="text-white">CII Kaizen Award Winner</strong></li>
                <li>• <strong className="text-white">UDDAN Award</strong> for Maintenance Excellence</li>
                <li>• <strong className="text-white">Krishna-Arjuna Leadership Initiative:</strong> High Performer</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
          <span className="font-mono-tech text-xs text-[#A0A0A0]">
            STATUS: ACTIVE FOR CONSULTANCY & LEADERSHIP
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs uppercase tracking-wider"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;

