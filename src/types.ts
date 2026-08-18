/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  platform: 'Shopify' | 'WordPress' | 'Webflow' | 'Squarespace' | 'Wix' | 'Framer';
  industry: string;
  websiteUrl: string;
  imageUrl: string;
}

export interface SeoCaseStudy {
  id: string;
  projectName: string;
  industry: string;
  serviceType: 'Technical SEO' | 'On-Page SEO' | 'Off-Page SEO' | 'Local SEO' | 'eCommerce SEO' | 'GEO' | 'AEO';
  before: string;
  after: string;
  keywordsRanked: string[];
  trafficGrowthPercent: number;
  rankingImprovement: string;
  leadGenImpact: string;
  caseStudyLink: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: 'Website Design' | 'SEO' | 'AI Search Optimization' | 'SMM' | 'CRO Audit';
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  servicePurchased: string;
  avatarUrl: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FiverrGig {
  id: string;
  title: string;
  category: 'Shopify' | 'WordPress' | 'Webflow' | 'SEO';
  badge: string;
  rating: number;
  reviewsCount: string;
  description: string;
  keyFeatures: string[];
  gigUrl: string;
  deliveryTime: string;
  popular?: boolean;
}
