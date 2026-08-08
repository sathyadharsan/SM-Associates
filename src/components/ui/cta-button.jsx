/**
 * CtaButton — standard site-wide button powered by FlowButton animation.
 */

import React from 'react';
import { FlowButton } from './flow-button';

export function CtaButton({
  children,
  text,
  variant = 'primary',
  className = '',
  to,
  href,
  onClick,
  ...props
}) {
  return (
    <FlowButton
      text={text}
      to={to}
      href={href}
      onClick={onClick}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </FlowButton>
  );
}

export default CtaButton;
