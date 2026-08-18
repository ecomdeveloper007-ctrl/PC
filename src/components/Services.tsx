/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Laptop, 
  Search, 
  Sparkles, 
  TrendingUp, 
  CheckCircle, 
  ArrowUpRight, 
  Zap, 
  Settings2
} from 'lucide-react';

interface PlatformDetails {
  name: string;
  tagline: string;
  description: string;
  stats: { speed: string; loadTime: string; focus: string };
  deliverables: string[];
  gigUrl: string;
  colorTheme: {
    primary: string;
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('shopify');

  const platforms: Record<string, PlatformDetails> = {
    shopify: {
      name: 'Shopify E-Commerce',
      tagline: 'High-Converting Digital Storefronts',
      description: 'Custom e-commerce architectures engineered for maximum average order value (AOV), seamless checkout pipelines, and lightning-fast product pages. Built to turn casual traffic into loyal customers.',
      stats: { speed: '98/100', loadTime: '< 1.2s', focus: 'Conversion & AOV' },
      deliverables: [
        'Custom Liquid section design & Shopify checkout extensibility',
        'Complex product options, custom bundles, and subscription mechanics',
        'Seamless integration of inventory, ERP, and tax configurations',
        'Mobile-first responsive UX with streamlined thumb-friendly navigation',
        'Optimized product page layouts with social proof and conversion hooks'
      ],
      gigUrl: 'https://www.fiverr.com/phoebe_johnson/create-shopify-dropshipping-store?ref_ctx_id=a08d7f3fd26c4018a1be53fa64ef15ae&pckg_id=1&source=seller_page',
      colorTheme: {
        primary: 'bg-emerald-600',
        bg: 'bg-emerald-50/40',
        border: 'border-emerald-200/60',
        text: 'text-emerald-700',
        accent: 'text-emerald-500'
      }
    },
    wordpress: {
      name: 'WordPress Portals',
      tagline: 'Secure, Scalable Business Foundations',
      description: 'Fully customized WordPress developments utilizing Elementor, Divi, or lightweight custom blocks. Ideal for content-heavy publishers, corporate portals, and regional service leaders.',
      stats: { speed: '95/100', loadTime: '< 1.5s', focus: 'Flexibility & Security' },
      deliverables: [
        'Bespoke theme layouts with clean, bloat-free semantic code structure',
        'Enterprise-grade security firewalls, spam protection, and auto-backups',
        'Built-in SEO architecture with local structured schema integrations',
        'Custom post types, advanced meta-queries, and dynamic service directories',
        'Comprehensive client training and custom documentation video guides'
      ],
      gigUrl: 'https://www.fiverr.com/phoebe_johnson/build-website-for-your-wordpress-website-design?ref_ctx_id=da6ec7ba96d745c0868d1262b870bef6&pckg_id=1&source=seller_page',
      colorTheme: {
        primary: 'bg-blue-600',
        bg: 'bg-blue-50/40',
        border: 'border-blue-200/60',
        text: 'text-blue-700',
        accent: 'text-blue-500'
      }
    },
    webflow: {
      name: 'Webflow & Framer',
      tagline: 'Award-Winning Interactive Masterpieces',
      description: 'Where fluid visual design meets breathtaking motion. High-fidelity interactive marketing sites featuring modern scroll-linked timelines, parallax, and exquisite layouts.',
      stats: { speed: '99/100', loadTime: '< 0.9s', focus: 'Immersive Branding' },
      deliverables: [
        'Advanced scroll-linked animations, CSS transitions, and SVG motion effects',
        'Super-sleek layouts built with clean, standards-compliant static structures',
        'Robust custom CMS design for effortless blog, team, and case studies publishing',
        'Custom javascript injections for tailored forms, calculators, and API states',
        'Lightning-fast CDN cloud hosting setup with zero maintenance overhead'
      ],
      gigUrl: 'https://www.fiverr.com/phoebe_johnson/webflow-website-design-figma-and-website-development?ref_ctx_id=da6ec7ba96d745c0868d1262b870bef6&pckg_id=1&source=seller_page',
      colorTheme: {
        primary: 'bg-purple-600',
        bg: 'bg-purple-50/40',
        border: 'border-purple-200/60',
        text: 'text-purple-700',
        accent: 'text-purple-500'
      }
    },
    squarespace: {
      name: 'Squarespace & Wix',
      tagline: 'Elegant Service & Boutique Showcases',
      description: 'Sleek, beautifully styled, and incredibly reliable web spaces designed for local service businesses, creative professionals, and medical clinics seeking a beautiful, easy-to-manage web footprint.',
      stats: { speed: '94/100', loadTime: '< 1.6s', focus: 'Intuitive Management' },
      deliverables: [
        'Tailored premium templates aligned perfectly with brand aesthetic specifications',
        'Integrated online scheduler, booking calendars, and service menus',
        'Advanced contact forms, interactive maps, and localized service widgets',
        'Newsletter signups, client dashboard access, and social feed sync',
        'Complete visual-editor handoff requiring zero coding skills for daily updates'
      ],
      gigUrl: 'https://www.fiverr.com/phoebe_johnson/website-seo-optimization-for-shopify-wordpress-wix?ref_ctx_id=da6ec7ba96d745c0868d1262b870bef6&pckg_id=1&source=seller_page',
      colorTheme: {
        primary: 'bg-cyan-600',
        bg: 'bg-cyan-50/40',
        border: 'border-cyan-200/60',
        text: 'text-cyan-700',
        accent: 'text-cyan-500'
      }
    }
  };

  const activePlatform = platforms[activeTab];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Visual background enhancements */}
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[10%] w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Core Solutions
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Web & Marketing Suite
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-semibold">
            Delivering state-of-the-art web architectures paired with precision conversion metrics to multiply digital footprints and incoming buyer pipelines.
          </p>
        </div>

        {/* ========================================== */}
        {/* WEBSITE DESIGN & DEVELOPMENT HIGHLIGHT UNIT */}
        {/* ========================================== */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded">
                PRIMARY EXPERTISE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Premium Website Design & Development
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 mt-1.5 max-w-2xl font-medium">
                Bespoke digital storefronts, corporate hubs, and high-converting marketing frameworks across any platform of choice. Every design is engineered for instant load speed, fluid accessibility, and maximized visitor actions.
              </p>
            </div>
          </div>

          {/* Interactive Showcase Layout */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-8 lg:p-10">
            
            {/* Horizontal Platform Selector Tab List */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-slate-50/50 p-1.5 sm:p-2 rounded-2xl border border-slate-200">
              {Object.keys(platforms).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center justify-center space-x-2 sm:space-x-2.5 py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl text-xs font-extrabold tracking-wide transition-all duration-300 cursor-pointer min-h-[44px] ${
                    activeTab === key
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Laptop className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeTab === key ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span className="truncate">{platforms[key].name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Showcase Main Detail Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-2 sm:pt-4">
              
              {/* Left Side: General Platform Metadata & Performance KPIs */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider mb-4">
                    <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse mr-1" />
                    <span>Specialized Platform Delivery</span>
                  </div>
                  
                  <h4 className="font-display text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {activePlatform.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-blue-600 font-extrabold mt-1 tracking-wide uppercase">
                    {activePlatform.tagline}
                  </p>
                  
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {activePlatform.description}
                  </p>
                </div>

                {/* Highly Visual Technical Metrics Panel */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100">
                  <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 sm:mb-4 block">
                    Verified Performance Delivery
                  </h5>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 sm:p-4 text-center">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold text-slate-500 uppercase block">PageSpeed</span>
                      <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block mt-0.5">{activePlatform.stats.speed}</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 sm:p-4 text-center">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold text-slate-500 uppercase block">Load Time</span>
                      <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block mt-0.5">{activePlatform.stats.loadTime}</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 sm:p-4 text-center">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold text-slate-500 uppercase block">Core Focus</span>
                      <span className="text-[9px] sm:text-[10px] font-black text-slate-900 leading-tight block mt-1 uppercase break-words">{activePlatform.stats.focus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Deliverables Checklist */}
              <div className="lg:col-span-7 bg-slate-50/50 rounded-2xl border border-slate-200 p-5 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2 mb-4 sm:mb-6 border-b border-slate-200/60 pb-3">
                    <Settings2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-600" />
                    <span>Included Scope of Work</span>
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {activePlatform.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                        <div className="mr-3 shrink-0 mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500 font-bold">
                    * Need custom third-party API configurations? Let me know in your request!
                  </div>
                  <a
                    href={activePlatform.gigUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md cursor-pointer self-start sm:self-center min-h-[44px]"
                  >
                    <span>Order {activePlatform.name.split(' ')[0]} Gig on Fiverr</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* COMPLIMENTARY OPTIMIZATION & GROWTH SUITE  */}
        {/* ========================================== */}
        <div>
          <div className="border-t border-slate-200 pt-16 mb-8">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded">
              GROWTH PLUGINS & INTEGRATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Synergistic Search & Conversion Optimizations
            </h3>
            <p className="text-xs sm:text-sm text-slate-550 mt-1.5 max-w-2xl font-medium">
              Amplify your newly launched or existing assets with technical marketing solutions. Aligning infrastructure with current search indexing formulas, social channels, and behavioral triggers.
            </p>
          </div>

          {/* Grid of secondary services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Advanced SEO */}
            <div className="group rounded-2xl bg-white border border-slate-200 p-8 hover:border-blue-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-50 text-cyan-650 shrink-0 shadow-sm border border-cyan-100">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-500 tracking-widest uppercase border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
                    SEO
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    Advanced Search Engine Optimization (SEO)
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-550 leading-relaxed font-medium">
                    Surgical white-hat techniques built around major index engines. Tuning semantic structured tags, crawl parameters, and secure high-authority placements to secure Page-1 visibility.
                  </p>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-2.5">
                  <div className="flex items-start text-xs text-slate-605 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Technical crawling fixes (Sitemap, Robot.txt, Canonical corrections)</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-655 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>On-Page copy optimization & metadata semantic structure mapping</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-655 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Page speed acceleration (Core Web Vitals diagnostic, clean styling)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="https://www.fiverr.com/phoebe_johnson/website-seo-optimization-for-shopify-wordpress-wix?ref_ctx_id=da6ec7ba96d745c0868d1262b870bef6&pckg_id=1&source=seller_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-750 transition-colors duration-205"
                >
                  <span>Order SEO Gig on Fiverr</span>
                  <ArrowUpRight className="ml-1 w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* GEO / AEO */}
            <div className="group rounded-2xl bg-white border border-slate-200 p-8 hover:border-blue-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-650 shrink-0 shadow-sm border border-purple-100">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-500 tracking-widest uppercase border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
                    AI SEARCH
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    Generative & Answer Engine Optimization
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-550 leading-relaxed font-medium">
                    Positioning services inside generative AI replies. Restructuring copywriting, citations, and product feeds so Perplexity, ChatGPT Search, and Gemini recommend your store.
                  </p>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-2.5">
                  <div className="flex items-start text-xs text-slate-605 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Answer-friendly semantic snippet structures mapping</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-655 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Knowledge graph citations expansion & structured sentiment pruning</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-655 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>AI reference indexing & brand authority amplification modeling</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="https://www.fiverr.com/phoebe_johnson/seo-backlinks-white-hat-off-page-build-dofollow-and-google-ranking?ref_ctx_id=da6ec7ba96d745c0868d1262b870bef6&pckg_id=1&source=seller_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-750 transition-colors duration-205"
                >
                  <span>Order Backlinks Gig on Fiverr</span>
                  <ArrowUpRight className="ml-1 w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* CRO Audits & Funnels */}
            <div className="group rounded-2xl bg-white border border-slate-200 p-8 hover:border-blue-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-rose-50 text-rose-650 shrink-0 shadow-sm border border-rose-100">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-500 tracking-widest uppercase border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
                    CRO AUDIT
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    CRO & Funnel Performance Auditing
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-550 leading-relaxed font-medium">
                    Locating drop-off blockages in digital customer journeys. Analyzing catalog flow, cart events, and check-out forms to remove click friction and lift average transaction rates.
                  </p>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-2.5">
                  <div className="flex items-start text-xs text-slate-605 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Friction-point behavioral maps audit & navigation streamlines</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-655 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Cart abandonment metrics fixing & custom-checkout recommendations</span>
                  </div>
                  <div className="flex items-start text-xs text-slate-655 leading-normal">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>Speed-to-purchase micro-interactions integration plans</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="https://www.fiverr.com/phoebe_johnson/shopify-website-design-shopify-design-shopify-store-shopify-redesign-shopify?ref_ctx_id=a08d7f3fd26c4018a1be53fa64ef15ae&pckg_id=1&source=seller_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-750 transition-colors duration-205"
                >
                  <span>Order Redesign Gig on Fiverr</span>
                  <ArrowUpRight className="ml-1 w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick link to all Fiverr Gigs */}
          <div className="mt-12 text-center">
            <a
              href="#fiverr-gigs"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all duration-200"
            >
              <span>Explore All 8 Verified Fiverr Service Gigs</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
