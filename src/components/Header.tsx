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
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-250 shadow-sm py-3'
          : 'bg-slate-50/70 backdrop-blur-sm border-b border-slate-200/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Brand */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-200">
              <span className="font-display font-bold text-white text-lg tracking-wider">PJ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-tight font-bold text-slate-950 text-base leading-none">PJ</span>
              <span className="font-mono text-[9px] text-blue-600 font-medium tracking-widest mt-0.5 uppercase">Digital Architect</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-xs font-semibold font-sans tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
              id="header-fiverr-cta"
            >
              <span>Hire Me Online</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
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
        className={`md:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-2 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-800 hover:text-blue-600 hover:bg-slate-50 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide border-b border-slate-100 last:border-0 transition-colors"
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
              className="flex items-center justify-center w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
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
