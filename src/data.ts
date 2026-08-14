/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SeoCaseStudy, ServiceItem, Testimonial, TimelineStep, Feature } from './types';

export const HERO_STATS = [
  { value: '7,500+', label: 'Projects Completed', sub: 'Global eCommerce & Web Delivery' },
  { value: '4,500+', label: 'Verified Reviews', sub: 'Verified 5-Star Feedback' },
  { value: 'EXPERT', label: 'Web & SEO Specialist', sub: 'Verified Professional' },
  { value: '10+', label: 'Years Experience', sub: 'Internet Marketing & Web Design' },
  { value: '500+', label: 'SEO Campaigns', sub: 'Ranking Improvements & Audit Success' },
];

export const TRUST_BADGES = [
  { id: 'badge-1', text: 'Elite Web Designer', icon: 'Award' },
  { id: 'badge-2', text: 'Certified Specialist', icon: 'ShieldCheck' },
  { id: 'badge-3', text: '10+ Years Experience', icon: 'Clock' },
  { id: 'badge-4', text: '4,500+ Verified Reviews', icon: 'Star' },
];

export const TIMELINE_EXPERIENCE = [
  { year: '2016', title: 'Founded Core Digital Solutions', desc: 'Started helping local businesses scale utilizing technical SEO and Shopify/WordPress infrastructure.' },
  { year: '2019', title: 'Premier Service Milestone', desc: 'Achieved premier consultant status, completing over 3,000 custom web projects with elite customer ratings.' },
  { year: '2022', title: 'GEO & Webflow Scaling', desc: 'Pioneered Generative Engine Optimization (GEO) processes for early tech adopters, expanding to premium design on Framer & Webflow.' },
  { year: '2026', title: 'PJ Digital Solutions Ltd.', desc: 'Offering elite Shopify, SEO audits, and AI-search mapping services to high-growth stores worldwide.' },
];

export const ABOUT_EXPERTISE = [
  { category: 'Development', skills: ['Shopify store setup', 'WordPress (Elementor/Divi)', 'Webflow customized layout', 'Squarespace design', 'Framer sleek websites', 'Wix custom design'] },
  { category: 'Rankings & Search', skills: ['On-Page optimization', 'Technical audits (lighthouse)', 'High-authority link building', 'Schema markup & speed', 'Local citation maps', 'GEO & ChatGPT visibility'] },
  { category: 'Growth & Funnels', skills: ['Conversion audit', 'UX/UI visual audits', 'Landing page workflows', 'High-winning products dropship', 'Checkout optimization', 'Targeted SMM strategy'] },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-web-dev',
    title: 'Website Design & Development',
    category: 'Website Design',
    description: 'Transform your vision into a gorgeous, high-converting digital storefront or business portal. Responsive, lightning-fast design engineered to turn passive visitors into loyal customers.',
    features: [
      'Responsive Design tailored for desktop, tablet, and mobile browsers',
      'Conversion-Focused Layouts designed to maximize click-throughs and sales',
      'CMS platforms supported: Shopify, WordPress, Webflow, Squarespace, Wix, Framer',
      'Robust SEO-friendly semantic HTML structure & clean code',
      'High-performance PageSpeed scores (95+ Lighthouse optimized)'
    ]
  },
  {
    id: 'srv-seo',
    title: 'Advanced Search Engine Optimization (SEO)',
    category: 'SEO',
    description: 'Surgical SEO strategies that establish domain authority and secure Page-1 placements on Google. From deep keyword mapping to fine-tuning Core Web Vitals.',
    features: [
      'Technical SEO (Crawl fix, Indexing, Site Audit, XML Sitemap)',
      'On-Page optimization (Keyword research, Title/Meta tags, Internal link structuring)',
      'Off-Page SEO (Whitehat backlink networks, Local citations & brand mentions)',
      'Core Web Vitals adjustments, Schema markup, and speed remedies'
    ]
  },
  {
    id: 'srv-ai-search',
    title: 'Generative & Answer Engine Optimization (GEO/AEO)',
    category: 'AI Search Optimization',
    description: 'Protect your brand and rank inside AI search frameworks. Copy, reviews, and structured data optimized for recommended placement by ChatGPT, Gemini, and Google SGE.',
    features: [
      'ChatGPT Search & Perplexity UI recommendations optimization',
      'Generative Engine Optimization (GEO) custom formatting',
      'Answer Engine Optimization (AEO) structural schema alignment',
      'Featured snippets, Knowledge Graph, and generative outline citation',
      'AI citation building through sentiment mining & PR mentions'
    ]
  },
  {
    id: 'srv-smm',
    title: 'Social Media Marketing (SMM)',
    category: 'SMM',
    description: 'Boost brand awareness and build organic communities by mapping social narratives to business objectives across main-stage channels.',
    features: [
      'Data-driven social channel strategies tailored to your target audience',
      'Engagement optimization & conversion-focused ad planning',
      'Lead generation funnel creation & audience profiling',
      'Polished organic post planning & targeted social branding'
    ]
  },
  {
    id: 'srv-cro',
    title: 'CRO Audits & Funnel Optimization',
    category: 'CRO Audit',
    description: 'Fix the leaks in your sales pipeline. A comprehensive UX/UI checkout sequence audit that reveals click barriers and elevates standard conversion percentages.',
    features: [
      'In-depth heatmapping analysis and sales funnel auditing',
      'Landing page copy audits & user experience improvements',
      'A/B testing mapping and streamlined checkout sequences',
      'Frictionless navigation and drop-off rate reductions'
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  // SHOPIFY (41 projects)
  {
    id: 'sh-houlte',
    title: 'Houlte Home Decor',
    platform: 'Shopify',
    industry: 'Home Decor & Furniture',
    websiteUrl: 'https://houlte.com/',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-tablefab',
    title: 'TableFab Furniture',
    platform: 'Shopify',
    industry: 'Custom Wooden Tables & Decor',
    websiteUrl: 'https://www.tablefab.com/',
    imageUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-poochplay',
    title: 'Pooch Play & Stay',
    platform: 'Shopify',
    industry: 'Pet Toys, Beds & Accessories',
    websiteUrl: 'https://poochplayandstay.com/',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-kidznpetz',
    title: 'Kidz N Petz Store',
    platform: 'Shopify',
    industry: 'Family & Dog Apparel Sync',
    websiteUrl: 'https://kidznpetz.com/',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-budding-athlete',
    title: 'Budding Athlete',
    platform: 'Shopify',
    industry: 'Sports Nutrition & Teen Vitamins',
    websiteUrl: 'https://budding-athlete.com/',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-blazeherbals',
    title: 'Blaze Herbals',
    platform: 'Shopify',
    industry: 'Natural Plant Supplements',
    websiteUrl: 'https://www.blazeherbals.com/',
    imageUrl: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-nutribites',
    title: 'Nutribites (Password: admin)',
    platform: 'Shopify',
    industry: 'Functional Organic Pet Supplements',
    websiteUrl: 'https://nutribites1.myshopify.com/',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-organa',
    title: 'Organa Wellness Store',
    platform: 'Shopify',
    industry: 'Eco Supplements & Superfoods',
    websiteUrl: 'https://organa.net/',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-themoodco',
    title: 'The Mood Co.',
    platform: 'Shopify',
    industry: 'Premium Active Wellness Brand',
    websiteUrl: 'https://www.themoodco.shop/',
    imageUrl: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-hngs',
    title: 'HNGS Greece Store',
    platform: 'Shopify',
    industry: 'Elite Lifestyle & Wellbeing',
    websiteUrl: 'https://hngs.gr/',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-babycotmobiles',
    title: 'Baby Cot Mobiles Australia',
    platform: 'Shopify',
    industry: 'Nursery Handmade Bedding Decor',
    websiteUrl: 'https://babycotmobiles.com.au/',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-maeveboutique',
    title: 'Maeve Boutique',
    platform: 'Shopify',
    industry: 'Aesthetic Linen Babywear',
    websiteUrl: 'https://maeveboutique.us/',
    imageUrl: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-techhaven',
    title: 'Tech Haven 12',
    platform: 'Shopify',
    industry: 'Smartphone & Wearable Accessories',
    websiteUrl: 'https://tech-haven12.myshopify.com/',
    imageUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-togrind',
    title: 'To Grind Fitness Hub',
    platform: 'Shopify',
    industry: 'Athletic Gear & Custom Shakers',
    websiteUrl: 'https://togrind.myshopify.com/',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-redhookvibes',
    title: 'Red Hook Vibes Brooklyn',
    platform: 'Shopify',
    industry: 'Bespoke Local Apparel Boutique',
    websiteUrl: 'https://redhookvibes.com/',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-anywhrclothing',
    title: 'Anywhr Clothing',
    platform: 'Shopify',
    industry: 'Minimalist Sustainable Streetwear',
    websiteUrl: 'https://anywhrclothing.com/',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-saltyink',
    title: 'Salty Ink Swimwear Australia',
    platform: 'Shopify',
    industry: 'UV Protective Kids & Women Swimwear',
    websiteUrl: 'https://www.saltyinkdesigns.com.au/',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-thenestonmain',
    title: 'The Nest on Main',
    platform: 'Shopify',
    industry: 'Curated Local Gifts & Antiques',
    websiteUrl: 'https://thenestonmain.com/',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-emeraldbylove',
    title: 'Emerald by Love',
    platform: 'Shopify',
    industry: 'Colombian Sourced Fine Jewels',
    websiteUrl: 'https://emeraldbylove.com/',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-materialchance',
    title: 'Material Chance Jewelry',
    platform: 'Shopify',
    industry: 'Raw Metal Premium Jewelry Vibe',
    websiteUrl: 'https://materialchance.com/',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-luxelinxpj',
    title: 'Luxe Linx Permanent Jewelry',
    platform: 'Shopify',
    industry: 'Zapped Gold Chains & Trinkets',
    websiteUrl: 'https://luxelinxpj.com/',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-foshanpaper',
    title: 'Foshan Paper Cutting Art',
    platform: 'Shopify',
    industry: 'Traditional Art Carvings & Gifts',
    websiteUrl: 'https://foshanpapercutting.com/',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-tiddlypomcards',
    title: 'Tiddlypom Cards Group',
    platform: 'Shopify',
    industry: 'Whimsical Illustration Greeting Cards',
    websiteUrl: 'https://tiddlypomcards.com/',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-bellanomi',
    title: 'Bellanomi Skincare',
    platform: 'Shopify',
    industry: 'Vegan Cosmetic Powders & Toners',
    websiteUrl: 'https://bellanomi.com/',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-lovecocobo',
    title: 'Cocobo Organic Skin',
    platform: 'Shopify',
    industry: 'Luxury Nourishing Organic Oils',
    websiteUrl: 'https://lovecocobo.com/',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-abanabreastpump',
    title: 'Abana Breast Pump',
    platform: 'Shopify',
    industry: 'Wearable Hands-Free Breast Pump',
    websiteUrl: 'https://abanabreastpump.com/',
    imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-matchaglow',
    title: 'Matcha Glow Organic',
    platform: 'Shopify',
    industry: 'Ceremonial Matcha Tea & Bowls',
    websiteUrl: 'https://matchaglow.ch/',
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-seefahub',
    title: 'Seefa Hub Store',
    platform: 'Shopify',
    industry: 'Tech Charger & Intelligent Stand',
    websiteUrl: 'https://www.seefahub.com/',
    imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-foxtech',
    title: 'Fox-Tech (Password: admin)',
    platform: 'Shopify',
    industry: 'RGB LED Gamer Desk Ornaments',
    websiteUrl: 'https://fox-techcolorful.myshopify.com/',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-hatsbyhudson',
    title: 'Hats by Hudson',
    platform: 'Shopify',
    industry: 'Creative Custom Embroidery Hats',
    websiteUrl: 'https://hatsbyhudson.com/',
    imageUrl: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-crushpup',
    title: 'Crush Pup Designs',
    platform: 'Shopify',
    industry: 'Print-on-Demand Dog Accessories',
    websiteUrl: 'https://www.crushpup.com/',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-wickandwonder',
    title: 'Wick & Wonder Candles',
    platform: 'Shopify',
    industry: 'Soy Wax Hand-Poured Scented Candles',
    websiteUrl: 'https://wickandwonderllc.com/',
    imageUrl: 'https://images.unsplash.com/photo-1601924582970-d236fbf41290?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-heartandhustle',
    title: 'Heart & Hustle Creations',
    platform: 'Shopify',
    industry: 'Graphic Apparel Custom Prints',
    websiteUrl: 'https://heartandhustlecreations.com/',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-luxwatchcare',
    title: 'Lux Watch Care Australia',
    platform: 'Shopify',
    industry: 'High-end Watch Polishing Compounds',
    websiteUrl: 'https://luxwatchcare.com.au/',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-miamiice',
    title: 'Miami Ice Jewelers',
    platform: 'Shopify',
    industry: 'Diamond Iced Watches & Ropes',
    websiteUrl: 'https://miamiice.net/',
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-flawlessbeauty',
    title: 'Flawless Beauty & Fashion',
    platform: 'Shopify',
    industry: 'Modern Boutique Women Apparel',
    websiteUrl: 'https://www.flawlessbeautyfashion.com/',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-warriorswim',
    title: 'Warrior Swim Co.',
    platform: 'Shopify',
    industry: 'Premium Active Ocean Swimwear',
    websiteUrl: 'https://warriorswim.co/',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-hausofpink',
    title: 'Wear Haus of Pink',
    platform: 'Shopify',
    industry: 'Bold Modern Gen-Z Fashion',
    websiteUrl: 'https://wearhausofpink.com/',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-m2jfragranza',
    title: 'M2J Fragranza Cologne',
    platform: 'Shopify',
    industry: 'German Hand-Crafted Fragrances',
    websiteUrl: 'https://m2jfragranza.de/',
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-sysfashions',
    title: 'SYS Fashions Online',
    platform: 'Shopify',
    industry: 'Contemporary Wholesale Attire',
    websiteUrl: 'https://sysfashions.com/',
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sh-eboost',
    title: 'E-Boost EV Chargers',
    platform: 'Shopify',
    industry: 'Sustainable Car Power Adaptors',
    websiteUrl: 'https://e-boost.com/',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80'
  },

  // WORDPRESS (13 projects)
  {
    id: 'wp-feinheit',
    title: 'The Feinheit Company',
    platform: 'WordPress',
    industry: 'Creative & Design Solutions',
    websiteUrl: 'https://thefeinheit.com/',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-nowreno',
    title: 'Now Reno Renovation',
    platform: 'WordPress',
    industry: 'Home Renovation & Construction',
    websiteUrl: 'https://nowreno.ca/',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-trustedpool',
    title: 'Trusted Pool Pros AZ',
    platform: 'WordPress',
    industry: 'Residential Pool Cleaning & Service',
    websiteUrl: 'https://trustedpoolprosaz.com/',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-wcielectric',
    title: 'WCI Electric Solutions',
    platform: 'WordPress',
    industry: 'Commercial Electrician Contractor',
    websiteUrl: 'https://www.wcielectric.com/',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-kitron',
    title: 'Kitron Consulting Group',
    platform: 'WordPress',
    industry: 'Management & Strategy Consulting',
    websiteUrl: 'https://kitronconsulting.com/',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-yorkshire',
    title: 'Yorkshire Private Paediatricians',
    platform: 'WordPress',
    industry: 'Medical & Pediatric Healthcare',
    websiteUrl: 'https://yorkshireprivatepaediatrician.co.uk/',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-gotjunk',
    title: '1-800-Got-Junk Service Hub',
    platform: 'WordPress',
    industry: 'Junk Removal & Logistics Service',
    websiteUrl: 'https://www.1800gotjunk.com/',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-twomen',
    title: 'Two Men and a Truck',
    platform: 'WordPress',
    industry: 'National Relocation & Storage',
    websiteUrl: 'https://twomenandatruck.com/',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-zipfunding',
    title: 'Zip Funding Australia',
    platform: 'WordPress',
    industry: 'SME Commercial Financing Brokerage',
    websiteUrl: 'https://www.zipfunding.com.au/',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-sgmytaxi',
    title: 'SG MY Taxi Transport',
    platform: 'WordPress',
    industry: 'Private Cross-Border Transportation',
    websiteUrl: 'https://sgmytaxi-stareratransport.com/',
    imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-granfortboats',
    title: 'Granfort Yachts & Boats',
    platform: 'WordPress',
    industry: 'Yacht Charter & Luxury Marine Sales',
    websiteUrl: 'https://granfortboats.us/',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-steelforged',
    title: 'Steelforged Freight Logistics',
    platform: 'WordPress',
    industry: 'Heavy Freight & Transport Logistics',
    websiteUrl: 'https://steelforgedfreightsolutions.com/',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wp-ctbooks',
    title: 'CT Books Accounting',
    platform: 'WordPress',
    industry: 'Tax & Corporate Bookkeeping Services',
    websiteUrl: 'https://ctbooks.co/',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
  },

  // WEBFLOW (14 projects)
  {
    id: 'wf-glasgow',
    title: 'Glasgow Roofing Service',
    platform: 'Webflow',
    industry: 'Contractor & Roofing Specialist',
    websiteUrl: 'https://glasgow-roofing-service.webflow.io',
    imageUrl: 'https://images.unsplash.com/photo-1632758111984-d550eccabc1d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-summer-shave',
    title: 'The Summer Shave Co.',
    platform: 'Webflow',
    industry: 'Cosmetics & Men Shaving Store',
    websiteUrl: 'https://the-summer-shave-llc.webflow.io/',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-improveit',
    title: 'ImproveIt Med Aesthetics',
    platform: 'Webflow',
    industry: 'Healthcare & Wellness Aesthetic Center',
    websiteUrl: 'https://www.improveitmd.com/',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-engaging',
    title: 'Engaging Digitally Systems',
    platform: 'Webflow',
    industry: 'SaaS Integration Consult',
    websiteUrl: 'https://engagingdigitally.com/',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-capmo',
    title: 'Capmo Construction Platform',
    platform: 'Webflow',
    industry: 'B2B Enterprise Construction Software',
    websiteUrl: 'https://www.capmo.com/',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-goodman',
    title: 'Goodman Psychiatry Group',
    platform: 'Webflow',
    industry: 'Psychiatry & Medical Counselling',
    websiteUrl: 'https://www.goodmanpsychiatry.com/',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-composable',
    title: 'Composable Labs Foundation',
    platform: 'Webflow',
    industry: 'Web3 & Decentralized Capital Protocol',
    websiteUrl: 'https://www.composablefoundation.com/',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-hammr',
    title: 'Hammr Construction Portal',
    platform: 'Webflow',
    industry: 'Construction Workforce Management',
    websiteUrl: 'https://www.hammr.com/',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-drift-theory',
    title: 'Drift Theory Studio',
    platform: 'Webflow',
    industry: 'Immersive Video & Post-Production Labs',
    websiteUrl: 'https://www.drift-theory.com/',
    imageUrl: 'https://images.unsplash.com/photo-1574717024458-7f9ecd8628b0?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-strengthaffect',
    title: 'Strength Affect Fitness',
    platform: 'Webflow',
    industry: 'Boutique Strength Performance Coaching',
    websiteUrl: 'https://www.strengthaffectns.com/',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-fourm',
    title: '4M Analytics & GeoData',
    platform: 'Webflow',
    industry: 'Subsurface Utility Engineering Analytics',
    websiteUrl: 'https://www.4manalytics.com/',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-kindspire',
    title: 'Kindspire Education',
    platform: 'Webflow',
    industry: 'Personalized Online Academy & Tutors',
    websiteUrl: 'https://kindspireeducation.com/',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-heartbeat',
    title: 'Heart Beat Event Managers',
    platform: 'Webflow',
    industry: 'Bespoke Corporate Event Coordinators',
    websiteUrl: 'https://heart-beat-events.webflow.io/',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wf-zero8',
    title: 'Zero8 Web Studio',
    platform: 'Webflow',
    industry: 'Sleek UI/UX and Branding Solutions',
    websiteUrl: 'https://www.zero8.io/',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80'
  },

  // SQUARESPACE (8 projects)
  {
    id: 'sq-eftihia',
    title: 'Eftihia Buffington HR',
    platform: 'Squarespace',
    industry: 'Professional Executive Recruitment',
    websiteUrl: 'https://eftihia-buffington-hrga.squarespace.com/',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-aerobar',
    title: 'The Aerobar Cocktails',
    platform: 'Squarespace',
    industry: 'Luxury Event bar & Mobile Beverage',
    websiteUrl: 'https://www.theaerobar.com/',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-amandacrean',
    title: 'Amanda Crean Photography',
    platform: 'Squarespace',
    industry: 'Fine-Art Coastal Wedding Editorial',
    websiteUrl: 'https://www.amandacrean.com/home',
    imageUrl: 'https://images.unsplash.com/photo-1537907690979-ee8e01276184?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-kevinclark',
    title: 'Kevin Clark Headshot Studios',
    platform: 'Squarespace',
    industry: 'Commercial Cinematography & Portraiture',
    websiteUrl: 'https://www.kevinclarkstudios.com/',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-anthonysmith',
    title: 'Anthony Smith Asphalt Paving',
    platform: 'Squarespace',
    industry: 'Commercial Driveway Paving & Excavating',
    websiteUrl: 'https://anthonysmithpaving.com/',
    imageUrl: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-creatorsclub',
    title: 'Creators Club Production Studio',
    platform: 'Squarespace',
    industry: 'Influencer Production & Brand Identity',
    websiteUrl: 'https://www.creatorsclub.media/',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-twanarasoul',
    title: 'Twana Rasoul Real Estate',
    platform: 'Squarespace',
    industry: 'High-End Luxury Residential Brokerage',
    websiteUrl: 'https://www.twanarasoulrealty.com/',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sq-threedpaw',
    title: '3D Paw Studio Australia',
    platform: 'Squarespace',
    industry: 'Custom Pet Memorial Art Specialists',
    websiteUrl: 'https://www.3dpawstudio.com.au/',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop&q=80'
  },

  // WIX (7 projects)
  {
    id: 'wx-sabrina',
    title: 'Sarrad Sabrina Cosmetics',
    platform: 'Wix',
    industry: 'Bespoke Organic Makeup Aesthetics',
    websiteUrl: 'https://sarradsabrina.wixsite.com/home',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wx-thrive',
    title: 'Thrive Performance Consulting',
    platform: 'Wix',
    industry: 'Corporate Talent & Leadership Strategy',
    websiteUrl: 'https://www.thrive-performanceconsulting.com/',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wx-peaceful',
    title: 'Peaceful Living Wellness Hub',
    platform: 'Wix',
    industry: 'Functional Nutrition & Holistic Guide',
    websiteUrl: 'https://www.peacefullivingwellness.co/',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wx-felicity',
    title: 'Felicity Buie Law Group',
    platform: 'Wix',
    industry: 'Family Litigation & Estate Planning',
    websiteUrl: 'https://www.felicitybuie.com/',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wx-mauloa',
    title: 'Mauloa Moments Events',
    platform: 'Wix',
    industry: 'Luxurious Wedding & Floral Arrangement',
    websiteUrl: 'https://www.mauloamoments.com/',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wx-levelz',
    title: 'Levelz Ice Elite Grooming',
    platform: 'Wix',
    industry: 'Premium Barbershop & Grooming Lounge',
    websiteUrl: 'https://www.levelzice.com/',
    imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wx-shazia',
    title: 'Shazia Turkish Couture',
    platform: 'Wix',
    industry: 'High-End Bridal Silk Collection',
    websiteUrl: 'https://www.shazia.com.tr/',
    imageUrl: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800&auto=format&fit=crop&q=80'
  },

  // FRAMER (5 projects)
  {
    id: 'fr-naturalmed',
    title: 'Center for Natural Medicine',
    platform: 'Framer',
    industry: 'Holistic Pediatric & Herbal Pharmacy',
    websiteUrl: 'https://centerfornaturalmedicine.net/',
    imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'fr-aztexas',
    title: 'AZ Texas Metal Design',
    platform: 'Framer',
    industry: 'Industrial Structural Iron Fab',
    websiteUrl: 'https://www.aztexas.com/',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'fr-andrews',
    title: 'Andrews Home Installation',
    platform: 'Framer',
    industry: 'Contractor Smart Climate Setup',
    websiteUrl: 'https://andrewsinstall.com/',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'fr-carmel',
    title: 'Carmel Architectural Electric',
    platform: 'Framer',
    industry: 'High-End Custom Smart Light Automation',
    websiteUrl: 'https://carmel-electric.com/',
    imageUrl: 'https://images.unsplash.com/photo-1558882224-cca166733360?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'fr-sonic',
    title: 'Sonic Fast Checkout',
    platform: 'Framer',
    industry: 'Frictionless Mobile-First SaaS Store',
    websiteUrl: 'https://sonic-ecommerce.framer.website/',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80'
  }
];

export const SEO_CASE_STUDIES: SeoCaseStudy[] = [
  {
    id: 'seo-cs-1',
    projectName: 'PureLife Dropshipping Brand',
    industry: 'eCommerce, Global Cosmetics',
    serviceType: 'eCommerce SEO',
    before: '4,100 / mo Organic Visits',
    after: '78,400 / mo Organic Visits',
    keywordsRanked: ['organic collagen dropship', 'vegan anti-aging serums', 'retinol solutions wholesale'],
    trafficGrowthPercent: 1812,
    rankingImprovement: 'Ranked #1 for 18 core commercial keywords within 90 days',
    leadGenImpact: 'Boosted Shopify weekly sales from $1,200 to $18,900 average',
    caseStudyLink: '#'
  },
  {
    id: 'seo-cs-2',
    projectName: 'Precision Air Conditioning AZ',
    industry: 'Local Services, HVAC Contractor',
    serviceType: 'Local SEO',
    before: '12 incoming phone calls / mo',
    after: '286 incoming phone calls / mo',
    keywordsRanked: ['emergency ac repair Phoenix', 'residential hvac contractor scottsdale'],
    trafficGrowthPercent: 2280,
    rankingImprovement: 'Google Map Pack Rank #2 across all targets within 30-mile radius',
    leadGenImpact: 'Generated $45,000 extra local service pipeline in 4 months',
    caseStudyLink: '#'
  },
  {
    id: 'seo-cs-3',
    projectName: 'Apex Crypto Exchange Software',
    industry: 'Enterprise Web3 SaaS',
    serviceType: 'Technical SEO',
    before: 'Crawl errors blocking 73% of pages',
    after: '100% crawl indexation, 0 core errors',
    keywordsRanked: ['secure sub-second exchange protocol', 'developer web3 gateway integration'],
    trafficGrowthPercent: 310,
    rankingImprovement: 'Lighthouse Performance score improved from 34 to 98',
    leadGenImpact: 'Secured 4 new enterprise pilot sign-ups valued at $20k+ monthly',
    caseStudyLink: '#'
  },
  {
    id: 'seo-cs-4',
    projectName: 'NutriBio Vitamin Store',
    industry: 'eCommerce & Organic Retail',
    serviceType: 'On-Page SEO',
    before: 'High bounce rate (82%) on primary product pages',
    after: 'Bounce rate halved to 41%, conversion up 2.4%',
    keywordsRanked: ['sugar-free elderberry gummy', 'non-gmo magnesium tablets online'],
    trafficGrowthPercent: 145,
    rankingImprovement: 'Acquired 12 Featured Snippets on high-intent query stacks',
    leadGenImpact: 'Organic revenue growth of $24,500/mo without active ad spend',
    caseStudyLink: '#'
  },
  {
    id: 'seo-cs-5',
    projectName: 'Luminate Cyber Security',
    industry: 'Cybersecurity SaaS B2B',
    serviceType: 'GEO',
    before: '0 recommendations on ChatGPT or Perplexity',
    after: 'Highly recommended for "reliable private security stack"',
    keywordsRanked: ['AI endpoint scanning SaaS', 'best SOC-2 compliant malware shield'],
    trafficGrowthPercent: 620,
    rankingImprovement: 'Ranked in Top 3 generative summaries for ChatGPT Search & Gemini Answers',
    leadGenImpact: '32 fully qualified enterprise demo meetings booked in Q1',
    caseStudyLink: '#'
  },
  {
    id: 'seo-cs-6',
    projectName: 'Dr. Evelyn Clinic Yorkshire',
    industry: 'Healthcare & Specialized Med',
    serviceType: 'AEO',
    before: 'Unstructured content, lack of Schema markup',
    after: 'Structured Schema markup deployed, Google Knowledge graph sync',
    keywordsRanked: ['expert pediatric asthma treatment Leeds', 'private pediatrician near me Yorkshire'],
    trafficGrowthPercent: 275,
    rankingImprovement: 'Pulled into Google Featured Snippets and Answer boxes for 14 custom queries',
    leadGenImpact: 'Fully booked patient schedules with 3-week waiting list established',
    caseStudyLink: '#'
  },
  {
    id: 'seo-cs-7',
    projectName: 'Global Steel Brokerage Corp.',
    industry: 'Industrial Supply Chain',
    serviceType: 'Off-Page SEO',
    before: 'Domain Authority (DA) score: 12',
    after: 'Domain Authority (DA) score: 54',
    keywordsRanked: ['tempered structural steel bulk', 'high tensile strength plate fabrication'],
    trafficGrowthPercent: 490,
    rankingImprovement: 'Built 142 high-authority contextual editorial links',
    leadGenImpact: 'Generated $320k worth of high-volume bulk orders in 180 days',
    caseStudyLink: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Chen',
    company: 'Elysian Glow Skincare (Shopify)',
    rating: 5,
    review: 'PJ transformed our outdated Shopify store into an absolute masterpiece! Not only is the visual design jaw-dropping, but our conversion rate instantly jumped from 1.2% to 3.6%. She is an eCommerce magician and a pure professional to communicate with.',
    servicePurchased: 'Premium Responsive Shopify Store Setup',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Michael Henderson',
    company: 'Henderson Air Conditioning (Local Business)',
    rating: 5,
    review: 'We hired PJ for local Arizona SEO and the results are unbelievable. Our business is now ranking Top 3 in Google Map Pack for every single key AC repair query. Our phones are ringing off the hook and we had to hire two new field techs to handle the inquiries!',
    servicePurchased: 'Local SEO Rank Booster & Map Pack Opt.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    company: 'VeloCapital Decentralized (Web3 Protocol)',
    rating: 5,
    review: 'PJ built our complex Webflow platform and implemented ChatGPT optimization. Now, whenever people query generative engines for "top liquidity protocols," our site is quoted and cited. It is like running on a futuristic cheat code! Top recommendation.',
    servicePurchased: 'Advanced Webflow Dev + GEO Optimization',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-4',
    name: 'David Vance',
    company: 'Vance Funding Partners (Wordpress)',
    rating: 5,
    review: 'Outstanding turnaround! PJ delivered our customized WordPress site in under 10 days. The design has an executive, premium feel that builds instant trust with our business loan clients. She handled technical speed metrics and SEO structure flawlessly.',
    servicePurchased: 'WordPress Corporate Site Design & SEO Audit',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-5',
    name: 'Amanda Crean',
    company: 'Amanda Crean Weddings (Squarespace)',
    rating: 5,
    review: 'PJ redesigned our fine-art photography hub on Squarespace. Every page is light, breathtaking, and loads instantly. She has an artistic eye for typography and margins, treating our portfolio like a true museum showcase. Booking counts have soared.',
    servicePurchased: 'Squarespace Editorial Redesign & Portfolio Sync',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-6',
    name: 'Serkan Yilmaz',
    company: 'Shazia Turkish Bridal wear (Wix)',
    rating: 5,
    review: 'Many people told me Wix could not handle premium search performance. PJ completely shattered that myth! Our bridal site rank is spectacular, checkout operates perfectly on Turkish mobile networks, and we look highly prestigious. Very excellent.',
    servicePurchased: 'Wix High-Converting Multi-Category Shop',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-7',
    name: 'Dr. Charles Goodman',
    company: 'Goodman Psychiatric (Medical Care)',
    rating: 5,
    review: 'A highly secure, clean, HIPAA-aligned mental health template. PJ engineered a custom booking funnel and Schema structure. Highly patient-centric layout with robust responsive margins. Our organic patient referral base increased 80% since launching.',
    servicePurchased: 'WordPress Secure Clinic Site & On-Page SEO',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-8',
    name: 'Clara Oswald',
    company: 'Kindspire Education (Webflow)',
    rating: 5,
    review: 'Working with PJ has been the absolute best decision of our year. She holds phenomenal clarity of thought. The parent onboarding flow is automated and fast, and Webflow classes make CMS edits a complete breeze. Our team loves it!',
    servicePurchased: 'Webflow Educational UI & Funnel Setup',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-9',
    name: 'Robert Vance Jr.',
    company: 'Two Men & Truck Relocation',
    rating: 5,
    review: 'PJ manages our regional Lead Gen campaigns and on-site CRO audits on the WordPress portal. We saw a 19% drop in customer booking abandonment on our form screens within 48 hours. She is hyper-focused on real measurable metrics, which I highly appreciate.',
    servicePurchased: 'WordPress Funnel Optimization & CRO Audit',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-10',
    name: 'Felicity Buie',
    company: 'Felicity Buie Law (Wix Partner)',
    rating: 5,
    review: 'As an active litigation attorney, I demand pristine accuracy. PJ built a sleek, modern legal landing portal that commands high fees. Every legal disclosure, contact form, and local SEO parameter setup was handled with absolute caution and beauty.',
    servicePurchased: 'Wix Elite Law Firm Portal & Local Map SEO',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-11',
    name: 'Marcus Sterling',
    company: 'Sonic Commerce Fast Checkout (Framer)',
    rating: 5,
    review: 'Framer site was optimized and indexed on ChatGPT. PJ has mapped our AI citation footprint flawlessly. Within weeks we popped as a primary answer block in Generative Engine previews. If you need cutting-edge web results, hire PJ immediately.',
    servicePurchased: 'Framer Supercharging & GEO Recommendation Stack',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-12',
    name: 'Elena Feinheit',
    company: 'The Feinheit Brand (WordPress Custom)',
    rating: 5,
    review: 'Elite Web Consultant, Expert Partner for a reason! Over 10+ years of digital marketing excellence means PJ works efficiently without endless rounds of review. She knows exactly what works and is highly professional.',
    servicePurchased: 'Corporate Website Redesign & SEO Foundation',
    avatarUrl: 'https://images.unsplash.com/photo-1558203728-00f45181dd24?w=120&auto=format&fit=crop&q=80'
  }
];

export const WHY_CHOOSE_ME: Feature[] = [
  { title: '10+ Years Experience', description: 'Deep operational expertise in digital marketing, web engineering, and product branding.' },
  { title: '7,500+ Completed Projects', description: 'Massive history of real-world deliverables for premium stores, consulting brands, and local services.' },
  { title: '4,500+ Happy Reviews', description: 'Consistently holding 4.9+ star satisfaction rates across high-ticket digital marketing engagements.' },
  { title: 'Elite Industry Status', description: 'Recognized as an industry leader in premium Shopify design, high-authority SEO, and organic ranking campaigns.' },
  { title: 'Proven SEO Results', description: 'Actual case studies of 1000% organic growth on verified high-intent commercial keywords.' },
  { title: 'AI Search Optimization Expert', description: 'Leading-edge specialist in GEO, ChatGPT citation expansion, and Perplexity visibility metrics.' },
  { title: 'Conversion-Focused Development', description: 'Designs and funnels engineered strictly around lowering abandonment and multiplying cart yields.' },
  { title: 'Fast Communication', description: '100% responsive communication based from Virginia, US. Clear timeline schedules on every order.' },
  { title: 'Ongoing Support', description: 'Provides post-handover documentation, loom video walks, and system setups for your internal team.' },
  { title: 'Data-Driven Strategy', description: 'No guess-work. Every change is validated with speed diagnostics, ranking audits, and analytics reports.' }
];

export const TIMELINE_PROCESS: TimelineStep[] = [
  {
    step: 'Step 1',
    title: 'Discovery & Strategy',
    description: 'Audit current website, analyze competitor keywords, list high-interest targets, and blueprint the complete conversion-focused design of a new eCommerce store or brand site.'
  },
  {
    step: 'Step 2',
    title: 'Research & Planning',
    description: 'Deep customer search intelligence mapping. Build target buyer maps, write high-converting wireframe copies, gather optimal branding components, and prepare speed & citation baselines.'
  },
  {
    step: 'Step 3',
    title: 'Design & Development',
    description: 'Building custom WordPress, Webflow, Framer, or Shopify stores. Every screen is responsiveness-tested, fast, mobile-optimized, and styled to convey a luxury feel.'
  },
  {
    step: 'Step 4',
    title: 'SEO & Optimization',
    description: 'Injecting full On-Page, Off-Page, Technical SEO, Schema, and Generative Engine keywords with high-intent ChatGPT citations so you rank ahead of competitors on all platforms.'
  },
  {
    step: 'Step 5',
    title: 'Launch & Growth',
    description: 'A structured, zero-downtime DNS deployment. Configuring post-launch search listings, testing analytics setups, handing over premium tutorials, and monitoring immediate rank climbs.'
  }
];
