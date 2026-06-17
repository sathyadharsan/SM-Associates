export const designPhilosophy = {
  inspiration: 'DPDZero.com visual philosophy, without copying content',
  productMetaphor: 'Modern fintech operating system for risk management and recovery services',
  principles: [
    'Large typography with disciplined whitespace',
    'White-first enterprise SaaS canvas',
    'Normal blue text for a clean enterprise SaaS feel',
    'Bento grids for capability storytelling',
    'Glassmorphism KPI cards for measurable proof',
    'Fintech workflow visuals for operating-system clarity',
    'Premium interactions that feel calm, precise and data-driven',
    'Storytelling flow from problem to operating model to outcomes'
  ]
};

export const designTokens = {
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#FAFBFC',
      tertiary: '#F8FAFC',
      card: 'rgba(255, 255, 255, 0.78)'
    },
    text: {
      primary: '#2563EB',
      secondary: '#1D4ED8',
      muted: '#64748B',
      footer: '#FFFFFF'
    },
    accent: {
      gold: '#C8A45D',
      softGold: '#E6C87A',
      blueLine: '#2563EB',
      goldLine: '#C8A45D'
    },
    border: {
      soft: 'rgba(203, 213, 225, 0.78)',
      hover: 'rgba(200, 164, 93, 0.45)'
    },
    footer: '#1D4ED8'
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    hero: {
      desktop: 'clamp(3.5rem, 8vw, 6.5rem)',
      mobile: 'clamp(2.75rem, 14vw, 4rem)',
      weight: 600,
      lineHeight: 0.96,
      letterSpacing: '-0.055em'
    },
    section: {
      desktop: 'clamp(2.5rem, 5vw, 4.5rem)',
      mobile: 'clamp(2rem, 10vw, 3rem)',
      weight: 600,
      lineHeight: 1.04,
      letterSpacing: '-0.04em'
    },
    eyebrow: {
      size: '0.75rem',
      weight: 700,
      tracking: '0.28em',
      transform: 'uppercase'
    },
    body: {
      size: '1rem',
      lineHeight: 1.75,
      color: '#64748B'
    }
  },
  spacing: {
    sectionDesktop: 'clamp(5rem, 9vw, 9rem)',
    sectionMobile: 'clamp(4rem, 12vw, 5.5rem)',
    cardPadding: 'clamp(1.25rem, 2vw, 2rem)',
    gridGap: 'clamp(1rem, 2vw, 1.5rem)'
  },
  radius: {
    card: '20px',
    panel: '28px',
    pill: '999px'
  },
  motion: {
    revealDuration: 0.7,
    cardDuration: 0.45,
    marqueeDuration: 34,
    floatDuration: 7,
    hoverElevation: '0 32px 90px rgba(37, 99, 235, 0.14)'
  },
  buttons: {
    primary: {
      bg: '#2563EB',
      text: '#FFFFFF',
      hover: '#1D4ED8'
    },
    secondary: {
      bg: '#FFFFFF',
      border: '#2563EB',
      text: '#2563EB'
    }
  }
};

export const visualSystem = {
  canvas: 'white-first SaaS surface with soft slate section breaks',
  hero: {
    layout: 'split canvas with oversized headline on left and fintech operating dashboard on right',
    background: 'pure white with subtle grid and soft radial highlights',
    visual: 'risk orchestration dashboard with signal cards, recovery pipeline, compliance status and field workflow'
  },
  bento: {
    layout: 'asymmetric 12-column grid with primary cards spanning 6 columns and supporting cards spanning 3 columns',
    cardStyle: 'white glass cards, thin gray border, soft shadow, gold hover accent',
    interaction: 'hover lift, border gold transition, icon glow'
  },
  kpi: {
    layout: 'glass cards with blue numbers, gold indicators and animated counters',
    metrics: ['Years Experience', 'Employees', 'Cases Handled', 'Financial Partners', 'Operations Coverage']
  },
  process: {
    layout: 'horizontal blue timeline with gold connector highlights',
    mobile: 'vertical timeline'
  },
  tabs: {
    layout: 'white vertical tab navigation with normal blue active tab and gold indicator',
    panel: 'glass content panel with structured bullets and workflow summary'
  },
  logoCarousel: {
    layout: 'premium monochrome lender logo marquee with fade edges',
    interaction: 'continuous slow loop'
  }
};
