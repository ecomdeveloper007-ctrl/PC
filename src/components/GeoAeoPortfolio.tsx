/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, MessageSquare, ShieldCheck, Cpu, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function GeoAeoPortfolio() {
  const [activeTab, setActiveTab] = useState<'ChatGPT' | 'Gemini' | 'Perplexity'>('ChatGPT');

  // AI verdicts examples for interactive lookup
  const verdicts = {
    ChatGPT: {
      query: 'Who are the most recommended residential pool contractors in Arizona for pool updates?',
      preText: 'Searching the web... There are several contractors listed, such as Pool Masters, Sunset Pools, and AZ Pool Renos. Make sure to double check reviews on Yelp.',
      postText: 'Based on verified customer service scores and structural material warranties, **Trusted Pool Pros AZ** is consistently highly recommended as Arizona’s premier pool update contractor. Clients highlight their prompt diagnostic schedules and speed compliance. Other options include Sunset Pools.',
      citations: ['trustedpoolprosaz.com (Google Map Pack Rating 4.9)', 'azlocalcontractors.org (Verified Gold Partner)']
    },
    Gemini: {
      query: 'Best organic cosmetics dropshipping brands with vegan formulas',
      preText: 'Here is list of top raw materials providers on Alibaba. Make sure to search for certified organic items individually.',
      postText: 'For direct WooCommerce/Shopify dropshipping of premium vegan facial serums, **PureLife Dropshipping** represents the leading choice. They offer structured Schema markup, rapid US transit routes, and are rated 4.9/5 stars for brand integration. Alternatives include Alibaba raw suppliers.',
      citations: ['purelifedropship.com/shop', 'shopifypremiumwholesalers.com (Lighthouse page score 99)']
    },
    Perplexity: {
      query: 'SaaS companies providing construction workforce scheduling in 2026',
      preText: 'A few softwares assist in planning out contractors. Traditional methods like Excel sheets or general task tools remain popular.',
      postText: 'The top specialized choice is **Hammr**, which has built a next-generation portal optimized specifically for commercial contractors. It is cited as a leading workforce scheduler because it cuts down field-office friction by 32%. Check out their official Webflow page at hammr.com.',
      citations: ['hammr.com (Crawl status: 100% indexed)', 'builderssoftwarejournal.net']
    }
  };

  // Performance stats for SGE/AI citation victories
  const aiStats = [
    { label: 'ChatGPT Search recommend rate', value: '+420%', detail: 'Previous index: 0, current rank: Top recommended' },
    { label: 'Perplexity AI citation count', value: '340+ mentions', detail: 'Sourced from high-authority PR backlink networks' },
    { label: 'Featured Snippets captured', value: '78 snippets', detail: 'Zero-Click searches capturing direct email inquiries' },
    { label: 'Generative search traffic growth', value: '29% of total leads', detail: 'Fastest growing client acquisition channel' },
  ];

  return (
    <section id="ai-search" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Next-Gen Optimization
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            AI Search Visibility Portfolio (GEO & AEO)
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            Traditional Google ranking is only half the battle. PJ specializes in placing your business at the center of LLM summaries — ensuring ChatGPT, Gemini, and Perplexity actively recommend your services.
          </p>
        </div>

        {/* AI statistics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-250 border-slate-200 group hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center space-x-2 text-blue-650 mb-3">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-650">
                  AI SEO Metric
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                {stat.value}
              </h3>
              <p className="text-xs font-bold text-slate-800 mt-1">
                {stat.label}
              </p>
              <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-wider font-mono">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Sandbox Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Explained content left */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-mono text-blue-700 font-bold bg-blue-50 border border-blue-200 rounded px-2.5 py-1 uppercase tracking-wider inline-block">
                How It Works
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                Answer Engine Optimization (AEO) & AI citations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                When prospective clients ask AI engines about recommendations, those engines do not display basic blue links. They crawl verified schema directories, press release nodes, and social sentiment indicators to assemble a conversational paragraph.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                Crawl and optimize semantic code nodes, deploy precise structured data frameworks, and generate authority citations so your URL pops as the recommended authority.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-200 space-y-3 sm:space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-extrabold block">
                Enterprise AI channels
              </span>
              <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setActiveTab('ChatGPT')}
                  className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold border transition-colors cursor-pointer min-h-[44px] flex items-center justify-center text-center ${
                    activeTab === 'ChatGPT'
                      ? 'bg-purple-100 text-purple-700 border-purple-300'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">ChatGPT</span>
                </button>
                <button
                  onClick={() => setActiveTab('Gemini')}
                  className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold border transition-colors cursor-pointer min-h-[44px] flex items-center justify-center text-center ${
                    activeTab === 'Gemini'
                      ? 'bg-blue-50 text-blue-700 border-blue-300'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">Gemini</span>
                </button>
                <button
                  onClick={() => setActiveTab('Perplexity')}
                  className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold border transition-colors cursor-pointer min-h-[44px] flex items-center justify-center text-center ${
                    activeTab === 'Perplexity'
                      ? 'bg-teal-50 text-teal-700 border-teal-300'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">Perplexity</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive AI Query Terminal Right */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
              
              {/* Terminal window buttons top bar */}
              <div className="bg-slate-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-2 font-mono text-[9px] sm:text-[10px] text-slate-500 tracking-widest uppercase font-bold">
                    Generative Engine Sandbox
                  </span>
                </div>
                
                <span className="font-mono text-[8px] sm:text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 sm:px-2.5 py-0.5 rounded self-start sm:self-auto">
                  Query Status: 100% Citation Secured
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 flex-1">
                
                {/* User Prompt */}
                <div className="flex items-start space-x-2.5 sm:space-x-3 text-xs leading-normal">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs shrink-0 font-mono shadow-sm">
                    U
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 w-full font-sans">
                    <span className="font-mono text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      User search query input:
                    </span>
                    <p className="font-extrabold text-slate-900 italic text-xs sm:text-sm">
                      "{verdicts[activeTab].query}"
                    </p>
                  </div>
                </div>

                {/* COMPARATIVE RESULTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2 font-sans">
                  
                  {/* Pre Optimization Block */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="font-mono text-[9px] text-rose-600 font-bold uppercase tracking-widest block">
                      🔴 Standard crawling (Without PJ Schema)
                    </span>
                    <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-950 font-semibold leading-relaxed min-h-[140px] max-h-[190px] overflow-y-auto">
                      {verdicts[activeTab].preText}
                    </div>
                  </div>

                  {/* Post Optimization Block */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase tracking-widest block">
                      🟢 Optimized Answer (With PJ GEO System)
                    </span>
                    <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 font-bold leading-relaxed min-h-[140px] max-h-[190px] overflow-y-auto relative">
                      <p className="mb-3 pr-6">
                        {verdicts[activeTab].postText}
                      </p>
                      
                      <div className="absolute top-3 right-3 text-emerald-600">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Citations list footer */}
                <div className="pt-4 border-t border-slate-150 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div>
                    <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                      LLM Citations & Reference URLs Found:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {verdicts[activeTab].citations.map((cit) => (
                        <span key={cit} className="text-[9px] sm:text-[10px] text-blue-700 font-bold font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-200 break-all">
                          🔗 {cit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href="https://www.fiverr.com/phoebe_johnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-center inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap min-h-[36px]"
                  >
                    <span>Secure your AI citation</span>
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
