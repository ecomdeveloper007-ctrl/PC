/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ArrowUpRight, X, ExternalLink } from 'lucide-react';

export default function StickyFiverrCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const dismissBanner = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="rounded-2xl bg-slate-900 border border-blue-500/30 p-5 shadow-2xl relative overflow-hidden backdrop-blur-md"
          >
            {/* Ambient lighting inside overlay floating banner */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            
            {/* Close trigger */}
            <button
              onClick={dismissBanner}
              className="absolute top-3.5 right-3.5 text-slate-500 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Dismiss banner"
              id="sticky-dismiss-btn"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 fill-cyan-400/10" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-mono">
                    Expert Web Consultant
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-none">
                    Verified Professional
                  </p>
                </div>
              </div>

              <p className="text-[11px] leading-relaxed text-slate-300 font-medium font-sans">
                Ready to transform your conversions and traffic with PJ? Book a consult or check out our profile.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.fiverr.com/phoebe_johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center py-2 px-4 rounded-xl text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all text-center shadow-md shadow-blue-600/20"
                  id="sticky-fiverr-order"
                >
                  <span>View Profile</span>
                  <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center p-2 rounded-xl text-[11px] font-semibold text-slate-300 bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-all"
                  title="Ask a Question"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
