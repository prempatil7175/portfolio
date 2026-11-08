import React, { useState, useEffect } from 'react';
import { DownloadIcon, MenuIcon, XIcon } from './Icons';

export const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'experience', 'projects', 'recognition', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090909]/95 backdrop-blur-md border-b border-[#222222] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 interactive-element text-white tracking-wider"
        >
          <div className="w-3 h-3 bg-[#E50914] shadow-[0_0_10px_#E50914] group-hover:scale-125 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#E50914] transition-colors">
              MUKESH PATIL
            </span>
            <span className="font-mono-tech text-[10px] text-[#A0A0A0] tracking-widest uppercase">
              26 YRS // ELEC & AUTOMATION
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono-tech text-xs tracking-widest uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#E50914] font-semibold'
                    : 'text-[#A0A0A0] hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E50914] shadow-[0_0_8px_#E50914]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="interactive-element group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono-tech text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-[0_0_15px_rgba(229,9,20,0.35)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] active:scale-95"
          >
            <DownloadIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>DOWNLOAD RESUME</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#E50914] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090909] border-b border-[#222222] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-heading text-lg font-bold tracking-wider text-white hover:text-[#E50914] py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#E50914] text-white font-mono-tech text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(229,9,20,0.4)]"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

