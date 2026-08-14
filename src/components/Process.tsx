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
          <div className="hidden lg:block absolute left-4 right-4 top-[40px] h-[2px] bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10 items-stretch">
            {TIMELINE_PROCESS.map((proc, idx) => (
              <div key={proc.step} className="space-y-4 group animate-fade-in flex flex-col h-full">
                
                {/* Numeric Indicator Card block */}
                <div className="flex lg:flex-col items-center gap-4 lg:gap-0 lg:items-start shrink-0">
                  
                  {/* Glowing bubble number identifier */}
                  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-display font-black text-slate-800 text-base sm:text-lg group-hover:border-blue-650 group-hover:bg-blue-50 group-hover:text-blue-605 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 relative z-10 shrink-0 shadow-sm">
                    {idx + 1}
                  </div>

                  <span className="lg:mt-4 font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-205 px-2 py-0.5 rounded shadow-sm">
                    {proc.step}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 group-hover:border-blue-500/20 transition-all duration-300 shadow-sm hover:shadow-md flex-1 flex flex-col justify-start">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-650 transition-colors">
                    {proc.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-semibold">
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
