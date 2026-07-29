"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroParallax = ({
  products,
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [12, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [-350, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-screen py-16 md:py-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-slate-950 text-white pb-32"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="w-full relative z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16 mb-10 md:mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-16 space-x-8 md:space-x-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 md:py-24 px-4 w-full left-0 top-0">
      <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 px-3.5 py-1.5 rounded-full mb-4">
        Enterprise Recovery Operations
      </span>
      <h1 className="text-3xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
        Precision Operations <br /> Across South India
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-6 text-slate-300 leading-relaxed">
        From digital engagement to field enforcement and SARFAESI asset resolution, explore our enterprise recovery portfolio built for banks, NBFCs, and financial institutions.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/30 transition-all hover:bg-[#005ea6] hover:shadow-xl"
        >
          Talk to an Expert
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <a
          href="#enterprise-services"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-md transition-colors hover:border-slate-500 hover:text-white"
        >
          Explore Our Capabilities
        </a>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      key={product.title}
      className="group/product h-88 w-[22rem] md:h-[28rem] md:w-[32rem] relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-950 transition-all duration-300 hover:border-[#0072bc] hover:shadow-[#0072bc]/30"
    >
      <Link
        to={product.link || "/services"}
        className="block group-hover/product:shadow-2xl h-full w-full relative"
      >
        <img
          src={product.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-700 ease-out group-hover/product:scale-105"
          alt={product.title}
          loading="lazy"
        />
        {/* Full card gradient background for strong text contrast */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 opacity-95 transition-opacity duration-300 pointer-events-none" />

        {/* Text overlay content container */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 z-20 pointer-events-none flex flex-col justify-end">
          {product.category && (
            <div>
              <span className="inline-block text-[10px] font-extrabold text-[#0072bc] bg-white px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 shadow-md border border-[#0072bc]/30">
                {product.category}
              </span>
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
            {product.title}
          </h3>
          {product.description && (
            <p className="text-xs md:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed font-normal text-slate-200/90 drop-shadow">
              {product.description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default HeroParallax;
