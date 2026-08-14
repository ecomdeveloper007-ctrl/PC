/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, HelpCircle, ArrowUpRight } from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data';

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Visual backdrops */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Valued Trust
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Partner With PJ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-550 leading-relaxed">
            PJ fuses technical SEO and conversion-focused architectures to build optimized setups that drive real sales results, combining beautiful design with high-performance metrics.
          </p>
        </div>

        {/* Feature Grid standard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_ME.map((feat) => (
            <div
              key={feat.title}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500/30 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Check className="w-4 h-4 text-blue-650 group-hover:scale-110 transition-transform" />
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 font-medium">
                    {feat.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200">
                <span className="text-[9px] font-mono font-bold text-blue-600 tracking-wider flex items-center uppercase">
                  Verified Status ✓
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bottom Block */}
        <div className="mt-16 text-center border-t border-slate-200 pt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm max-w-3xl mx-auto">
            <span className="text-xs text-slate-600 text-left font-medium leading-relaxed">
              💼 Need an instant customized proposal or custom project timelines? Submit your catalog coordinates.
            </span>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-slate-905 bg-slate-900 hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm"
            >
              Get Started Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
