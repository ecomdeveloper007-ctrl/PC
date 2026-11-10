/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Star, Award, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import { HERO_STATS, TRUST_BADGES } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', sharpness: 100, damping: 15 }
    }
  };

  // Map icon strings to Lucide components
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-4 h-4 text-blue-600 mr-1.5 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-600 mr-1.5 shrink-0" />;
      case 'Clock': return <CheckCircle2 className="w-4 h-4 text-blue-600 mr-1.5 shrink-0" />;
      case 'Star': return <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1.5 shrink-0" />;
      default: return <Star className="w-4 h-4 text-blue-600 mr-1.5 shrink-0" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Ambient background lighting and subtle blueprint mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-linear-to-tr from-blue-500/10 via-indigo-500/5 to-cyan-400/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute -top-20 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>
      
      {/* Decorative dot matrix overlay */}
      <div className="absolute inset-0 bg-dot-blue opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Trust Badges Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8"
          >
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge.id}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-blue-500/40 hover:bg-white hover:text-blue-700 transition-all duration-200 shadow-xs group"
              >
                {getBadgeIcon(badge.icon)}
                <span>{badge.text}</span>
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto"
          >
            Transform Your Online Presence Into a{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700">
              Revenue-Generating Machine
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-linear-to-r from-blue-600/40 via-indigo-500/60 to-transparent rounded-full"></span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-slate-650 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            With 10+ years of experience in website design, SEO, AI search optimization, and digital marketing, I help businesses create stunning websites that rank higher, convert better, and grow faster.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <a
              href="#fiverr-gigs"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-linear-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 active:scale-95 transition-all duration-300 min-h-[50px] group cursor-pointer"
              id="hero-fiverr-gigs"
            >
              <span>Explore 8 Verified Gigs</span>
              <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200/90 shadow-xs hover:shadow-md active:scale-95 transition-all duration-300 min-h-[50px] cursor-pointer"
              id="hero-portfolio"
            >
              <span>View Portfolio</span>
            </a>
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-slate-700 bg-slate-100/80 hover:bg-slate-200/90 border border-slate-200/70 active:scale-95 transition-all duration-300 min-h-[50px] cursor-pointer"
              id="hero-fiverr"
            >
              <span>Fiverr Profile</span>
            </a>
          </motion.div>

          {/* Analytics Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-left"
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group ${
                  i === HERO_STATS.length - 1 ? 'col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Top indicator line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </span>
                  {i === 1 && (
                    <div className="flex gap-0.5 text-amber-400 shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                    </div>
                  )}
                </div>
                <p className="mt-2 text-xs font-bold text-slate-800 tracking-wide">
                  {stat.label}
                </p>
                <p className="mt-1 text-[11px] text-slate-500 font-medium leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Down Hint Anchor */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-slate-400 hover:text-blue-600 transition-colors duration-200 group gap-1.5"
              aria-label="Scroll to About Section"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">Explore Profile</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-blue-500 group-hover:text-blue-600" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
