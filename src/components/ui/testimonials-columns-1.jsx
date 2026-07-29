import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const TestimonialsColumn = (props) => {
  const { className = "", testimonials = [], duration = 20 } = props;

  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map((item, i) => {
                const { quote, text, image, name, role, company, type, stat, rating } = item;
                const bodyText = quote || text;

                return (
                  <div
                    className="p-7 rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#0072bc]/15 hover:border-[#0072bc]/40 transition-all duration-300 max-w-xs w-full relative group flex flex-col justify-between"
                    key={`${index}-${i}`}
                  >
                    <div>
                      {/* Top rating & type badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(rating || 5)].map((_, rIdx) => (
                            <Star key={rIdx} size={13} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        {type && (
                          <span className="text-[10px] font-bold text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {type}
                          </span>
                        )}
                      </div>

                      {/* Quote Content */}
                      <div className="relative mb-5">
                        <Quote size={22} className="text-[#0072bc]/15 absolute -top-1.5 -left-1" />
                        <p className="text-slate-700 text-sm leading-relaxed font-medium relative z-10 italic pl-1">
                          "{bodyText}"
                        </p>
                      </div>
                    </div>

                    <div>
                      {/* Stat callout if available */}
                      {stat && (
                        <div className="mb-4 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Result</span>
                          <span className="text-xs font-extrabold text-[#0072bc]">{stat}</span>
                        </div>
                      )}

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                        {image ? (
                          <img
                            width={40}
                            height={40}
                            src={image}
                            alt={name}
                            className="h-10 w-10 rounded-full object-cover border border-[#0072bc]/30 group-hover:border-[#0072bc] transition-colors shrink-0"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = 'flex';
                              }
                            }}
                          />
                        ) : null}
                        <div
                          className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0072bc] to-[#003a66] text-white font-bold text-xs flex items-center justify-center border border-[#0072bc]/20 shrink-0"
                          style={{ display: image ? 'none' : 'flex' }}
                        >
                          {name ? name.charAt(0) : 'S'}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="font-bold text-slate-900 text-xs truncate tracking-tight leading-snug">
                            {name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate tracking-tight leading-snug">
                            {role}
                          </div>
                          {company && (
                            <div className="text-[10px] text-[#0072bc] font-semibold truncate">
                              {company}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
