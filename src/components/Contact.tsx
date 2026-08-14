/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, CheckCircle2, ChevronDown, Clock, ShieldCheck, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    serviceNeeded: 'Shopify Store Development',
    budget: '$3,000 - $5,000',
    details: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Shopify Store Development',
    'WordPress Development (Elementor/Divi)',
    'Webflow Customized Layout',
    'Squarespace / Wix Design Overhaul',
    'Framer Landing Page',
    'Search Engine Optimization (SEO)',
    'Generative Engine Optimization (GEO/AEO)',
    'Conversion Audit & CRO Funnels',
    'Digital SMM Ad Strategy',
    'Custom tailored enterprise setup'
  ];

  const budgetTiers = [
    'Less than $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field check validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('A valid email address is required.');
      return;
    }
    if (!formData.details.trim()) {
      setErrorMsg('Project Details are required.');
      return;
    }

    setLoading(true);

    // Simulate sending payload to prakashinfosys1234@gmail.com
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Form submission payload received successfully:', {
        recipient: 'prakashinfosys1234@gmail.com',
        timestamp: new Date().toISOString(),
        payload: formData
      });
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      websiteUrl: '',
      serviceNeeded: 'Shopify Store Development',
      budget: '$3,000 - $5,000',
      details: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background radial overlay styling */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
            Work Together
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold text-slate-900 tracking-tight">
            Initiate Your Project Audit
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
            Ready to design a pristine, high-converting digital storefront or secure your AI search citations? Connect details below. PJ reviews submissions within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>
              
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold tracking-widest uppercase flex items-center bg-emerald-55 bg-emerald-50 border border-emerald-200 w-fit px-2.5 py-1 rounded shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
                  Currently booking Q3 2026
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-slate-900 tracking-tight">
                  Let's craft your high-converting assets
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 mt-2 leading-relaxed font-semibold">
                  Have unique requirements or need customized back-end configurations? Hand over current catalog URLs for a direct site bottleneck assessment upon receipt.
                </p>
              </div>

              {/* Direct channels parameters */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 text-xs">
                  <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block font-bold">Location base</span>
                    <span className="text-slate-900 font-bold mt-0.5 block">
                      Virginia, United States
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 text-xs">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block font-bold">Global Response Clock</span>
                    <span className="text-slate-900 font-bold mt-0.5 block">
                      Guaranteed within 24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-6 border-t border-slate-205 border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
                  <span className="font-extrabold text-slate-900">Service Satisfaction Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal font-semibold">
                  All transactions and service scopes ordered through our custom links sync through our secure client networks.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Banner */}
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold">
                        ⚠️ {errorMsg}
                      </div>
                    )}

                    {/* Double raw layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="space-y-1.5 text-xs">
                        <label htmlFor="fullName" className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                          Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-colors font-semibold placeholder:text-slate-400"
                        />
                      </div>

                      {/* Email Address input */}
                      <div className="space-y-1.5 text-xs">
                        <label htmlFor="email" className="font-bold text-slate-705 text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                          Email Address <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-colors font-semibold placeholder:text-slate-400"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Company Name */}
                      <div className="space-y-1.5 text-xs">
                        <label htmlFor="companyName" className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Elysian Beauty Ltd."
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-colors font-semibold placeholder:text-slate-400"
                        />
                      </div>

                      {/* Website URL */}
                      <div className="space-y-1.5 text-xs">
                        <label htmlFor="websiteUrl" className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                          Current Website URL
                        </label>
                        <input
                          type="url"
                          id="websiteUrl"
                          name="websiteUrl"
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          placeholder="https://mybrand.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-205 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-colors font-semibold placeholder:text-slate-400"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Service Needed Dropdown */}
                      <div className="space-y-1.5 text-xs">
                        <label htmlFor="serviceNeeded" className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                          Service Needed
                        </label>
                        <div className="relative">
                          <select
                            id="serviceNeeded"
                            name="serviceNeeded"
                            value={formData.serviceNeeded}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-colors font-semibold appearance-none cursor-pointer"
                          >
                            {servicesList.map((srv) => (
                              <option key={srv} value={srv} className="bg-white text-slate-800 font-semibold">
                                {srv}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                      </div>

                      {/* Project Budget Selector */}
                      <div className="space-y-1.5 text-xs">
                        <label htmlFor="budget" className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                          Project Budget
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-colors font-semibold appearance-none cursor-pointer"
                          >
                            {budgetTiers.map((tier) => (
                              <option key={tier} value={tier} className="bg-white text-slate-800 font-semibold">
                                {tier}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                      </div>

                    </div>

                    {/* Project Details */}
                    <div className="space-y-1.5 text-xs">
                      <label htmlFor="details" className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[10px]">
                        Project Details <span className="text-blue-600">*</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        required
                        rows={5}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Please sketch out your store goals, targeted keywords or speed diagnostics..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs transition-all font-semibold resize-none placeholder:text-slate-400"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center py-4 bg-blue-600 hover:bg-blue-700 font-bold text-white text-xs rounded-xl shadow-lg shadow-blue-200 active:scale-98 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      id="contact-submit"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>

                  </form>
                ) : (
                  /* Success State display overlay */
                  <div className="text-center py-12 px-4 space-y-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-extrabold text-slate-900">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm text-slate-655 text-slate-600 max-w-md mx-auto leading-relaxed font-semibold">
                        "Thank you! Your inquiry has been received successfully. I'll get back to you within 24 hours."
                      </p>
                    </div>

                    <p className="text-xs text-slate-455 text-slate-500 font-mono font-bold">
                      Submissions forwarded to: <span className="text-slate-600 text-[11px]">prakashinfosys1234@gmail.com</span>
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white transition-all rounded-lg text-xs font-semibold cursor-pointer shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
