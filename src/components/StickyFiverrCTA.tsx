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
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 sm:max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="rounded-3xl bg-slate-900/95 border border-slate-750 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden backdrop-blur-xl"
          >
            {/* Ambient lighting inside overlay floating banner */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-400"></div>
            
            {/* Close trigger */}
            <button
              onClick={dismissBanner}
              className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center cursor-pointer"
              aria-label="Dismiss banner"
              id="sticky-dismiss-btn"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-3.5">
              <div className="flex items-center space-x-3 pr-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
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

              <p className="text-xs leading-relaxed text-slate-300 font-medium font-sans">
                Ready to transform your conversions and traffic with PJ? Book a consult or check out our profile.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="#fiverr-gigs"
                  onClick={() => setIsVisible(false)}
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-3.5 rounded-xl text-xs font-bold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all text-center shadow-md shadow-blue-600/25 active:scale-95 cursor-pointer"
                  id="sticky-fiverr-gigs"
                >
                  <span>View 8 Gigs</span>
                  <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                </a>
                
                <a
                  href="https://www.fiverr.com/phoebe_johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
                  title="Fiverr Profile"
                  id="sticky-fiverr-order"
                >
                  <span>Profile</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
