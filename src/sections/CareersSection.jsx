import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
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
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="glass-card group rounded-[20px] p-6 transition duration-300 hover:border-gold-400/40 hover:shadow-enterpriseHover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">{position.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white transition group-hover:bg-gold-500">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
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
          <Users className="mx-auto h-12 w-12 text-blue-950" />
          <h3 className="mt-6 text-2xl font-semibold text-blue-950">Join Our Team of 300+ Professionals</h3>
          <p className="mt-3 max-w-2xl mx-auto text-base leading-7 text-slate-500">
            We work with CAs, Advocates, MBAs, and Ex-Bankers to deliver exceptional recovery outcomes.
            If you're passionate about financial risk management, we'd love to hear from you.
          </p>
          <a
            href="mailto:smarmpl.ho@gmail.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-700"
          >
            Send Your Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}