import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ArrowUpIcon, CopyIcon, CheckIcon } from './Icons';

export const Footer = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-[#000000] text-white pt-28 pb-16 relative border-t-2 border-[#222222] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E50914]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-b border-[#222222] pb-12 mb-16">
          <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#E50914] mb-4">
            <span className="w-8 h-[1px] bg-[#E50914]" />
            <span>06 // TRANSMISSION // REACH OUT</span>
          </div>

          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase text-white leading-none">
            LET'S WORK <br />
            <span className="text-[#E50914] hover:text-white transition-colors">TOGETHER.</span>
          </h2>
        </div>

        {/* Grid Layout: Contact Details & Right Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Left / Center: Contact Information Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg text-[#A0A0A0] max-w-xl font-body">
              Available for technical consultancy, plant modernization advisory, electrical commissioning leadership, and high-stakes automation transformations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone Card */}
              <div className="bg-[#111111] border border-[#222222] hover:border-[#E50914] p-6 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-[#E50914] flex items-center justify-center transition-colors">
                    <PhoneIcon className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#A0A0A0] uppercase">
                    DIRECT CALL
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+918320756921"
                      className="font-mono-tech text-sm text-white hover:text-[#E50914] transition-colors font-semibold"
                    >
                      +91 8320756921
                    </a>
                    <button
                      onClick={() => copyToClipboard('+918320756921', 'phone1')}
                      className="text-[#A0A0A0] hover:text-white p-1"
                      title="Copy Phone"
                    >
                      {copiedItem === 'phone1' ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+919328921198"
                      className="font-mono-tech text-sm text-white hover:text-[#E50914] transition-colors font-semibold"
                    >
                      +91 9328921198
                    </a>
                    <button
                      onClick={() => copyToClipboard('+919328921198', 'phone2')}
                      className="text-[#A0A0A0] hover:text-white p-1"
                      title="Copy Phone"
                    >
                      {copiedItem === 'phone2' ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#111111] border border-[#222222] hover:border-[#E50914] p-6 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-[#E50914] flex items-center justify-center transition-colors">
                    <MailIcon className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#A0A0A0] uppercase">
                    OFFICIAL CORRESPONDENCE
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a
                      href="mailto:mukpatil2k1@yahoo.co.in"
                      className="font-mono-tech text-xs sm:text-sm text-white hover:text-[#E50914] transition-colors font-semibold truncate max-w-[200px]"
                      title="mukpatil2k1@yahoo.co.in"
                    >
                      mukpatil2k1@yahoo.co.in
                    </a>
                    <button
                      onClick={() => copyToClipboard('mukpatil2k1@yahoo.co.in', 'email1')}
                      className="text-[#A0A0A0] hover:text-white p-1"
                      title="Copy Email"
                    >
                      {copiedItem === 'email1' ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="mailto:Mukpatil2k1@gmail.com"
                      className="font-mono-tech text-xs sm:text-sm text-white hover:text-[#E50914] transition-colors font-semibold truncate max-w-[200px]"
                      title="Mukpatil2k1@gmail.com"
                    >
                      Mukpatil2k1@gmail.com
                    </a>
                    <button
                      onClick={() => copyToClipboard('Mukpatil2k1@gmail.com', 'email2')}
                      className="text-[#A0A0A0] hover:text-white p-1"
                      title="Copy Email"
                    >
                      {copiedItem === 'email2' ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Location Card */}
            <div className="bg-[#111111] border border-[#222222] hover:border-[#E50914] p-6 transition-all duration-300 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-[#E50914]" />
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] text-[#A0A0A0] uppercase">
                    CURRENT BASE / LOCATION
                  </div>
                  <div className="font-heading text-lg sm:text-xl font-bold text-white uppercase">
                    Fort Songadh, Tapi, Gujarat, India.
                  </div>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono-tech text-xs text-[#E50914] border border-[#E50914] px-3 py-1 uppercase">
                ON SITE READY
              </span>
            </div>

          </div>

          {/* Right Column: Bold Graphic Text & Interactive Back to Top (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#111111] border-2 border-[#222222] p-8 sm:p-12 relative group overflow-hidden">
            
            {/* Corner Decorative Marks */}
            <div className="absolute top-2 left-2 font-mono-tech text-[10px] text-white/30">
              [ REF: TERMINAL_ALPHA ]
            </div>
            <div className="absolute top-2 right-2 font-mono-tech text-[10px] text-[#E50914]">
              ● ONLINE
            </div>

            {/* Bold Graphic Typography */}
            <div className="my-8">
              <div className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none text-white">
                MAKE IT <br />
                <span className="text-[#E50914] group-hover:tracking-wider transition-all duration-500">
                  FEEL REAL.
                </span>
              </div>
              <p className="font-mono-tech text-xs text-[#A0A0A0] mt-4 uppercase tracking-widest">
                26 YEARS OF HIGH-PRECISION ENGINEERING EXCELLENCE.
              </p>
            </div>

            {/* Interactive Scroll Back to Top Button */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-white/70">
                RETURN TO APEX
              </span>

              <button
                onClick={scrollToTop}
                className="interactive-element group/btn w-16 h-16 bg-[#E50914] hover:bg-[#FF1E27] text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_35px_rgba(229,9,20,0.8)] active:scale-95"
                aria-label="Scroll back to top"
              >
                <ArrowUpIcon className="w-8 h-8 transition-transform group-hover/btn:-translate-y-1.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Minimalist Bar */}
        <div className="border-t border-[#222222] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[#A0A0A0]">
          <div>
            © {new Date().getFullYear()} MUKESH PATIL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>ELECTRICAL & AUTOMATION PORTFOLIO</span>
            <span className="text-[#E50914]">VER 2.6.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

