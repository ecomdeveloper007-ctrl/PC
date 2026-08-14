/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import GeoAeoPortfolio from './components/GeoAeoPortfolio';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Process from './components/Process';
import DashboardMetrics from './components/DashboardMetrics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyFiverrCTA from './components/StickyFiverrCTA';

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-600/10 selection:text-blue-900 animate-fade-in">
      {/* Dynamic Navigation */}
      <Header />

      <main>
        {/* Core Sections */}
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <GeoAeoPortfolio />
        <Testimonials />
        <Features />
        <Process />
        <DashboardMetrics />
        <Contact />
      </main>

      {/* Primary Footer */}
      <Footer />

      {/* Floating Convertive CTA Tracker */}
      <StickyFiverrCTA />
    </div>
  );
}
