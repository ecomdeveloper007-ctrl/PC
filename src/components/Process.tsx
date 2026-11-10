/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TIMELINE_PROCESS } from '../data';
import { Sparkles } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background flare glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Work Method
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 5-Step Growth Engine
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-550 leading-relaxed">
            A surgical, streamlined workflow engineered to deliver high-converting web assets with zero downtime and verified ranking improvements.
          </p>
        </div>

        {/* Process Timeline Blocks */}
        <div className="relative mt-8">
          {/* Connector timeline indicator line */}
          <div className="hidden lg:block absolute left-8 right-8 top-[32px] h-[3px] bg-linear-to-r from-blue-500/20 via-blue-500/40 to-indigo-500/20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10 items-stretch">
            {TIMELINE_PROCESS.map((proc, idx) => (
              <div key={proc.step} className="space-y-4 group animate-fade-in flex flex-col h-full">
                
                {/* Numeric Indicator Card block */}
                <div className="flex lg:flex-col items-center gap-4 lg:gap-0 lg:items-start shrink-0">
                  
                  {/* Glowing bubble number identifier */}
                  <div className="w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center font-display font-extrabold text-slate-900 text-lg sm:text-xl group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-300 relative z-10 shrink-0 shadow-xs">
                    {idx + 1}
                  </div>

                  <span className="lg:mt-4 font-mono text-[10px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md shadow-2xs">
                    {proc.step}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 group-hover:border-blue-400/50 transition-all duration-300 shadow-xs hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 flex-1 flex flex-col justify-start">
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proc.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-650 leading-relaxed font-semibold">
                    {proc.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Highlight badge bottom */}
        <div className="mt-16 text-center">
          <span className="inline-flex items-center space-x-2 text-[11px] font-mono font-semibold text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>Average turnaround: 7-14 business days depending on content scope.</span>
          </span>
        </div>

      </div>
    </section>
  );
}
