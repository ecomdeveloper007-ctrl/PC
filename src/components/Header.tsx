/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Award } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Fiverr Gigs', href: '#fiverr-gigs' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'AI Search', href: '#ai-search' },
    { label: 'SEO Services', href: '#seo-services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3'
          : 'bg-slate-50/80 backdrop-blur-md border-b border-slate-200/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
              <span className="font-display font-black text-white text-base tracking-wider">PJ</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-display tracking-tight font-extrabold text-slate-900 text-base leading-none group-hover:text-blue-600 transition-colors">PJ</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold border border-blue-100">PRO</span>
              </div>
              <span className="font-mono text-[9px] text-slate-500 font-bold tracking-widest mt-0.5 uppercase">Digital Architect</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 bg-slate-100/70 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-650 hover:text-blue-600 hover:bg-white px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans tracking-wide transition-all duration-200 hover:shadow-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              id="header-fiverr-cta"
            >
              <span>Hire Me Online</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-1.5 bg-white/95 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-800 hover:text-blue-600 hover:bg-slate-50 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide border-b border-slate-100 last:border-0 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/25"
              id="mobile-header-fiverr-cta"
            >
              <span>Hire Me Online</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
