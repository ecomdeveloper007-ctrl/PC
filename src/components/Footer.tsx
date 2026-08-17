/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-8 relative overflow-hidden font-sans">
      {/* Decorative details */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.15)]">
                <span className="font-display font-bold text-white text-lg">PJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-tight font-bold text-slate-900 text-base leading-none">PJ</span>
                <span className="font-mono text-[9px] text-blue-600 font-bold tracking-widest mt-0.5 uppercase">Digital Architect</span>
              </div>
            </a>
            
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Helping eCommerce stores and services scale through customized Shopify layouts, advanced Technical SEO, and Answer Engine Visibility optimizations. Based in Virginia, US.
            </p>

            {/* Social channels icons */}
            <div className="flex items-center space-x-3.5 pt-1">
              <a
                href="https://www.fiverr.com/phoebe_johnson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm"
                title="Fiverr Profile URL"
              >
                <span className="font-display font-bold text-xs uppercase font-mono">FI</span>
              </a>
            </div>
          </div>

          {/* Quick link sets: Services */}
          <div className="col-span-2 md:col-span-2 space-y-4 text-xs font-semibold">
            <h4 className="text-xs text-slate-900 font-extrabold uppercase tracking-wider font-mono">
              Expertise
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-500 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Web Design & Dev
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-500 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Technical SEO Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-500 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  AI Visibility GEO
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-500 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Social SMM Ads
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-500 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  CRO Funnels Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Quick link sets: Portfolio & Cases */}
          <div className="col-span-2 md:col-span-2 space-y-4 text-xs font-semibold">
            <h4 className="text-xs text-slate-900 font-extrabold uppercase tracking-wider font-mono">
              Portfolios & Cases
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#portfolio" className="text-slate-505 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  WordPress Projects
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-550 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Webflow Sites
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-550 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Shopify & Wix
                </a>
              </li>
              <li>
                <a href="#ai-search" className="text-slate-550 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Generative Engine Wins
                </a>
              </li>
            </ul>
          </div>

          {/* Core Support */}
          <div className="col-span-2 md:col-span-2 space-y-4 text-xs font-semibold">
            <h4 className="text-xs text-slate-900 font-extrabold uppercase tracking-wider font-mono">
              Support Channels
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#testimonials" className="text-slate-550 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#process" className="text-slate-550 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Growth Workflow
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-550 hover:text-blue-605 text-slate-600 hover:text-blue-600 transition-colors">
                  Book Project Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Order Channel */}
          <div className="md:col-span-2 space-y-4 font-semibold">
            <h4 className="text-xs text-slate-905 text-slate-900 font-extrabold uppercase tracking-wider font-mono">
              Verified Order Flow
            </h4>
            <p className="text-[11px] text-slate-500 leading-normal font-bold">
              Proceed securely via my official profile.
            </p>
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-lg transition-all shadow-sm w-full text-center cursor-pointer"
              id="footer-fiverr-link"
            >
              <span>Official Profile</span>
              <ArrowUpRight className="ml-1.5 w-3 h-3 text-white" />
            </a>
          </div>

        </div>

        {/* Footer bottom details & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-bold font-sans">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="text-slate-900 font-extrabold">
              © 2026 PJ. All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-slate-200">|</span>
            <span className="font-semibold text-slate-500">Based in Virginia, US.</span>
          </div>

          {/* Scroll Up Button */}
          <button
            onClick={scrollUp}
            className="p-3 rounded-full bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-202 border-slate-200 hover:border-blue-500 text-slate-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
            id="back-to-top-footer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
