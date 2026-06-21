# SM Associates Risk Management — Project Brief

## What this is
A production marketing website for **SM Associates Risk Management Pvt. Ltd.**, a B2B debt recovery and risk management firm based in Tamil Nadu, India, operating since 2000. Clients are banks, NBFCs, housing finance companies and ARCs. Services: SARFAESI enforcement, field collections, pre/post-disbursal verification, fraud control, legal coordination, asset repossession, auctions, manpower solutions.

Design goal: look like a premium fintech SaaS company (Credgenics, Stripe, Ramp, Linear, Vercel) — NOT a generic corporate template.

## Tech Stack
- React 18 + Vite
- React Router DOM v6 (nested routes, `SiteLayout` wraps all pages with Header/Footer)
- Tailwind CSS 3.4 (custom color tokens in `tailwind.config.js`)
- Framer Motion for all animations
- Lucide React for icons
- Fonts: **Sora** (hero headlines, weight 800) + **Inter** (body/UI), loaded via Google Fonts in `index.html`

## Working directory
`C:\sm Associates` (NOT the same as the Claude config dir — this is a separate project root). Dev server: `npm run dev` → localhost:5173. **No preview tool works here** — user manually checks in browser and pastes screenshots back.

## Brand color
`#3366FF` (electric blue) is the single brand color used everywhere — CTAs, accents, icons, hover states, gradients. Previously went through navy `#0072bc` → purple `#7e33ff` → settled on `#3366FF`. A violet `#7C3AED` is used as a secondary gradient partner color (navbar CTA, aurora background) but `#3366FF` is primary.

## Key files
- `src/layouts/Header.jsx` — floating glass navbar (see below)
- `src/sections/HeroSection.jsx` — homepage hero (see below)
- `src/sections/WhySection.jsx`, `IndustriesSection.jsx`, `CaseStudiesSection.jsx`, `TamilNaduCoverageSection.jsx`, `ContactCTASection.jsx`, `RecoveryOperatingSystemSection.jsx`, `ServicesDetailedSection.jsx`, `TestimonialsSection.jsx`, `TrustSection.jsx` — homepage sections, alternating dark (`#020617`/`#0e0818`) and light (white/`#f6f8fb`) backgrounds for visual rhythm
- `src/components/SectionHeader.jsx` — reusable eyebrow+title+description block, has `inverted` prop for dark sections
- `src/components/ClientLogoCarousel.jsx` + `src/data/clientLogos.js` — scrolling bank logo strip
- `src/pages/HomePage.jsx` — section order on homepage
- `src/routes/index.jsx` — all routes, must stay inside `<Route element={<SiteLayout />}>` or pages lose header/footer
- `tailwind.config.js` — `brand` color scale (`#3366FF` family), `navy`/`blue` legacy scale (now dark purple-navy, mostly unused after cleanup)
- `public/logos/*.svg|png` — bank logos (20 banks), some real downloads, some hand-drawn SVG fallbacks (Wikimedia/Clearbit rate-limited us)

## Current Navbar (Header.jsx)
Just rebuilt as a **floating dark-glass premium navbar**:
- Fixed, floats with `pt-3` margin from top edge, `rounded-2xl`, max-w-1400px
- Background: `rgba(10,14,26,0.55→0.78)` + `backdrop-filter: blur(26px) saturate(160%)`
- Ambient purple-blue glow blob behind it (`linear-gradient(90deg, #3366FF, #7C3AED)`, blurred)
- Logo: thin outline `Shield` icon (lucide, `strokeWidth=1.6`) + "SM Associates" text, no logo box/background
- Nav links centered via `flex-1` + `paddingLeft: 40px` (shifted toward logo per user request), `font-semibold`, gradient glow underline on hover
- Dropdown megamenus: dark glass panels matching navbar
- Right side: "Login" text link + "Book a Demo" button with `linear-gradient(135deg, #3366FF, #7C3AED)`, glow shadow, lifts on hover
- Mobile: dark glass accordion menu
- **No utility bar currently** (location/phone bar was added then removed per user request — was inside navbar between logo row and... actually it's fully removed now, not even in hero)
- Height ~60px main row; `HeroSection` has `paddingTop: 76px` to clear it

## Current Hero (HeroSection.jsx)
Two-part homepage opener:

**1. Dark cinematic hero** (`#020617` base):
- `AuroraBackground` component — 4 drifting blurred gradient blobs (blue/violet/cyan/indigo) on independent CSS keyframe animations (22-34s loops, `aurora-a/b/c` classes in `index.css`), center radial illumination, fading technical grid (masked with `radial-gradient` so it fades at edges), 24 randomized floating particles (`hero-particle` class, `particleFloat` keyframe), SVG `feTurbulence` grain/noise overlay at 5% opacity with `mix-blend-overlay`, dark vignette radial + bottom fade-to-black gradient
- Headline: `font-sora font-extrabold`, `clamp(36-64px)`, white text, `#3366FF` accent line — "Full-Stack Recovery & Risk Management for Growing Financial Institutions"
- Subtext + single outlined CTA "Schedule a Consultation"
- 3 floating white trust cards overlap the dark→light boundary (negative margin trick) — Trophy/Shield/BadgeCheck icons, title+sub+copy structure, inspired by a reference screenshot the user shared (an IT-services-style hero with floating stat cards)

**2. Light stats strip** below — 4 stats (24+ years, ₹500Cr+ recovered, 1,200+ field staff, 98% retention) on `#f6f8fb` background

This replaced TWO earlier hero designs in this session: first a white Credgenics-style two-column hero with a fake SaaS dashboard mockup (KPI cards, bar/donut charts, activity table — all hand-coded JSX/SVG, no real screenshots), then pivoted to this dark cinematic version per user's explicit reference image.

## Design patterns established this session
- **Alternating section backgrounds**: dark (`#020617`/`#0e0818`/`#0f2444`-equivalents) ↔ light (white/`#f6f8fb`) for visual separation between homepage sections, with a 1px brand-blue gradient line at the top of each dark section as a separator
- **`inverted` prop** on `SectionHeader` switches text from dark-on-light to white-on-dark
- **No real photography or stock images anywhere** — every "screenshot" (dashboards, mockups) is hand-coded JSX + inline SVG with fake but realistic-looking data (₹4.8Cr recovered, 14,280 cases, etc.)
- User reviews changes by screenshotting their own localhost:5173 and pasting into chat — there is no automated visual verification available for this project

## Known content/structure (don't relitigate)
- Services reduced to 6 cards on homepage (full list elsewhere via "View All Services")
- Case studies are stat-only cards (category + title + outcome number + link), no bullet lists
- Recovery OS module buttons show icon + title only, no description text
- Industries section has tabbed interface (6 industries: Banking, NBFC, Housing Finance, ARC, Insurance, FinTech)

## User's working style (important)
- Communicates in Tamil/English mix ("Tanglish"), gives terse directives, expects me to infer intent and just execute
- Frequently shares **screenshots of reference websites** (Credgenics, an IT-services template, a Microsoft Edge browser-chrome screenshot) and says "ipdi venum" (want it like this) — I'm expected to reverse-engineer the exact layout/spacing/style from the image and rebuild matching sections, not just take inspiration loosely
- Will give big "act as a senior product designer, redesign everything" prompts, then immediately follow up with very specific pixel-level corrections from screenshots of the result — treat each correction as a precise spec, not a vague vibe
- Says "Do NOT redesign anything, only fix X" sometimes — when that's the instruction, change ONLY what's named, nothing else, even if other things look improvable
- Pace is fast — multiple full-file rewrites per turn, no time spent asking permission for color/spacing choices unless genuinely ambiguous

## Open / pending items (from earlier in session, not yet revisited)
- Contact form has no backend/submission handler (EmailJS/Formspree not wired)
- Mobile responsive pass not fully verified (testimonials, Recovery OS tabs on small screens)
- ~13 bank logos in `public/logos/` are placeholder/hand-drawn SVGs, not real bank logos (Wikimedia/Clearbit downloads got rate-limited)
- `AssetRepossessionPage` and `AuctionServicesPage` exist as files but may not be wired into nav/routes
