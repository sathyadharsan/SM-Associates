'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'dark';
}

export function FlowButton({ 
  text = "Modern Button", 
  to, 
  href, 
  onClick, 
  className = "", 
  children,
  variant = "primary",
  ...props 
}: FlowButtonProps) {
  const contentText = children || text;
  const bgHoverClass = variant === "dark" ? "bg-[#0a1128]" : "bg-[#0072bc]";

  const innerContent = (
    <>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-current fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-2 group-hover:translate-x-2 transition-all duration-[800ms] ease-out whitespace-nowrap">
        {contentText}
      </span>

      {/* Circle expansion effect */}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${bgHoverClass} rounded-[50%] opacity-0 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none`}></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-current fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </>
  );

  const baseStyles = `group relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#0072bc]/40 bg-white px-7 py-3 text-sm font-semibold text-[#0a1128] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[14px] active:scale-[0.96] shadow-sm ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyles} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {innerContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} {...props}>
      {innerContent}
    </button>
  );
}

export default FlowButton;
