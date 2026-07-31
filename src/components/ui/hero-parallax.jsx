"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroParallax = ({
  products,
}) => {
  // Divide 37+ products into 3 parallax rows
  const itemsPerRow = Math.ceil(products.length / 3);
  const firstRow = products.slice(0, itemsPerRow);
  const secondRow = products.slice(itemsPerRow, itemsPerRow * 2);
  const thirdRow = products.slice(itemsPerRow * 2);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Raw scroll-linked values, no useSpring: a spring keeps easing toward its
  // target after the source value stops changing, so cards would visibly
  // keep drifting for a few hundred ms after the user stops scrolling. These
  // track scrollYProgress 1:1 instead — movement is fully controlled by
  // scroll position, with no independent momentum of its own.
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [12, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.25], [-350, 100]);

  return (
    <div
      ref={ref}
      className="min-h-screen py-16 md:py-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-white text-slate-900 pb-32"
    >
      <Header totalServices={products.length} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="w-full relative z-10"
      >
        {/* Row 1: Moves on scroll */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16 mb-10 md:mb-16">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row1-${product.title}-${idx}`}
            />
          ))}
        </motion.div>

        {/* Row 2: Moves in reverse on scroll */}
        <motion.div className="flex flex-row mb-10 md:mb-16 space-x-8 md:space-x-16">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`row2-${product.title}-${idx}`}
            />
          ))}
        </motion.div>

        {/* Row 3: Moves on scroll */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row3-${product.title}-${idx}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ totalServices }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 md:py-24 px-4 w-full left-0 top-0">
      <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 px-3.5 py-1.5 rounded-full mb-4">
        Enterprise Recovery Operations · {totalServices || '37+'} Services Portfolio
      </span>
      <h1 className="text-3xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
        Precision Operations <br /> Across South India
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-6 text-slate-600 leading-relaxed">
        From digital engagement to field enforcement and SARFAESI asset resolution, explore our complete portfolio of {totalServices || '37+'} specialized recovery services built for banks, NBFCs, and financial institutions.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-all hover:bg-[#005ea6] hover:shadow-xl"
        >
          Talk to an Expert
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <a
          href="#enterprise-services"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
        >
          Explore Our Capabilities
        </a>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
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
      className="group/product h-64 w-[18rem] md:h-[21rem] md:w-[26rem] relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#0072bc] hover:shadow-2xl hover:shadow-[#0072bc]/20"
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
