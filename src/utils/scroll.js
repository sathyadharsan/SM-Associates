import { useEffect, useState } from 'react';

export const ScrollLink = ({ href, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services-detailed', 'industries', 'capabilities', 'resources', 'careers', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};