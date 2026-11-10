/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Search, 
  Settings, 
  FileText, 
  Link2, 
  MapPin, 
  ShoppingCart, 
  Key, 
  Sparkles, 
  Bot, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight, 
  AlertCircle, 
  Code2, 
  Zap, 
  Layers, 
  Globe2, 
  ChevronRight, 
  Check, 
  Activity, 
  Eye, 
  MousePointerClick, 
  TrendingUp, 
  Share2, 
  Compass, 
  Server, 
  Database,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function SEOServices() {
  const [activeServiceTab, setActiveServiceTab] = useState<'technical' | 'onpage' | 'offpage' | 'local' | 'ecommerce' | 'keywords' | 'geo'>('technical');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [exampleViewMode, setExampleViewMode] = useState<'solution' | 'code' | 'kpis'>('solution');

  // Overview Disciplines
  const overviewDisciplines = [
    { title: 'Technical SEO', desc: 'Crawl budget, indexing, Core Web Vitals, canonical tags & robots control', icon: Settings },
    { title: 'On-Page SEO', desc: 'Keyword mapping, semantic headings, meta tags, and internal link architecture', icon: FileText },
    { title: 'Off-Page SEO', desc: 'Topical authority, contextual backlink acquisition & digital PR outreach', icon: Link2 },
    { title: 'Local SEO', desc: 'Google Business Profile, localized citations, NAP integrity & local schema', icon: MapPin },
    { title: 'E-commerce SEO', desc: 'Shopify/WooCommerce taxonomies, product schema & faceted filter handling', icon: ShoppingCart },
    { title: 'International SEO', desc: 'Hreflang tags, multi-currency routing & multi-regional search targeting', icon: Globe2 },
    { title: 'Keyword Strategy', desc: 'Search intent mapping, difficulty scoring & competitor content gap discovery', icon: Key },
    { title: 'Content SEO', desc: 'Topic clusters, pillar page architecture & helpful search content briefs', icon: Layers },
    { title: 'SEO Audits', desc: 'Deep Screaming Frog crawls, technical log analysis & toxic link detection', icon: Compass },
    { title: 'GEO & AEO', desc: 'Generative Engine & Answer Engine Optimization for ChatGPT, Perplexity & AI Overviews', icon: Sparkles },
    { title: 'Entity Optimization', desc: 'Knowledge graph alignment, structured JSON-LD graphs & brand co-occurrences', icon: Cpu },
    { title: 'Conversion SEO', desc: 'Aligning high-intent SERP traffic with seamless on-page buying funnels', icon: TrendingUp },
  ];

  // 7 Detailed Services
  const detailedServices = {
    technical: {
      id: 'technical',
      name: 'Technical SEO Architecture',
      badge: 'Crawlability & Foundation',
      icon: Settings,
      what: 'Technical SEO focuses on optimizing the server, code structure, and crawl pipeline of a website so search engine bots can discover, render, and index pages with zero friction or wasted crawl budget.',
      why: 'Even the most compelling content will fail to rank if search engines encounter indexation loops, duplicate URLs, broken redirects, or sluggish Core Web Vitals that cause search bots to abandon page crawls.',
      activities: [
        'Complete website crawl analysis via Screaming Frog to identify 4xx/5xx errors and redirect chains',
        'XML sitemap cleanup, index prioritization, and Google Search Console error resolution',
        'Robots.txt directives configuration to safeguard crawl budget from admin and search parameters',
        'Canonical tag audit to permanently eliminate duplicate content variations across collections',
        'Core Web Vitals profiling: optimizing Largest Contentful Paint (LCP), INP, and Cumulative Layout Shift (CLS)',
        'Mobile usability & responsiveness verification across all mobile viewports and user agents',
        'Rich Schema markup deployment (JSON-LD Organization, BreadcrumbList, WebSite, and Article)',
        'Broken link detection, 301 permanent redirect mapping, and canonical loop rectification'
      ],
      execution: [
        { step: 'Audit & Crawl', detail: 'Simulate Googlebot desktop & mobile crawls using Screaming Frog to surface non-indexed pages, duplicate titles, and redirect hops.' },
        { step: 'Code Optimization', detail: 'Refactor theme templates (Shopify Liquid / WordPress PHP) to eliminate duplicate URL parameters and clean up render-blocking JavaScript.' },
        { step: 'Schema & Sitemap', detail: 'Inject structured JSON-LD schema into document headers and submit segmented, dynamic XML sitemaps to GSC.' },
        { step: 'Vitals Validation', detail: 'Diagnose and resolve Core Web Vitals bottlenecks using PageSpeed Insights and Chrome User Experience Report (CrUX) data.' }
      ],
      example: {
        title: 'Shopify Collection URL Duplication & Index Dilution',
        context: 'A fast-growing Shopify store experienced severe indexing dilution because Shopify naturally creates duplicate product URLs under collection paths alongside the root product path.',
        problem: [
          'Duplicate URLs: `/collections/kids-bikes/products/electric-balance-bike-16` vs `/products/electric-balance-bike-16`',
          'Search engines indexed both URLs, splitting backlink equity and confusing canonical hierarchy',
          'Google Search Console reported 380+ "Duplicate without user-selected canonical" warnings',
          'Wasted crawl budget left new accessory products unindexed for weeks'
        ],
        solution: [
          'Modified Shopify Liquid theme template `product-card.liquid`: replaced `{{ product.url | within: collection }}` with clean `{{ product.url }}`',
          'Enforced self-referencing canonical `<link rel="canonical" href="{{ canonical_url }}"/>` strictly pointing to root product URLs',
          'Submitted cleaned XML sitemap in Google Search Console containing only canonical product URLs',
          'Configured URL parameters in robots.txt to prevent indexing of sorting and pagination query strings'
        ],
        codeSnippet: `<!-- Theme Liquid Fix in product-card.liquid -->
<!-- Before: Generates duplicate collection paths -->
<a href="{{ product.url | within: collection }}">{{ product.title }}</a>

<!-- After: Enforces clean master canonical URL -->
<a href="{{ product.url }}">{{ product.title }}</a>

<!-- Enforced Canonical Tag in theme.liquid <head> -->
<link rel="canonical" href="{{ shop.url }}{{ product.url }}" />`,
        kpis: [
          { label: 'Crawl Efficiency', value: '100% Validated', change: 'Zero duplicate product crawls' },
          { label: 'Mobile LCP', value: '1.4s (Pass)', change: 'Down from 3.8s' },
          { label: 'Indexing Speed', value: '< 24 Hours', change: 'New products indexed next day' },
          { label: 'GSC Canonical Errors', value: '0 Warnings', change: 'Consolidated from 380+' }
        ]
      }
    },
    onpage: {
      id: 'onpage',
      name: 'On-Page Semantic SEO',
      badge: 'Content & Metadata Mastery',
      icon: FileText,
      what: 'On-Page SEO aligns every element on a specific web page—from titles, meta descriptions, and semantic headings to copy, image ALT attributes, and internal cross-linking—with search intent and topical relevance.',
      why: 'Search algorithms evaluate semantic context to determine whether a page genuinely answers a searcher’s intent. Thorough on-page optimization ensures your page earns maximum click-through rates and high topical relevance.',
      activities: [
        'Strategic keyword mapping ensuring each page targets a unique primary keyword and long-tail variants',
        'Compelling meta title and description creation engineered for high CTR without exceeding pixel limits',
        'Hierarchical H1, H2, and H3 heading structure organization with natural semantic phrase integration',
        'Descriptive image ALT tags with keyword context for image search indexing and accessibility',
        'Strategic internal linking with descriptive, non-generic anchor text to distribute topical equity',
        'Clean, descriptive URL slug architecture reflecting site hierarchy without query clutter',
        'Topical depth enrichment: incorporating related entities, user questions, and semantic synonyms',
        'E-commerce product and collection page SEO enhancement with structured product attributes'
      ],
      execution: [
        { step: 'Keyword Mapping', detail: 'Assign primary, secondary, and semantic LSI keywords to distinct URLs to eliminate internal keyword cannibalization.' },
        { step: 'Snippet Engineering', detail: 'Craft titles with CTR hooks (e.g., benefits, current year) and persuasive meta descriptions with actionable calls-to-action.' },
        { step: 'Semantic Content Flow', detail: 'Structure page copy into readable chunks with H2/H3 subheadings, bullet lists, and technical specification tables.' },
        { step: 'Internal Link Mesh', detail: 'Interlink related category collections, high-ranking blog guides, and complementary products with keyword-rich anchors.' }
      ],
      example: {
        title: 'Shopify Product Page Optimization: "Electric Balance Bike for Kids"',
        context: 'A children’s mobility brand wanted to rank its flagship 16-inch model for high-intent transactional search queries.',
        problem: [
          'Original Title: `Home / Products / E-Bike 16 Red` (Vague, zero keyword context, missing search intent)',
          'Meta Description: Generic auto-generated excerpt truncated at 70 characters',
          'Headings: Multiple competing H1 tags in the theme with no H2/H3 semantic hierarchy',
          'Images: Generic filenames like `IMG_9482.jpg` with empty ALT attributes',
          'Internal Links: Zero contextual links from parenting blog articles or collection pages'
        ],
        solution: [
          'Primary Keyword: "Electric Balance Bike for Kids" | Secondary: "16 inch kids electric bike", "beginner electric training bike"',
          'Optimized Title: "Electric Balance Bike for Kids (Ages 4-8) - Lightweight & Safe | BrandName" (58 characters, CTR trigger)',
          'Meta Description: "Help your child master balance and speed control with our 16\\" electric balance bike for kids. Features 3-speed safety governor and disc brakes. Free US shipping!" (154 characters)',
          'Semantic Structure: Single H1 for product name; H2s for "Safety Features & Speed Governance", "Technical Specifications", and "Sizing Guide"',
          'Image ALT: `red-electric-balance-bike-for-kids-low-standover-frame.webp` with descriptive accessibility text',
          'Internal Link: Contextual link from high-traffic blog guide "How to Teach Your Child to Ride Safely" with anchor "lightweight 16-inch kids electric bike"'
        ],
        codeSnippet: `<!-- Semantic HTML & Microdata Structure -->
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/collections/kids-bikes">Kids Electric Bikes</a></li>
    <li><span aria-current="page">Electric Balance Bike for Kids (16 Inch)</span></li>
  </ol>
</nav>

<h1>Electric Balance Bike for Kids (16-Inch Aluminum Frame)</h1>
<h2>Child-Safe Engineering: 3-Speed Limiter & Instant Dual Brakes</h2>
<p>Engineered for young riders transitioning from pedal-less balance trainers...</p>

<img src="/cdn/red-electric-balance-bike-kids.webp" 
     alt="16-inch red electric balance bike for kids with low standover height and safety handbrakes" />`,
        kpis: [
          { label: 'Organic CTR', value: '5.8%', change: '+38% increase in clicks' },
          { label: 'Primary SERP Rank', value: 'Page 1 (#4)', change: 'From unranked > 100' },
          { label: 'Time on Page', value: '3m 12s', change: '+45% engagement' },
          { label: 'Image Search Clicks', value: '1,420/mo', change: 'New organic source' }
        ]
      }
    },
    offpage: {
      id: 'offpage',
      name: 'Off-Page SEO & Authority Building',
      badge: 'Backlink Integrity & Digital PR',
      icon: Link2,
      what: 'Off-Page SEO builds the domain authority, trustworthiness, and external reputation of your website through white-hat contextual backlink acquisition, digital PR outreach, and authoritative brand citations.',
      why: 'Google treats third-party backlinks as votes of confidence. Sites with relevant, high-DR contextual links consistently outrank competitor domains with identical on-page content.',
      activities: [
        'Competitor backlink gap analysis using Ahrefs and SEMrush to identify untapped referral opportunities',
        'Manual outreach to vetted niche-relevant blogs, industry publications, and editorial resources',
        'Contextual guest post placement on active, genuine websites (DR 40+, organic traffic > 5,000/mo)',
        'Unlinked brand mention reclamation converting casual online mentions into dofollow backlinks',
        'High-authority business listings and industry directory registrations with strict NAP alignment',
        'Digital PR campaigns creating data-backed infographics and industry guides for organic press pickups',
        'Toxic backlink profiling and Google Disavow file generation for spam link de-indexing',
        'Anchor text profile balancing (branded, exact-match, partial-match, and natural URL anchors)'
      ],
      execution: [
        { step: 'Gap Analysis', detail: 'Extract backlink profiles of top 5 ranking competitors to reveal high-authority shared linking domains.' },
        { step: 'Editorial Pitching', detail: 'Develop personalized editorial content pitches offering unique data or expert commentary to industry journalists.' },
        { step: 'Placement & Verification', detail: 'Verify dofollow status, correct contextual placement, and natural anchor text distribution.' },
        { step: 'Authority Monitoring', detail: 'Track Domain Rating (DR), referring domain velocity, and crawl status in Google Search Console.' }
      ],
      example: {
        title: 'Topical Authority Building for an Emerging E-Commerce Brand',
        context: 'A newly launched direct-to-consumer store with DR 8 was struggling to index and rank against legacy bike manufacturers.',
        problem: [
          'Low Domain Rating (DR 8) with only 12 referring domains, mostly low-quality web directories',
          'Zero editorial brand mentions or reputable external citations in the family and cycling space',
          'Product pages crawled infrequently because search engines prioritized established authority domains',
          'High reliance on costly Facebook and Google PPC ads to generate daily store orders'
        ],
        solution: [
          'Conducted competitor link gap analysis targeting top parenting and outdoor adventure lifestyle portals',
          'Authored high-value guest contributor articles: "Why Modern Balance Bikes Accelerate Child Motor Skills by 40%"',
          'Secured editorial product review features on 18 verified parenting blogs (DR 45 to DR 74)',
          'Crafted an embeddable "Kids Bike Size & Age Safety Chart" infographic picked up by 14 community family sites',
          'Diversified backlink anchor text: 50% Branded ("BrandName Kids"), 25% Partial-Match ("BrandName electric balance bikes"), 25% URL'
        ],
        codeSnippet: `/* Backlink Portfolio Profile Distribution */
Referring Domains Acquired: +46 high-relevance domains
Average Domain Rating (DR): 58
Anchor Profile:
  ├── Branded (e.g., "BrandName Bikes"): 52%
  ├── Partial Match (e.g., "BrandName kids electric balance bike"): 28%
  └── Generic/URL (e.g., "official website", "brandname.com"): 20%
Toxic/PBN Links: 0% (Strict White-Hat Editorial Standards)`,
        kpis: [
          { label: 'Domain Rating', value: 'DR 34', change: 'Up from DR 8 in 90 days' },
          { label: 'Referring Domains', value: '58 Domains', change: 'Acquired 46 clean dofollow' },
          { label: 'Organic Impressions', value: '420,000+', change: '+310% growth in GSC' },
          { label: 'PPC Ad Savings', value: '$3,800/mo', change: 'Shifted to organic revenue' }
        ]
      }
    },
    local: {
      id: 'local',
      name: 'Local SEO & Google Business Profile',
      badge: 'Geo-Targeting & Map Pack',
      icon: MapPin,
      what: 'Local SEO positions businesses at the top of local Google Search and Google Maps results for location-specific queries, driving high-converting phone calls, website clicks, and in-person foot traffic.',
      why: 'Over 46% of all Google searches carry local intent. Businesses in the Google 3-Pack capture more than 60% of all localized search clicks.',
      activities: [
        'Complete Google Business Profile (GBP) claimed, verified, and 100% optimized with primary & secondary categories',
        'Local keyword research identifying geo-targeted terms (e.g., "[Service] in [City]", "[Service] near me")',
        'NAP (Name, Address, Phone) consistency audit across 50+ tier-1 business directories',
        'Localized landing page creation featuring geo-tagged content, client testimonials, and regional landmarks',
        'LocalBusiness Schema markup implementation with exact latitude/longitude and service radius',
        'Review acquisition strategy: automated post-service review request workflows with keyword prompt guidance',
        'Weekly Google Business Profile updates, product/service showcases, and geotagged photo uploads',
        'Local citation syndication across regional platforms (Justdial, Sulekha, IndiaMart, Bing Places)'
      ],
      execution: [
        { step: 'GBP Optimization', detail: 'Fine-tune primary/secondary business categories, business descriptions, attributes, and operating hours.' },
        { step: 'Citation Alignment', detail: 'Audit and correct any discrepant phone numbers, suite numbers, or street abbreviations across all directories.' },
        { step: 'Local Landing Pages', detail: 'Develop hyper-localized pages with embedded Google Maps, local client reviews, and local neighborhood mentions.' },
        { step: 'Review Funnel', detail: 'Deploy automated SMS/Email review request pipelines encouraging customers to mention specific services in their reviews.' }
      ],
      example: {
        title: 'Local SEO Optimization: "Digital Marketing Agency in Jodhpur"',
        context: 'A digital agency based in Jodhpur, Rajasthan, wanted to dominate Google Map Pack rankings for regional business clients.',
        problem: [
          'GBP was unoptimized with missing business categories and incomplete service descriptions',
          'Inconsistent NAP: address listed differently on Justdial, Facebook, and the official website',
          'Website homepage had no localized schema markup or explicit geographic targeting',
          'Competitors with 40+ reviews dominated the top 3 Google Map Pack spots'
        ],
        solution: [
          'Configured Primary GBP Category: "Marketing Agency" | Secondary: "Website Designer", "Internet Marketing Service"',
          'Standardized NAP across all online platforms (Ratanada, Jodhpur, Rajasthan 342001)',
          'Built dedicated local landing page `/digital-marketing-agency-jodhpur` with localized H1, client case studies, and local landmarks (Sardarpura, Paota, Shastri Nagar)',
          'Implemented JSON-LD `LocalBusiness` / `ProfessionalService` schema containing geo-coordinates (26.28° N, 73.02° E)',
          'Executed a 30-day review acceleration campaign resulting in 32 verified 5-star reviews containing local keywords'
        ],
        codeSnippet: `<!-- LocalBusiness JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PJ Digital Agency Jodhpur",
  "image": "https://agency.com/logo.jpg",
  "@id": "https://agency.com/#localbusiness",
  "url": "https://agency.com/digital-marketing-agency-jodhpur",
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Road, Ratanada",
    "addressLocality": "Jodhpur",
    "addressRegion": "Rajasthan",
    "postalCode": "342001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.2858,
    "longitude": 73.0243
  },
  "areaServed": ["Jodhpur", "Pali", "Nagaur", "Jaipur"]
}
</script>`,
        kpis: [
          { label: 'Google 3-Pack Rank', value: '#1 in Jodhpur', change: 'From unranked outside top 20' },
          { label: 'Map Direct Calls', value: '+140% Increase', change: '52 qualified local calls/mo' },
          { label: 'Website Direction Clicks', value: '185/mo', change: 'High intent local visitors' },
          { label: 'Organic Local Inquiries', value: '3.4x Growth', change: 'Consistent client pipeline' }
        ]
      }
    },
    ecommerce: {
      id: 'ecommerce',
      name: 'E-Commerce SEO (Shopify & WooCommerce)',
      badge: 'Revenue & Collection Architecture',
      icon: ShoppingCart,
      what: 'E-commerce SEO optimizes online retail stores to capture transactional, high-intent searches. It focuses on collection hierarchies, faceted navigation control, rich product schemas, and inventory crawl efficiency.',
      why: 'E-commerce websites frequently suffer from thousands of parameter URLs, thin collection pages, and out-of-stock 404s. Structured e-commerce SEO ensures search bots index profitable product lines and display rich pricing/review snippets in SERPs.',
      activities: [
        'Shopify & WooCommerce site architecture restructuring for optimal category and sub-category depth',
        'Product page SEO optimization: descriptive titles, commercial copy, and variant canonicalization',
        'Collection and category page content enrichment with contextual buying guides and FAQ blocks',
        'Rich Product Schema (JSON-LD) with Offer, Price, Availability (InStock), and AggregateRating properties',
        'Faceted navigation management: canonicalizing or adding noindex directives to dynamic filter parameters',
        'Duplicate product URL resolution across nested collections and multi-currency storefronts',
        'Product image compression, WebP conversion, and responsive `srcset` implementation',
        'E-commerce keyword mapping matching broad categories and specific product model searches'
      ],
      execution: [
        { step: 'Taxonomy Audit', detail: 'Map out collection and sub-collection hierarchies so no critical product page is deeper than 3 clicks from homepage.' },
        { step: 'Faceted Filter Guard', detail: 'Implement canonical tags on color, size, and price filters to prevent search engines from crawling infinite URL combinations.' },
        { step: 'Rich Schema Injection', detail: 'Generate dynamic Product and Offer JSON-LD microdata enabling price badges and star ratings in Google Search.' },
        { step: 'Collection Enrichment', detail: 'Inject 150-word educational introductions and bottom FAQ accordions into priority collection pages.' }
      ],
      example: {
        title: 'Jewelry Store Optimization: "Gold Diamond Hoop Earrings"',
        context: 'A fine jewelry brand with 400+ SKUs wanted to rank its collection and flagship products on Google Page 1.',
        problem: [
          'Collection page `/collections/earrings` was too broad; lacked dedicated page for "gold diamond hoop earrings"',
          'Faceted filters (`?metal=14k-gold&style=hoop&stone=diamond`) created 1,200 thin duplicate URLs in Google index',
          'Product pages lacked structured data; zero star ratings or in-stock badges appeared in Google SERP results',
          'High cart abandonment due to generic product descriptions lacking karat specifications and clasp safety details'
        ],
        solution: [
          'Created targeted collection page: `/collections/gold-diamond-hoop-earrings` with optimized H1 and 180-word guide on 14k vs 18k gold purities and VS1 diamond clarities',
          'Canonicalized all faceted filter URLs back to the primary collection URL to consolidate link equity',
          'Optimized flagship product page: "14k Solid Gold 0.5ct Diamond Huggie Hoop Earrings" with macro zoom photography',
          'Injected Product, Offer, and AggregateRating JSON-LD schema showing live price ($495.00), in-stock status, and 4.9-star rating',
          'Added cross-linking breadcrumbs: `Home > Fine Jewelry > Earrings > Gold Diamond Hoop Earrings`'
        ],
        codeSnippet: `<!-- Rich Product JSON-LD Schema with Live Stock & Price -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "14k Solid Gold 0.5ct Diamond Huggie Hoop Earrings",
  "image": [
    "https://store.com/images/gold-diamond-hoops-front.webp",
    "https://store.com/images/gold-diamond-hoops-worn.webp"
  ],
  "description": "Handcrafted in recycled 14k yellow gold with conflict-free VS1 natural diamonds...",
  "sku": "GD-HOOP-05",
  "brand": {
    "@type": "Brand",
    "name": "Aura Fine Jewelry"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://store.com/products/14k-gold-diamond-hoop-earrings",
    "priceCurrency": "USD",
    "price": "495.00",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "84"
  }
}
</script>`,
        kpis: [
          { label: 'Collection SERP Rank', value: 'Page 1 (#3)', change: 'Top 3 for high-intent query' },
          { label: 'SERP Rich Snippets', value: '100% Display', change: 'Stars and $495 price in SERP' },
          { label: 'Organic Revenue', value: '+$24,500/mo', change: '+82% organic sales lift' },
          { label: 'Indexed Page Health', value: '98% Clean', change: 'Eliminated 1,200 thin filters' }
        ]
      }
    },
    keywords: {
      id: 'keywords',
      name: 'Keyword Research & Content Strategy',
      badge: 'Intent Mapping & Topic Clusters',
      icon: Key,
      what: 'Keyword Research & Content Strategy uncovers exactly what your ideal buyers search for, evaluates keyword difficulty and search volume, and organizes content into authoritative topic clusters that build topical relevance.',
      why: 'Writing content without intent mapping wastes time and money. By aligning transactional terms with product pages and informational queries with comprehensive guides, your site captures buyers at every stage of the decision journey.',
      activities: [
        'Comprehensive keyword research using Google Keyword Planner, Ahrefs, and SEMrush databases',
        'Search intent classification (Informational, Commercial Investigation, Transactional, Navigational)',
        'Competitor keyword gap analysis identifying high-value terms competitors currently rank for',
        'Keyword Difficulty (KD) and search volume evaluation to prioritize rapid-win opportunities',
        'Long-tail conversational query discovery to capture high-converting search intent',
        'Topic cluster and pillar page architecture planning to systematically build topical authority',
        'Content calendar creation with detailed editorial briefs (target word count, secondary keywords, FAQs)',
        'Continuous SERP feature monitoring (Featured Snippets, "People Also Ask", video carousels)'
      ],
      execution: [
        { step: 'Seed Discovery', detail: 'Extract thousands of seed keyword permutations and competitor rankings across target product categories.' },
        { step: 'Intent Segmentation', detail: 'Tag each keyword by intent: Transactional (Buy), Commercial (Best/Review), or Informational (How-to/Guides).' },
        { step: 'Pillar Architecture', detail: 'Group related long-tail queries into topic clusters surrounding a central authority pillar guide.' },
        { step: 'Editorial Briefs', detail: 'Supply writers with precise outlines detailing required H2/H3 headings, semantic entities, and internal link targets.' }
      ],
      example: {
        title: 'Keyword Strategy for an Electric Balance Bike Store',
        context: 'An e-commerce store selling children’s electric balance bikes needed a full-funnel keyword roadmap to beat legacy competitors.',
        problem: [
          'Previous marketing blog wrote generic articles ("Why Kids Love Biking") with zero search demand',
          'Product pages targeted the same broad keyword ("kids bikes"), cannibalizing rankings across pages',
          'Ignored high-intent commercial investigation queries where parents compare battery safety and sizing',
          'Failed to capture long-tail questions that drive high-intent organic traffic'
        ],
        solution: [
          'Established Master Pillar: "Electric Balance Bikes for Kids" (Topical Authority Hub)',
          'Mapped Transactional Queries directly to Collections & Product Pages:',
          '  • "electric balance bike for kids" (Vol: 8,100 | KD: 32) -> Main Collection Page',
          '  • "kids electric dirt bike 16 inch" (Vol: 3,600 | KD: 28) -> Flagship 16" Model Page',
          '  • "toddler electric balance bike with training wheels" (Vol: 1,400 | KD: 19) -> 12" Beginner Model Page',
          'Mapped Commercial Comparison Queries to In-Depth Buyer Guides:',
          '  • "best electric balance bike for beginners" (Vol: 2,400 | KD: 24) -> 2026 Buying Guide',
          '  • "electric balance bike vs regular balance bike" (Vol: 900 | KD: 14) -> Head-to-Head Comparison Guide',
          'Mapped Informational Queries to Educational Articles linking to Product Pages:',
          '  • "what age can a child ride an electric balance bike" (Vol: 1,900 | KD: 11) -> Safety & Age Sizing Guide',
          '  • "how to maintain electric bike lithium battery" (Vol: 650 | KD: 8) -> Care Tutorial'
        ],
        codeSnippet: `/* Full-Funnel Keyword Mapping Matrix */
Cluster: Kids Electric Mobility
├── Transactional (Bottom of Funnel -> Products/Collections)
│   ├── "electric balance bike for kids" [Vol: 8.1k, KD: 32] → /collections/kids-electric-balance-bikes
│   └── "16 inch electric balance bike" [Vol: 3.6k, KD: 28] → /products/16-inch-balance-bike
├── Commercial Investigation (Middle of Funnel -> Guides)
│   ├── "best electric balance bike for 5 year old" [Vol: 2.4k, KD: 24] → /guides/best-balance-bikes-by-age
│   └── "electric balance bike comparison" [Vol: 900, KD: 14] → /guides/electric-vs-pedal-balance
└── Informational (Top of Funnel -> Blog Posts)
    ├── "what age can kids ride electric balance bikes" [Vol: 1.9k, KD: 11] → /blog/safe-riding-age-guide
    └── "how to teach kid to balance on ebike" [Vol: 850, KD: 9] → /blog/teaching-kids-balance-steps`,
        kpis: [
          { label: 'Total Targeted Keywords', value: '142 Terms', change: 'Organized into 6 clusters' },
          { label: 'Top 10 Rankings', value: '38 Keywords', change: 'Up from 3 keywords' },
          { label: 'Blog-Assisted Orders', value: '118 Sales/mo', change: 'Direct internal link conversions' },
          { label: 'Avg Keyword Difficulty', value: 'KD 22 (Low-Med)', change: 'Fast-ranking opportunity' }
        ]
      }
    },
    geo: {
      id: 'geo',
      name: 'GEO & AEO (Generative & Answer Engine Optimization)',
      badge: 'AI Search & LLM Citations',
      icon: Sparkles,
      what: 'GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) prepare websites to be selected, cited, and recommended by AI-driven search engines like Google AI Overviews, ChatGPT Search, Perplexity AI, and Gemini.',
      why: 'Traditional 10 blue links are being supplemented by synthesized AI answers. When prospective buyers ask an AI assistant for product recommendations or service providers, brands optimized for entity clarity and direct-answer structure become the primary cited source.',
      activities: [
        'Content re-engineering for direct answers (Bottom Line Up Front - BLUF methodology)',
        'Entity-based optimization ensuring brands and product lines are recognized in Google Knowledge Graph',
        'Comprehensive FAQPage and HowTo schema markup with high factual and statistical density',
        'Structured comparison data tables formatted in clean markdown and semantic HTML',
        'Digital brand co-occurrence and authoritative digital PR to build citations across LLM training sets',
        'Conversational query targeting matching multi-turn user prompts in ChatGPT and Perplexity',
        'Brand sentiment and credential reinforcement across verified third-party review directories',
        'Continuous monitoring of AI engine brand citations and source attribution links'
      ],
      execution: [
        { step: 'Entity Alignment', detail: 'Establish unambiguous entity relationships using `sameAs` links connecting your brand to Wikipedia, Wikidata, and official registries.' },
        { step: 'BLUF Structure', detail: 'Begin sections with concise 40-50 word definitive answers directly addressing specific questions before expanding into details.' },
        { step: 'Data Tables & Schemas', detail: 'Deploy structured comparison tables and nested JSON-LD schema that LLM parsers can extract with zero hallucination risk.' },
        { step: 'Citation Verification', detail: 'Query ChatGPT, Perplexity, and Gemini weekly to test prompt variations and verify your URL is cited as a source.' }
      ],
      example: {
        title: 'Structuring E-Commerce Content for AI Search Citations',
        context: 'An e-commerce brand wanted its products recommended when users asked AI search engines: "What is the safest electric balance bike for a 5-year-old?"',
        problem: [
          'Existing product page buried safety specifications inside vague marketing prose',
          'AI search models like ChatGPT and Perplexity could not extract precise speed limiter numbers or brake types',
          'Zero structured comparison tables or verified FAQ schema answering parent safety concerns',
          'Competitor brand with structured review tables was cited as the default recommendation'
        ],
        solution: [
          'Engineered a Direct Answer Paragraph (BLUF): "The safest electric balance bike for a 5-year-old features a parent-controlled 3-speed limiter (capped at 5mph, 8mph, and 12mph), mechanical rear disc brakes for instant stopping, and an ultra-low 11-inch standover height..."',
          'Implemented a clean HTML specification table comparing rider age, wheel size, battery voltage, and safety mechanisms',
          'Injected nested `FAQPage` schema addressing exact parent queries verified by Rich Results Test',
          'Secured brand mentions in 3 outdoor gear guides frequently cited as sources by Perplexity AI',
          'Result: When users prompt ChatGPT Search or Google AI Overviews, the brand is featured in the top recommendation card with a direct link'
        ],
        codeSnippet: `<!-- Direct Answer Entity Structure for AI Extraction -->
<section class="ai-citation-block" itemscope itemtype="https://schema.org/FAQPage">
  <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
    <h3 itemprop="name">What is the safest electric balance bike for a 5-year-old child?</h3>
    <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
      <p itemprop="text">
        <strong>Direct Answer:</strong> The safest electric balance bike for 5-year-olds 
        is the <em>BrandName SafeStart 16</em>. It provides a three-stage parental speed lock 
        (5 mph beginner, 8 mph intermediate, 12 mph advanced), mechanical dual disc brakes, 
        and an ultralight 18.2 lb aluminum alloy frame with an 11-inch low standover height.
      </p>
    </div>
  </div>
</section>`,
        kpis: [
          { label: 'ChatGPT Search Citations', value: 'Top Pick', change: 'Cited as primary 5-year-old recommendation' },
          { label: 'Perplexity AI Source', value: 'Ranked #1 Source', change: 'Included in 82% of related queries' },
          { label: 'AI Overview Inclusions', value: '24 Keywords', change: 'Triggered Google AI snippet box' },
          { label: 'Zero-Click Brand Traffic', value: '+68% Referral', change: 'Direct clicks from AI summary cards' }
        ]
      }
    }
  };

  const currentService = detailedServices[activeServiceTab];

  // 10-Step SEO Workflow
  const workflowSteps = [
    {
      step: '01',
      title: 'Website & SEO Audit',
      focus: 'Discovery & Diagnostics',
      desc: 'Conducting a comprehensive 40+ point technical, crawl, and on-page audit using Screaming Frog and Google Search Console.',
      deliverable: '40+ Point Technical SEO Health Report & Prioritized Bug Matrix'
    },
    {
      step: '02',
      title: 'Competitor Analysis',
      focus: 'Market Intelligence',
      desc: 'Reverse-engineering top 5 ranking competitors to uncover backlink gaps, keyword footprints, and content opportunities.',
      deliverable: 'Competitor Keyword & Backlink Gap Matrix (Ahrefs/SEMrush)'
    },
    {
      step: '03',
      title: 'Keyword Research',
      focus: 'Intent & Demand Mapping',
      desc: 'Extracting and categorizing high-intent transactional, commercial, and informational keywords mapped to target URLs.',
      deliverable: 'Master Keyword Mapping Workbook with Search Volume & KD Scores'
    },
    {
      step: '04',
      title: 'SEO Strategy & Planning',
      focus: 'Roadmap & Prioritization',
      desc: 'Developing a prioritized 3-to-6 month implementation timeline balancing quick technical wins and high-impact content.',
      deliverable: 'Phased 90-Day Execution Roadmap & KPI Benchmark Tracker'
    },
    {
      step: '05',
      title: 'Technical Implementation',
      focus: 'Architecture & Speed',
      desc: 'Resolving crawl errors, canonical duplicates, robots.txt directives, XML sitemaps, Core Web Vitals, and JSON-LD schema.',
      deliverable: 'Validated Clean Crawl, Passing Core Web Vitals, and Rich Snippet Schema'
    },
    {
      step: '06',
      title: 'On-Page Optimization',
      focus: 'Semantic Alignment',
      desc: 'Rewriting title tags, meta descriptions, H1-H3 hierarchies, image ALTs, and strategic internal link mesh for target pages.',
      deliverable: 'Full On-Page Optimization of Priority Collection & Product Pages'
    },
    {
      step: '07',
      title: 'Content Optimization',
      focus: 'Topic Clusters & Depth',
      desc: 'Publishing and refreshing high-authority pillar guides and supporting topic clusters answering long-tail buyer questions.',
      deliverable: 'Topical Content Cluster Briefs & Published Buyer Guides'
    },
    {
      step: '08',
      title: 'Off-Page & Link Building',
      focus: 'Authority & Digital PR',
      desc: 'Executing white-hat editorial outreach to secure high-DR contextual backlinks, niche guest posts, and press mentions.',
      deliverable: 'Monthly White-Hat Contextual Backlinks (DR 40+) & Placement Ledger'
    },
    {
      step: '09',
      title: 'Performance Monitoring',
      focus: 'Real-Time Tracking',
      desc: 'Monitoring daily keyword position movements, search impressions, indexation rate, and crawl health in Google Search Console.',
      deliverable: 'Daily SERP Tracking & Instant Indexation Alerts'
    },
    {
      step: '10',
      title: 'Reporting & Iteration',
      focus: 'Continuous Growth',
      desc: 'Delivering transparent monthly executive dashboards connecting organic search traffic improvements directly to client revenue.',
      deliverable: 'Monthly Executive SEO KPI Report with Next-Month Action Plan'
    }
  ];

  // Verified SEO Tools
  const seoTools = [
    {
      name: 'Google Search Console',
      category: 'Indexing & Performance',
      badge: 'Official Google Tool',
      icon: Search,
      role: 'Direct performance data from Google: tracking impressions, clicks, average CTR, indexing issues, and sitemap health.'
    },
    {
      name: 'Google Analytics 4',
      category: 'Traffic & Conversion Analytics',
      badge: 'Attribution & Revenue',
      icon: Activity,
      role: 'Measuring multi-touch organic conversion paths, engaged sessions, bounce rates, and e-commerce transactions.'
    },
    {
      name: 'Google PageSpeed Insights',
      category: 'Core Web Vitals & Speed',
      badge: 'User Experience Engine',
      icon: Zap,
      role: 'Profiling real-world Chrome User Experience (CrUX) data for Largest Contentful Paint (LCP), INP, and CLS.'
    },
    {
      name: 'Screaming Frog SEO Spider',
      category: 'Deep Crawl Diagnostics',
      badge: 'Technical Spider',
      icon: Compass,
      role: 'Crawling tens of thousands of URLs to detect redirect hops, missing metadata, canonical loops, and broken links.'
    },
    {
      name: 'Ahrefs',
      category: 'Backlinks & Competitor Audits',
      badge: 'Authority Analysis',
      icon: Link2,
      role: 'Comprehensive backlink profiling, Domain Rating (DR) tracking, competitor content gaps, and keyword difficulty analysis.'
    },
    {
      name: 'SEMrush',
      category: 'SERP & Keyword Intelligence',
      badge: 'Rank Tracking & Research',
      icon: BarChart3,
      role: 'Keyword magic extraction, daily SERP position tracking, search intent categorization, and featured snippet monitoring.'
    },
    {
      name: 'Google Keyword Planner',
      category: 'Search Demand & Commercial Intent',
      badge: 'Direct Search Volume',
      icon: Key,
      role: 'Direct Google search query volumes, historical seasonal spikes, and commercial CPC bidding benchmarks.'
    },
    {
      name: 'Schema Markup Validator',
      category: 'Structured Data Integrity',
      badge: 'Schema.org Standard',
      icon: Code2,
      role: 'Validating JSON-LD microdata syntax to ensure zero syntax errors or missing required entity attributes.'
    },
    {
      name: 'Rich Results Test',
      category: 'Google Rich Snippet Verification',
      badge: 'SERP Feature Preview',
      icon: Eye,
      role: 'Testing eligibility for Product price badges, review star snippets, FAQ accordions, and merchant listings.'
    }
  ];

  return (
    <section id="seo-services" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200 font-sans">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Header & Overview Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4 shadow-xs">
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold">
              Data-Driven Organic Growth
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Complete SEO Services & Practical Execution
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            Search engine optimization is not guesswork or keyword stuffing. It is a systematic discipline 
            combining rigorous technical architecture, semantic content modeling, high-authority digital PR, 
            and cutting-edge Generative & Answer Engine Optimization (GEO/AEO).
          </p>
        </div>

        {/* 1. Overview Disciplines Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Core Competencies & Services Spectrum
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {overviewDisciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Detailed SEO Services with Practical Examples */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Deep-Dive Service Breakdowns
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Interactive Service Methodology & Real-World Examples
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold">
              Select any discipline to inspect its business necessity, key operational activities, 
              execution framework, and a tangible e-commerce problem-solution case.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-3 mb-8 no-scrollbar">
            {[
              { id: 'technical', label: 'Technical SEO', icon: Settings },
              { id: 'onpage', label: 'On-Page SEO', icon: FileText },
              { id: 'offpage', label: 'Off-Page SEO', icon: Link2 },
              { id: 'local', label: 'Local SEO', icon: MapPin },
              { id: 'ecommerce', label: 'E-Commerce SEO', icon: ShoppingCart },
              { id: 'keywords', label: 'Keyword Strategy', icon: Key },
              { id: 'geo', label: 'GEO & AEO', icon: Sparkles },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeServiceTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceTab(tab.id as any)}
                  className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Top Service Header Bar */}
            <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                  <currentService.icon className="w-3 h-3" />
                  <span>{currentService.badge}</span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {currentService.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {currentService.what}
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md active:scale-95"
                >
                  <span>Request {currentService.badge} Audit</span>
                  <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Why & Activities Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-slate-200 bg-slate-50/50">
              
              {/* Why Businesses Need It */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <h5 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Why Businesses Need It
                  </h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold bg-white p-4 rounded-xl border border-slate-200/80">
                  {currentService.why}
                </p>

                {/* 4-Step Execution Flow */}
                <div className="pt-2">
                  <h6 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Execution Methodology
                  </h6>
                  <div className="space-y-2.5">
                    {currentService.execution.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs bg-white p-3 rounded-xl border border-slate-200/70">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <strong className="text-slate-900 block font-semibold">{step.step}</strong>
                          <span className="text-slate-500 text-[11px] leading-normal">{step.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Activities Included */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h5 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Comprehensive Deliverable Activities
                  </h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.activities.map((activity, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-start space-x-2.5"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-700 leading-snug font-medium">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Practical Example Showcase Block */}
            <div className="p-6 sm:p-8 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
                    Real-World Practical Scenario
                  </span>
                  <h5 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {currentService.example.title}
                  </h5>
                  <p className="text-xs text-slate-500 font-medium">
                    {currentService.example.context}
                  </p>
                </div>

                {/* Sub-view mode toggles */}
                <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-xl self-start sm:self-auto border border-slate-200">
                  <button
                    onClick={() => setExampleViewMode('solution')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      exampleViewMode === 'solution'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Problem vs Resolution
                  </button>
                  <button
                    onClick={() => setExampleViewMode('code')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      exampleViewMode === 'code'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Code & Blueprint
                  </button>
                  <button
                    onClick={() => setExampleViewMode('kpis')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      exampleViewMode === 'kpis'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Expected Outcomes & KPIs
                  </button>
                </div>
              </div>

              {/* Sub-view Content: Problem vs Solution */}
              {exampleViewMode === 'solution' && (
                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Problem Identified */}
                  <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/70 space-y-3">
                    <div className="flex items-center space-x-2 text-rose-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider">
                        Initial Obstacles & Bottlenecks
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {currentService.example.problem.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-rose-950 font-medium leading-relaxed">
                          <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Execution Resolution */}
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-3">
                    <div className="flex items-center space-x-2 text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider">
                        Executed Technical & Strategic Fix
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {currentService.example.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-emerald-950 font-medium leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Sub-view Content: Code & Blueprint */}
              {exampleViewMode === 'code' && (
                <div className="pt-6">
                  <div className="rounded-2xl bg-slate-950 text-slate-200 p-5 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                      <span className="flex items-center space-x-1.5">
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>Implementation Architecture & Syntax Reference</span>
                      </span>
                      <span className="text-slate-500">Structured Fix</span>
                    </div>
                    <pre className="text-slate-300 whitespace-pre font-mono text-[11px] leading-relaxed">
                      {currentService.example.codeSnippet}
                    </pre>
                  </div>
                </div>
              )}

              {/* Sub-view Content: Expected Outcomes & KPIs */}
              {exampleViewMode === 'kpis' && (
                <div className="pt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {currentService.example.kpis.map((kpi, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                          {kpi.label}
                        </span>
                        <div className="font-display text-xl sm:text-2xl font-extrabold text-blue-600">
                          {kpi.value}
                        </div>
                        <span className="text-[11px] text-emerald-600 font-bold block">
                          {kpi.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* 3. SEO Execution Workflow */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Systematic Methodology
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              10-Stage End-to-End SEO Execution Workflow
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold">
              From foundational crawling to continuous revenue optimization, every stage delivers 
              tangible assets and documented benchmarks.
            </p>
          </div>

          {/* Workflow Interactive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Step Selection List */}
            <div className="md:col-span-5 space-y-2">
              {workflowSteps.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    activeWorkflowStep === idx
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      activeWorkflowStep === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.step}
                    </span>
                    <span className="text-xs font-bold">{item.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${
                    activeWorkflowStep === idx ? 'text-white' : 'text-slate-400'
                  }`} />
                </button>
              ))}
            </div>

            {/* Selected Step Detail Card */}
            <div className="md:col-span-7">
              {(() => {
                const currentStep = workflowSteps[activeWorkflowStep];
                return (
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">
                          Stage {currentStep.step} / 10 • {currentStep.focus}
                        </span>
                        <h4 className="font-display text-2xl font-bold text-slate-900 mt-1">
                          {currentStep.title}
                        </h4>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 font-mono font-bold flex items-center justify-center text-lg shadow-inner">
                        {currentStep.step}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Operational Scope & Execution
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {currentStep.desc}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                        <div className="flex items-center space-x-2 text-emerald-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-xs font-bold uppercase font-display tracking-wider">
                            Verified Client Deliverable
                          </span>
                        </div>
                        <p className="text-xs text-emerald-950 font-bold leading-normal">
                          {currentStep.deliverable}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                      <span>Structured Agile Workflow</span>
                      <a href="#contact" className="text-blue-600 font-bold hover:underline flex items-center">
                        Discuss this phase <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>

        {/* 4. SEO Tools & Technologies */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Tooling Stack
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Enterprise SEO Tools & Diagnostics Stack
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold">
              Tested, industry-standard toolsets utilized to diagnose crawl paths, analyze search demand, 
              and validate structured microdata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {seoTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                        <ToolIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        {tool.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-base font-bold text-slate-900">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] font-mono text-blue-600 font-semibold block mt-0.5">
                        {tool.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {tool.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. SEO Reporting & Performance Metrics Dashboard */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Accountability Framework
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              SEO Reporting & Performance Metrics Model
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold">
              How search success is measured, reported, and linked directly to commercial outcomes.
            </p>
          </div>

          {/* Clean Dashboard Preview Container */}
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            {/* Ambient glows inside dashboard */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none"></div>

            {/* Dashboard Top bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Executive Performance Dashboard
                  </span>
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  Organic Growth & Search Health Overview
                </h4>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300">
                Data Sources: GSC • GA4 • CrUX (Monthly Cycle)
              </div>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Organic Impressions', value: '1.24M', change: '+142% vs baseline', sub: 'Search Visibility' },
                { label: 'Organic Search Clicks', value: '48.6K', change: '+88% high-intent clicks', sub: 'Google SERP Traffic' },
                { label: 'Average Organic CTR', value: '3.92%', change: '+0.8% snippet CTR', sub: 'Title & Meta Gains' },
                { label: 'Indexed Page Health', value: '99.4%', change: '0 crawl errors', sub: 'Sitemap Compliance' },
              ].map((metric, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    {metric.label}
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {metric.value}
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold block">
                    {metric.change}
                  </span>
                  <span className="text-[10px] text-slate-400 block pt-1">
                    {metric.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Secondary KPIs: Keywords, Backlinks, Core Web Vitals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              
              {/* Keyword Ranking Spread */}
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block">
                  Keyword Positions
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Top 3 Positions</span>
                    <span className="font-mono font-bold text-white">28 keywords</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[45%]"></div>
                  </div>

                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-slate-400">Top 4 - 10 Positions</span>
                    <span className="font-mono font-bold text-white">64 keywords</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[65%]"></div>
                  </div>

                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-slate-400">Page 2 (Striking Distance)</span>
                    <span className="font-mono font-bold text-white">42 keywords</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[35%]"></div>
                  </div>
                </div>
              </div>

              {/* Backlink Profile Health */}
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block">
                  Backlink Equity & Authority
                </span>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-slate-900 rounded-xl">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Domain Rating</span>
                    <span className="text-xl font-bold font-display text-blue-400">DR 38</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Referring Domains</span>
                    <span className="text-xl font-bold font-display text-emerald-400">142</span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-300 leading-normal flex items-center space-x-1.5 pt-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Toxic link ratio: 0% • Verified white-hat editorial citations</span>
                </div>
              </div>

              {/* Core Web Vitals Status */}
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block">
                  Core Web Vitals (CrUX Real-User)
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                    <span className="text-slate-300">LCP (Largest Contentful Paint)</span>
                    <span className="font-mono text-emerald-400 font-bold">1.4s (Good)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                    <span className="text-slate-300">INP (Interaction to Next Paint)</span>
                    <span className="font-mono text-emerald-400 font-bold">82ms (Good)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900">
                    <span className="text-slate-300">CLS (Cumulative Layout Shift)</span>
                    <span className="font-mono text-emerald-400 font-bold">0.02 (Good)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Illustrative Notice Disclaimer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  <strong>Illustrative Performance Reporting Model:</strong> All metric dashboards 
                  are tailored to client project requirements and authenticated through official client 
                  Google Search Console & Google Analytics 4 accounts.
                </span>
              </span>
              <a href="#contact" className="text-blue-400 font-bold hover:underline shrink-0">
                Setup Custom Metrics →
              </a>
            </div>

          </div>
        </div>

        {/* 6. Practical SEO Case Study */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              In-Depth Practical Case Study
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Electric Balance Bikes E-Commerce Store
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold">
              A comprehensive blueprint illustrating how end-to-end SEO transforms an e-commerce brand's 
              organic footprint, reducing customer acquisition costs and driving sustainable revenue.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* Case Study Header Banner */}
            <div className="p-6 sm:p-8 bg-blue-600 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-100 font-bold px-2.5 py-1 rounded-md bg-blue-700/60 inline-block">
                  Illustrative E-Commerce SEO Case Study
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Electric Balance Bikes: Scaling Organic DTC Revenue
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
                  Target Market: Direct-to-Consumer Children's Electric Mobility • Platform: Shopify Plus
                </p>
              </div>

              <div className="shrink-0">
                <span className="px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-xs font-bold border border-white/20">
                  Phased 6-Month Blueprint
                </span>
              </div>
            </div>

            {/* Case Study Grid Sections */}
            <div className="p-6 sm:p-10 space-y-10">
              
              {/* Row 1: Challenges & Keyword Research */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-rose-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <h5 className="font-display text-sm font-bold uppercase tracking-wider">
                      Initial SEO Obstacles & Site State
                    </h5>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>Duplicate Collection URLs:</strong> Over 450 duplicate product URLs crawled under `/collections/.../products/` diluting link equity.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>High Paid Ad Dependency:</strong> 82% of monthly store revenue relied on Facebook & Google PPC ads with rising CAC.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>Slow Mobile Vitals:</strong> Heavy uncompressed banner images caused mobile LCP to exceed 4.2 seconds.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>Missing Schema:</strong> Zero Product or FAQ microdata, forfeiting star review snippets and merchant price tags in SERP.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <Key className="w-4 h-4 shrink-0" />
                    <h5 className="font-display text-sm font-bold uppercase tracking-wider">
                      Targeted Keyword Research & Intent Mapping
                    </h5>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Transactional Terms:</strong> "electric balance bike for kids" (8.1k vol), "kids electric dirt bike 16 inch" (3.6k vol).</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Commercial Buyer Guides:</strong> "best electric balance bike for beginners", "balance bike vs training wheels".</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Safety & Educational:</strong> "what age can a child ride electric balance bike", "kids ebike safety gear guide".</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Low-Difficulty Opportunities:</strong> 64 long-tail conversational questions identified with KD &lt; 20.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Row 2: Technical SEO, On-Page & Schema */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-slate-200">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="font-mono text-[10px] text-blue-600 uppercase font-bold tracking-wider block">
                    Technical Improvements
                  </span>
                  <h6 className="font-display text-sm font-bold text-slate-900">
                    Crawl & Speed Overhaul
                  </h6>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Enforced master canonical URLs in Liquid templates; compressed image assets to WebP; 
                    streamlined JavaScript payloads to drop mobile LCP from 4.2s to 1.3s.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="font-mono text-[10px] text-blue-600 uppercase font-bold tracking-wider block">
                    On-Page & Collection Architecture
                  </span>
                  <h6 className="font-display text-sm font-bold text-slate-900">
                    Semantic Page Engineering
                  </h6>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Restructured collection taxonomy by wheel size (12", 14", 16"); injected 180-word buyer 
                    guides onto collection headers; rewritten product titles for maximum SERP click-throughs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="font-mono text-[10px] text-blue-600 uppercase font-bold tracking-wider block">
                    Schema Implementation
                  </span>
                  <h6 className="font-display text-sm font-bold text-slate-900">
                    JSON-LD Entity Graphs
                  </h6>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Deployed comprehensive `Product`, `Offer`, `AggregateRating`, and `FAQPage` schemas, 
                    earning Google rich snippet price tags and customer review stars across 100% of product listings.
                  </p>
                </div>
              </div>

              {/* Row 3: Content Strategy & Link Building */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-indigo-700">
                    <Layers className="w-4 h-4 shrink-0" />
                    <h5 className="font-display text-sm font-bold uppercase tracking-wider">
                      Content Strategy & Topical Clusters
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Published a 4-pillar educational cluster covering child balance milestones, battery charging safety, 
                    and helmet fitting standards. Every blog post included contextual, high-converting product buy buttons 
                    and internal links pointing back to flagship model collections.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-purple-700">
                    <Share2 className="w-4 h-4 shrink-0" />
                    <h5 className="font-display text-sm font-bold uppercase tracking-wider">
                      Editorial Outreach & Link Building
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Executed targeted digital PR outreach to verified parenting publications and family cycling blogs. 
                    Secured 38 dofollow contextual backlinks from real editorial websites (DR 42 to DR 71) featuring 
                    natural branded and partial-match anchor text.
                  </p>
                </div>
              </div>

              {/* Expected Business Impact Outcomes */}
              <div>
                <div className="text-center mb-6">
                  <span className="font-mono text-xs text-emerald-600 uppercase font-bold tracking-widest block">
                    Projected Commercial Impact
                  </span>
                  <h5 className="font-display text-xl font-bold text-slate-900 mt-1">
                    Expected Business Outcomes & Growth Trajectory
                  </h5>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Organic Traffic Share', value: '58% of Sales', desc: 'Down from 82% paid dependency' },
                    { label: 'Primary SERP Position', value: 'Page 1 (#3)', desc: 'For "electric balance bike for kids"' },
                    { label: 'Customer Acq. Cost', value: '-42% CAC', desc: 'Blended acquisition efficiency' },
                    { label: 'Core Web Vitals', value: '99/100 Mobile', desc: 'LCP 1.3s, zero layout shifts' }
                  ].map((impact, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-center space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                        {impact.label}
                      </span>
                      <div className="font-display text-2xl font-extrabold text-emerald-700">
                        {impact.value}
                      </div>
                      <span className="text-[11px] text-slate-600 font-medium block">
                        {impact.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-[11px] text-slate-500 font-medium mt-4">
                  *Clearly labeled as an illustrative case study outlining standard methodology and modeled e-commerce outcomes.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* 7. Call To Action (Let's Discuss Your SEO Strategy) */}
        <div className="rounded-3xl bg-linear-to-r from-blue-700 to-indigo-800 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase tracking-widest font-bold border border-white/20">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Ready for Measurable Organic Growth?</span>
            </span>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Let's Discuss Your SEO Strategy
            </h3>

            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-semibold">
              Whether you need a full technical crawl audit, Shopify collection restructuring, 
              or next-generation Generative Engine Optimization (GEO) for ChatGPT and AI Overviews, 
              I deliver tailored, end-to-end execution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-bold text-blue-900 bg-white hover:bg-slate-100 transition-all shadow-lg active:scale-95 cursor-pointer"
                id="cta-seo-discuss"
              >
                <span>Book a Strategic SEO Consultation</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-600" />
              </a>

              <a
                href="https://www.fiverr.com/phoebe_johnson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-bold text-white bg-blue-600/60 hover:bg-blue-600 border border-white/25 transition-all active:scale-95 cursor-pointer"
                id="cta-seo-fiverr"
              >
                <span>Order Verified SEO Gig on Fiverr</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
