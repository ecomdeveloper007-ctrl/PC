/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check } from 'lucide-react';
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
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400/60 hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-2xs group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Check className="w-5 h-5 transition-transform" />
                </div>
                
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-650 font-medium">
                    {feat.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-200/80">
                <span className="text-[10px] font-mono font-bold text-blue-700 tracking-wider flex items-center uppercase">
                  Verified Status ✓
                </span>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
