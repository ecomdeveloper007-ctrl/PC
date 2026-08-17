/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Shopify' | 'WordPress' | 'Webflow' | 'Squarespace' | 'Wix' | 'Framer'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Filters mapping
  const filters: ('All' | 'Shopify' | 'WordPress' | 'Webflow' | 'Squarespace' | 'Wix' | 'Framer')[] = [
    'All', 'Shopify', 'WordPress', 'Webflow', 'Squarespace', 'Wix', 'Framer'
  ];

  // Filtered list
  const filteredProjects = useMemo(() => {
    setVisibleCount(12); // Reset page count when filter alters
    if (selectedFilter === 'All') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter(p => p.platform === selectedFilter);
  }, [selectedFilter]);

  // Current paginated list
  const paginatedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Lightbox handlers
  const openLightbox = (indexInFiltered: number) => {
    setLightboxIndex(indexInFiltered);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIndex < 0) nextIndex = filteredProjects.length - 1;
    if (nextIndex >= filteredProjects.length) nextIndex = 0;
    setLightboxIndex(nextIndex);
  };

  const selectedLightboxProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Subtle glows */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Case Gallery
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold text-slate-900 tracking-tight">
            Premium Web Portfolio
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
            Explore {PORTFOLIO_PROJECTS.length} verified layouts developed and optimized. Filter by platform to look around. Click any card to launch the immersive preview.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((flt) => (
            <button
              key={flt}
              onClick={() => setSelectedFilter(flt)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                selectedFilter === flt
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                  : 'bg-slate-50 text-slate-650 hover:text-slate-905 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {flt}
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                selectedFilter === flt
                  ? 'bg-blue-700/50 text-blue-100'
                  : 'bg-slate-200/60 text-slate-600'
              }`}>
                {flt === 'All'
                  ? PORTFOLIO_PROJECTS.length
                  : PORTFOLIO_PROJECTS.filter(p => p.platform === flt).length}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, index) => {
              // Get original index in filtered array
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300"
                >
                  {/* Thumbnail Cover container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-200">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Dim Overlay with Quick Preview triggers */}
                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={() => openLightbox(index)}
                        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all text-xs font-semibold flex items-center space-x-1.5 shadow-lg cursor-pointer"
                        title="Quick View Details"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect</span>
                      </button>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:scale-110 active:scale-95 transition-all text-xs font-semibold flex items-center space-x-1.5 shadow-lg"
                        title="Visit Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit</span>
                      </a>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-20 px-2 py-0.5 rounded border border-blue-100">
                        {project.platform}
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold">
                        {project.industry}
                      </span>
                    </div>

                    <h3
                      onClick={() => openLightbox(index)}
                      className="font-display font-bold text-slate-900 text-base hover:text-blue-600 transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    {/* Visit / Info link button */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => openLightbox(index)}
                        className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-semibold cursor-pointer"
                      >
                        View Project Scope
                      </button>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button if projects remain */}
        {filteredProjects.length > visibleCount && (
          <div className="mt-16 flex justify-center animate-fade-in">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-8 py-3.5 rounded-full text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-98 transition-all cursor-pointer shadow-sm"
            >
              Load More Projects ({filteredProjects.length - visibleCount} hidden)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Immersive Slide Modal */}
      <AnimatePresence>
        {selectedLightboxProject && lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md cursor-zoom-out"
            ></motion.div>

            {/* Modal Body card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-4xl rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button element */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/60 md:bg-slate-900/10 md:hover:bg-slate-900/25 border border-white/20 md:border-slate-200/50 text-white md:text-slate-700 md:hover:text-slate-900 transition-all z-20 cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center backdrop-blur-sm"
                aria-label="Close Lightbox"
                id="close-lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Huge Screenshot slider */}
              <div className="md:col-span-7 bg-slate-50 relative aspect-[16/10] max-h-[260px] sm:max-h-[320px] md:max-h-none md:aspect-auto md:h-full flex items-center justify-center overflow-hidden">
                <img
                  src={selectedLightboxProject.imageUrl}
                  alt={selectedLightboxProject.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Left navigation arrows */}
                <button
                  onClick={() => navLightbox('prev')}
                  className="absolute left-3 sm:left-4 p-2.5 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-200/35 text-white hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="Previous Slide"
                  id="lightbox-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation arrows */}
                <button
                  onClick={() => navLightbox('next')}
                  className="absolute right-3 sm:right-4 p-2.5 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-200/35 text-white hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="Next Slide"
                  id="lightbox-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Column: Brief details */}
              <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-5">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase tracking-wider">
                      {selectedLightboxProject.platform}
                    </span>
                    <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {selectedLightboxProject.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-bold">
                      Industry Sector: {selectedLightboxProject.industry}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">
                      Delivered Enhancements
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4 font-sans font-semibold">
                      <li>Complete responsive wireframe layout overhaul</li>
                      <li>Optimized image delivery and speed audits</li>
                      <li>Full on-page SEO schema tags matching local search</li>
                      <li>Highly optimized, secure modular code structure</li>
                    </ul>
                  </div>

                  <p className="text-[11px] text-slate-400 italic font-medium">
                    All portfolio sites are deployed live and monitored. Results may vary depending on local active campaigns.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={selectedLightboxProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md cursor-pointer text-center min-h-[44px]"
                    id="lightbox-live-link"
                  >
                    <span>Visit Live Client Site</span>
                    <ExternalLink className="ml-2 w-3.5 h-3.5" />
                  </a>

                  <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider font-mono font-bold">
                    Slide {lightboxIndex + 1} of {filteredProjects.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
