/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, ShieldCheck, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const guarantees = [
    'Direct communication with PJ throughout your project',
    'Full escrow protection & milestone-based delivery',
    'Custom tailored responsive design & speed optimization',
    'Generative AI citation & Schema markup integration'
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background radial overlay styling */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Work Together
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Initiate Your Project Audit
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            Ready to design a pristine, high-converting digital storefront or secure your AI search citations? Connect directly through the official verified channel. PJ reviews project briefs within 24 hours.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Information & Credentials Column */}
          <div className="md:col-span-6 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 space-y-6 sm:space-y-8 relative overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold tracking-widest uppercase flex items-center bg-emerald-50 border border-emerald-200 w-fit px-3 py-1 rounded-full shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
                  Currently booking Q3 2026
                </span>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Let's craft your high-converting assets
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 mt-2 leading-relaxed font-semibold">
                  Have unique requirements or need customized back-end configurations? Order or message directly to receive a comprehensive site assessment and speed audit.
                </p>
              </div>

              {/* Direct Channel Details */}
              <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
                <div className="flex items-center space-x-3.5 text-xs p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 shrink-0">
                    <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block font-bold">Location base</span>
                    <span className="text-slate-900 font-bold mt-0.5 block text-xs sm:text-sm">
                      Virginia, United States
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 text-xs p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                    <Clock className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block font-bold">Global Response Clock</span>
                    <span className="text-slate-900 font-bold mt-0.5 block text-xs sm:text-sm">
                      Guaranteed within 24 Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Guarantee Badge */}
            <div className="pt-5 sm:pt-6 border-t border-slate-200/80 text-xs text-slate-700 space-y-2">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
                <span className="font-extrabold text-slate-900">Service Satisfaction Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal font-medium">
                All transactions and project milestones are protected end-to-end with verified escrow and direct revisions.
              </p>
            </div>
          </div>

          {/* Direct Booking & Action Column */}
          <div className="md:col-span-6 p-6 sm:p-10 rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-5 sm:space-y-6 relative z-10">
              <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Verified Direct Channel</span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Start Your Project Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                  Skip email bottlenecks. Review client reviews, explore fixed-price service packages, and initiate your custom order directly.
                </p>
              </div>

              {/* Guarantees Checklist */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 sm:space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8 space-y-3 relative z-10">
              <a
                href="https://www.fiverr.com/phoebe_johnson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 px-6 rounded-2xl font-bold text-xs sm:text-sm text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer min-h-[48px] group"
                id="contact-official-profile-btn"
              >
                <span>Proceed securely via my official profile</span>
                <ArrowUpRight className="ml-2 w-4 h-4 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <p className="text-[11px] text-center text-slate-400 font-mono">
                Average initial response: <span className="text-white font-semibold">&lt; 2 hours</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
