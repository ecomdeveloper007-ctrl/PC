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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {mainMetrics.map((met) => (
            <div
              key={met.label}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-205 hover:border-slate-300 transition-colors shadow-sm hover:shadow-md animate-fade-in"
            >
              <div className="flex items-center justify-between mb-3 text-slate-500">
                {met.icon}
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest bg-white text-blue-600 border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">
                  Live Verify
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                {met.value}
              </h3>
              <p className="text-[11px] font-bold text-slate-805 mt-1">
                {met.label}
              </p>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal font-semibold">
                {met.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
