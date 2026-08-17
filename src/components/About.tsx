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
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              {/* Outer micro border shadow overlay */}
              <div className="absolute -inset-1 rounded-3xl bg-blue-600/5 group-hover:bg-blue-600/10 blur-md transition-colors duration-500"></div>
              
              {/* Profile Wrapper */}
              <div className="relative rounded-2xl bg-white p-3 sm:p-4 border border-slate-200 shadow-sm">
                <div className="relative rounded-xl overflow-hidden bg-slate-50 flex flex-col items-center justify-center p-5 sm:p-8 text-center border border-slate-100">
                  
                  {/* Profile avatar image */}
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 mb-4 sm:mb-5 ring-4 ring-emerald-500/20 shadow-lg relative shrink-0">
                    <img
                      src={pjPhoto}
                      alt="PJ - Ecommerce & SEO Specialist"
                      className="w-full h-full object-cover rounded-full shadow-inner"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900">PJ</h3>
                  <p className="text-xs font-mono text-blue-600 uppercase tracking-widest mt-1 font-semibold">Ecommerce Expert & Partner</p>
                  
                  <div className="flex items-center space-x-1.5 text-xs text-slate-600 mt-3 sm:mt-4 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Virginia, United States</span>
                  </div>

                  {/* Trust markers inside details */}
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 w-full grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Rating</span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center">
                        4.9/5 <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 ml-1" />
                      </span>
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Account status</span>
                      <span className="text-xs font-bold text-blue-600">Verified Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro badges block */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-905">Certified Expert</h4>
                    <p className="text-[10px] text-slate-550 mt-0.5 leading-tight">Top Tier Delivery</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-905">Conversion Expert</h4>
                    <p className="text-[10px] text-slate-550 mt-0.5 leading-tight">Lighthouse 95+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio details & Experience timeline */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">About Me</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight animate-fade-in">
                Meet PJ
              </h2>
              <div className="mt-6 space-y-4 font-sans text-slate-650 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm PJ from Virginia, US. With more than 10 years of experience in Digital and Internet Marketing, I specialize in Shopify, WordPress, Webflow store design, SEO, and dropshipping—along with building high-quality eCommerce websites on other leading platforms.
                </p>
                <p>
                  I’m passionate about creating clean, conversion-focused stores that help brands grow. My goal is to deliver optimized, winning-product setups that drive real results.
                </p>
                <p className="font-bold text-slate-900">
                  Let’s build a powerful online store tailored to your eCommerce success.
                </p>
              </div>
            </div>

            {/* Expertise grid */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900">Expertise & Skillsets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ABOUT_EXPERTISE.map((exp) => (
                  <div key={exp.category} className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                    <h4 className="text-xs font-mono font-bold text-blue-650 uppercase tracking-wider mb-3">
                      {exp.category}
                    </h4>
                    <ul className="space-y-2">
                      {exp.skills.map((skill) => (
                        <li key={skill} className="flex items-start text-xs text-slate-650">
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
