/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Star, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  ShoppingBag,
  Globe,
  Search,
  Laptop
} from 'lucide-react';
import { FIVERR_GIGS } from '../data';
import { FiverrGig } from '../types';

export default function FiverrGigs() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Shopify' | 'WordPress' | 'Webflow' | 'SEO'>('All');

  const categories: { label: string; value: 'All' | 'Shopify' | 'WordPress' | 'Webflow' | 'SEO'; count: number }[] = [
    { label: 'All Services', value: 'All', count: FIVERR_GIGS.length },
    { label: 'Shopify Stores', value: 'Shopify', count: FIVERR_GIGS.filter(g => g.category === 'Shopify').length },
    { label: 'WordPress Development', value: 'WordPress', count: FIVERR_GIGS.filter(g => g.category === 'WordPress').length },
    { label: 'Webflow & Figma', value: 'Webflow', count: FIVERR_GIGS.filter(g => g.category === 'Webflow').length },
    { label: 'SEO & Backlinks', value: 'SEO', count: FIVERR_GIGS.filter(g => g.category === 'SEO').length },
  ];

  const filteredGigs = activeCategory === 'All' 
    ? FIVERR_GIGS 
    : FIVERR_GIGS.filter(gig => gig.category === activeCategory);

  const getCategoryIcon = (category: FiverrGig['category']) => {
    switch (category) {
      case 'Shopify':
        return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case 'WordPress':
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 'Webflow':
        return <Laptop className="w-4 h-4 text-purple-600" />;
      case 'SEO':
        return <Search className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  const getCategoryColor = (category: FiverrGig['category']) => {
    switch (category) {
      case 'Shopify':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'WordPress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Webflow':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'SEO':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="fiverr-gigs" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-emerald-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Official Fiverr Verified Gigs</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Order Direct on Fiverr
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-semibold">
            Choose from my verified service packages with full escrow buyer protection, guaranteed on-time delivery, and 4,500+ five-star reviews.
          </p>

          {/* Quick trust metrics */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="flex items-center justify-center space-x-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="font-bold text-slate-900 text-sm">4.9 / 5.0</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mt-0.5">Fiverr Rating</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="font-bold text-slate-900 text-sm">4,500+</span>
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mt-0.5">Reviews Count</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="flex items-center justify-center space-x-1 text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-bold text-slate-900 text-sm">100% Escrow</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mt-0.5">Secure Orders</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="flex items-center justify-center space-x-1 text-blue-600">
                <Clock className="w-4 h-4" />
                <span className="font-bold text-slate-900 text-sm">On-Time</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mt-0.5">Delivery Promise</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer min-h-[40px] ${
                activeCategory === cat.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                activeCategory === cat.value 
                  ? 'bg-slate-700 text-slate-200' 
                  : 'bg-slate-200/80 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGigs.map((gig) => (
            <div
              key={gig.id}
              className={`rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl group relative overflow-hidden ${
                gig.popular 
                  ? 'border-blue-300 ring-1 ring-blue-500/20 shadow-md' 
                  : 'border-slate-200 hover:border-blue-400/50 shadow-sm'
              }`}
            >
              {/* Highlight ribbon if popular */}
              {gig.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest text-center py-1 px-3">
                  🔥 Highly Requested Gig
                </div>
              )}

              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Category & Badge Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${getCategoryColor(gig.category)}`}>
                    {getCategoryIcon(gig.category)}
                    <span>{gig.category}</span>
                  </div>

                  <span className="font-mono text-[10px] font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase">
                    {gig.badge}
                  </span>
                </div>

                {/* Gig Title */}
                <div>
                  <h3 className="font-display text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug line-clamp-2">
                    {gig.title}
                  </h3>
                  
                  {/* Rating & Review count */}
                  <div className="flex items-center space-x-1.5 mt-2 text-xs">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span className="ml-1 font-bold text-slate-900">{gig.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-slate-400 font-bold">•</span>
                    <span className="text-slate-500 text-[11px] font-medium font-mono">({gig.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                  {gig.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-1.5">
                    {gig.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-[11px] text-slate-700 leading-tight font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Delivery Time & Order Button */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3 pt-3 border-t border-slate-100 font-mono">
                  <div className="flex items-center space-x-1 text-slate-600 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Delivery: {gig.deliveryTime}</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Fiverr Escrow
                  </span>
                </div>

                <a
                  href={gig.gigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/20 group/btn"
                  id={`fiverr-gig-btn-${gig.id}`}
                >
                  <span>Order Gig on Fiverr</span>
                  <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Custom Requests */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Need a custom package or multi-store setup?</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
              Have a tailored project or bespoke requirement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Send me a direct inquiry on Fiverr to receive a custom quote within 24 hours with exact milestone breakdowns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md min-h-[44px]"
            >
              <span>View Main Seller Profile</span>
              <ExternalLink className="ml-2 w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/30 min-h-[44px]"
            >
              <span>Contact via Website</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
