/**
 * Shared CTA button.
 *
 * Renders CtaButton (src/components/ui/cta-button) — the exact
 * "Contact Us" treatment from the site header — so every call site
 * shares one design instead of each hand-rolling its own pill.
 *
 * The old API is kept verbatim: `to`, `href`, `variant`, `className`
 * and any passthrough props all behave as before. `variant='secondary'`
 * maps to CtaButton's own secondary (outline) look; anything else maps
 * to the solid brand-gradient primary.
 */

import { CtaButton } from './ui/cta-button';

export default function Button({ children, variant = 'primary', icon = true, className = '', to, href, ...props }) {
  return (
    <CtaButton
      to={to}
      href={href}
      variant={variant === 'secondary' ? 'secondary' : 'primary'}
      showIcon={icon}
      className={className}
      {...props}
    >
      {children}
    </CtaButton>
  );
}
