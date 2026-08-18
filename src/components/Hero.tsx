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
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Soft elegant glowing light gradients in the background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-slate-200/50 blur-[150px] pointer-events-none"></div>
      {/* Decorative tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-45 pointer-events-none"></div>

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
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge.id}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:border-blue-500/30 transition-colors duration-300 shadow-sm"
              >
                {getBadgeIcon(badge.icon)}
                <span>{badge.text}</span>
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto"
          >
            Transform Your Online Presence Into a{' '}
            <span className="relative inline-block text-blue-600 underline decoration-4 sm:decoration-8 decoration-blue-100 underline-offset-4 sm:underline-offset-[12px]">
              Revenue-Generating Machine
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium"
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95 transition-all duration-300 min-h-[48px]"
              id="hero-fiverr-gigs"
            >
              <span>Explore 8 Verified Gigs</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm active:scale-95 transition-all duration-300 min-h-[48px]"
              id="hero-portfolio"
            >
              <span>View Portfolio</span>
            </a>
            <a
              href="https://www.fiverr.com/phoebe_johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-95 transition-all duration-300 min-h-[48px]"
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
                className={`relative overflow-hidden p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/30 transition-all duration-300 group shadow-sm hover:shadow-md ${
                  i === HERO_STATS.length - 1 ? 'col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-mono group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </span>
                  {i === 1 && (
                    <div className="flex gap-0.5 text-amber-400 shrink-0">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                    </div>
                  )}
                </div>
                <p className="mt-2 text-xs font-bold text-slate-800 tracking-wide">
                  {stat.label}
                </p>
                <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500 font-medium leading-relaxed">
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
              className="inline-flex flex-col items-center text-slate-450 hover:text-slate-800 transition-colors duration-200 group gap-1"
              aria-label="Scroll to About Section"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase">Learn More</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-blue-500 group-hover:text-blue-600" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
