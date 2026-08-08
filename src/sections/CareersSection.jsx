import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { CtaButton } from '../components/ui/cta-button';
import { careerPositions } from '../data/homeData';

export default function CareersSection() {
  return (
    <section id="careers" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Careers at SM Associates"
            title="Join India's leading recovery operations team."
            description="Build your career with an institution that values professional integrity, field discipline, and measurable outcomes in financial risk management."
            className="lg:max-w-xl"
          />

          <div className="grid gap-4">
            {careerPositions.map((position, index) => (
              <a
                key={position.title}
                href="/careers#open-positions"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="glass-card group rounded-[20px] p-6 transition duration-300 hover:border-[#0072bc]/40 hover:shadow-enterpriseHover"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950 group-hover:text-[#0072bc] transition-colors">{position.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Briefcase className="h-4 w-4 text-[#0072bc]" />
                          {position.department}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#0072bc]/10 px-2.5 py-0.5 text-xs font-bold text-[#0072bc]">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0072bc] text-white transition group-hover:bg-[#005a96] shadow-sm">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 glass-card rounded-[28px] p-8 text-center"
        >
          <Users className="mx-auto h-12 w-12 text-[#0072bc]" />
          <h3 className="mt-6 text-2xl font-semibold text-gray-950">Join Our Team of 1,500+ Professionals</h3>
          <p className="mt-3 max-w-2xl mx-auto text-base leading-7 text-slate-500">
            We work with CAs, Advocates, MBAs, Ex-Bankers, Field Officers, and Tele-recovery Specialists across South India.
            Explore active openings or send your resume directly to our HR recruitment desk.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <CtaButton href="/careers">
              Explore All Open Positions
            </CtaButton>
            <CtaButton href="mailto:smarmpl.ho@gmail.com" variant="secondary">
              Send Resume to HR Desk
            </CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}