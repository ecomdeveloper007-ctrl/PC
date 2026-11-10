/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function DashboardMetrics() {
  // Stats configs
  const mainMetrics = [
    { label: 'Completed Projects', value: '7,500+', desc: 'Across leading CMS platforms', icon: <CheckCircle className="w-5 h-5 text-blue-500" /> },
    { label: '5-Star Reviews', value: '4,500+', desc: 'Verified customer feedback', icon: <Users className="w-5 h-5 text-emerald-500" /> },
    { label: 'Market Experience', value: '10+ Yrs', desc: 'Active growth consulting', icon: <Activity className="w-5 h-5 text-purple-500" /> },
    { label: 'SEO Engagements', value: '500+', desc: 'High-ticket ranking campaigns', icon: <TrendingUp className="w-5 h-5 text-cyan-500" /> },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background radial overlay */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Performance Core
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Performance Analytics & KPIs
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-550 leading-relaxed">
            A birds-eye view into PJ core performance deliverables.
          </p>
        </div>

        {/* Core Stats numerical cells */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {mainMetrics.map((met) => (
            <div
              key={met.label}
              className="relative overflow-hidden p-6 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {/* Top hover indicator */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center justify-between mb-4 text-slate-500">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform">
                  {met.icon}
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-white text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md shadow-2xs">
                  Live Verify
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono group-hover:text-blue-600 transition-colors">
                {met.value}
              </h3>
              <p className="text-xs font-bold text-slate-800 mt-1.5">
                {met.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-1 leading-normal font-medium">
                {met.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
