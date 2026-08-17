/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Shopify' | 'WordPress & Webflow' | 'Local business & SEO'>('All');
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter reviews
  const filteredReviews = TESTIMONIALS.filter((rev) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Shopify') return rev.company.toLowerCase().includes('shopify') || rev.servicePurchased.toLowerCase().includes('shopify');
    if (activeCategory === 'WordPress & Webflow') return rev.company.toLowerCase().includes('wordpress') || rev.company.toLowerCase().includes('webflow') || rev.servicePurchased.toLowerCase().includes('wordpress') || rev.servicePurchased.toLowerCase().includes('webflow');
    if (activeCategory === 'Local business & SEO') return rev.company.toLowerCase().includes('local') || rev.company.toLowerCase().includes('clinic') || rev.company.toLowerCase().includes('law') || rev.servicePurchased.toLowerCase().includes('seo') || rev.servicePurchased.toLowerCase().includes('map');
    return true;
  });

  const nextSlider = () => {
    setActiveIndex((prev) => (prev + 1 >= filteredReviews.length ? 0 : prev + 1));
  };

  const prevSlider = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? filteredReviews.length - 1 : prev - 1));
  };

  // Adjust indexes if category boundaries truncate index
  const safeIndex = activeIndex >= filteredReviews.length ? 0 : activeIndex;
  const currentReview = filteredReviews[safeIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Visual glowing layout */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Social Proof
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Success & Star Reviews
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
            Over 4,500+ client projects completed with five-star ratings. Our custom conversion architectures deliver measurable financial changes.
          </p>
        </div>

        {/* Global Rating Score Banner */}
        <div className="mb-12 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3.5 sm:space-x-4 shadow-sm">
            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-amber-500" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.9 / 5.0</span>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-wide">
                Average Customer Satisfaction
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3.5 sm:space-x-4 shadow-sm">
            <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 font-bold" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">4,500+</span>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-wide">
                Verified Global Reviews
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3.5 sm:space-x-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/10 text-cyan-600 shrink-0">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 font-bold" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900">Elite Specialist</span>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-wide">
                Verified top-tier consultant
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs for Review selection */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12 border-b border-slate-200 pb-5 sm:pb-6">
          {(['All', 'Shopify', 'WordPress & Webflow', 'Local business & SEO'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(0);
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors cursor-pointer min-h-[38px] ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonial Active Display Slide */}
        <div className="max-w-4xl mx-auto">
          {currentReview ? (
            <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-12 shadow-sm">
              <span className="absolute top-4 right-6 sm:top-6 sm:right-8 text-slate-100/70 pointer-events-none">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1.5]" />
              </span>

              <div className="relative z-10 space-y-5 sm:space-y-6">
                
                {/* 5 stars rating */}
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: currentReview.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500 font-bold" />
                  ))}
                </div>

                {/* Review Message Text */}
                <p className="font-sans text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed italic font-semibold">
                  "{currentReview.review}"
                </p>

                {/* Account Details Footer card */}
                <div className="pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={currentReview.avatarUrl}
                      alt={currentReview.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-500/20 shadow-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {currentReview.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-bold">
                        {currentReview.company}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[9px] sm:text-[10px] font-mono font-extrabold text-blue-600 uppercase tracking-widest block">
                      Services Purchased:
                    </span>
                    <span className="text-xs font-bold text-slate-700 mt-0.5 sm:mt-1 block">
                      {currentReview.servicePurchased}
                    </span>
                  </div>
                </div>

              </div>
              
              {/* Slider Direction controls */}
              <div className="absolute left-0 right-0 -bottom-6 flex justify-center space-x-3 z-20">
                <button
                  onClick={prevSlider}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer min-w-[44px] min-h-[44px]"
                  aria-label="Previous review"
                  id="review-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlider}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer min-w-[44px] min-h-[44px]"
                  aria-label="Next review"
                  id="review-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          ) : (
            <div className="text-center p-12 text-slate-400 font-bold">
              No testimonials match the active category selection.
            </div>
          )}

          {/* Slider Pagination Indicators list */}
          <div className="mt-12 flex justify-center space-x-1.5">
            {filteredReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'bg-blue-600 w-6' : 'bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
