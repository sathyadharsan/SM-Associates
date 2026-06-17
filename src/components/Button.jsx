import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Button({ children, variant = 'primary', icon = true, className = '', href, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/30';
  const variants = {
    primary: 'bg-navy-900 text-navy-950 shadow-soft hover:bg-slate-200 hover:shadow-enterpriseHover',
    secondary: 'border border-navy-900 bg-white text-navy-950 hover:border-gold-500 hover:bg-slate-50'
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
