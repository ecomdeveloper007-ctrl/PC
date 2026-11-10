/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, CheckCircle2, MapPin, Zap, Star, ShieldAlert } from 'lucide-react';
import { ABOUT_EXPERTISE } from '../data';
import pjPhoto from '../assets/images/Pj.webp';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Soft elegance flare */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Portrait Card and Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              {/* Outer micro border shadow overlay */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600/10 to-indigo-600/10 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 blur-lg transition-all duration-500"></div>
              
              {/* Profile Wrapper */}
              <div className="relative rounded-3xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 flex flex-col items-center justify-center p-6 sm:p-8 text-center border border-slate-100">
                  
                  {/* Profile avatar image */}
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 mb-4 sm:mb-5 ring-4 ring-blue-500/15 shadow-xl relative shrink-0 bg-white">
                    <img
                      src={pjPhoto}
                      alt="PJ - Ecommerce & SEO Specialist"
                      className="w-full h-full object-cover rounded-full shadow-inner"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <h3 className="font-display text-2xl font-bold text-slate-900">PJ</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">Verified Pro</span>
                  </div>
                  <p className="text-xs font-mono text-blue-600 uppercase tracking-widest mt-1 font-semibold">Ecommerce Expert & Partner</p>
                  
                  <div className="flex items-center space-x-1.5 text-xs text-slate-650 mt-3 sm:mt-4 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-medium">Virginia, United States</span>
                  </div>

                  {/* Trust markers inside details */}
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-left bg-white p-3 rounded-xl border border-slate-200/60">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">Rating</span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center mt-0.5">
                        4.9/5 <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 ml-1" />
                      </span>
                    </div>
                    <div className="text-left bg-white p-3 rounded-xl border border-slate-200/60">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">Account status</span>
                      <span className="text-xs font-bold text-blue-600 block mt-0.5">Top-Rated Seller</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro badges block */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Certified Expert</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-tight font-medium">Top Tier Delivery</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Conversion Expert</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-tight font-medium">Lighthouse 95+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio details & Experience timeline */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <span>About Me</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet PJ
              </h2>
              <div className="mt-6 space-y-4 font-sans text-slate-650 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm PJ from Virginia, US. With more than 10 years of experience in Digital and Internet Marketing, I specialize in Shopify, WordPress, Webflow store design, SEO, and dropshipping—along with building high-quality eCommerce websites on other leading platforms.
                </p>
                <p>
                  I’m passionate about creating clean, conversion-focused stores that help brands grow. My goal is to deliver optimized, winning-product setups that drive real results.
                </p>
                <p className="font-bold text-slate-900 bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-600">
                  Let’s build a powerful online store tailored to your eCommerce success.
                </p>
              </div>
            </div>

            {/* Expertise grid */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900">Expertise & Skillsets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ABOUT_EXPERTISE.map((exp) => (
                  <div key={exp.category} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-sm hover:bg-white transition-all group">
                    <h4 className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-3 group-hover:text-blue-700">
                      {exp.category}
                    </h4>
                    <ul className="space-y-2">
                      {exp.skills.map((skill) => (
                        <li key={skill} className="flex items-start text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
