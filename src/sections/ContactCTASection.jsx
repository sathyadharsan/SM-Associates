import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function ContactCTASection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-[32px] p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -bottom-32 left-20 h-96 w-96 rounded-full bg-navy-800/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Portfolio Review CTA</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-navy-900 sm:text-5xl lg:text-7xl">
                Need a Trusted Recovery &amp; Risk Management Partner?
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
                Discuss recovery operations, collections strategy, SARFAESI support, verification services or asset recovery
                requirements with our risk management team.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="mailto:smarmpl.ho@gmail.com" icon={false}>
                  <Mail className="h-4 w-4" />
                  Request Consultation
                </Button>
                <Button variant="secondary" href="#contact" icon={false}>
                  <Download className="h-4 w-4" />
                  Download Company Profile
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid gap-4"
            >
              {[
                { title: 'Recovery Strategy', copy: 'Portfolio-level recovery planning and execution support.' },
                { title: 'Risk Operations', copy: 'Compliance-led recovery and collections coordination.' },
                { title: 'Verification Support', copy: 'Pre and post-disbursal validation workflows.' }
              ].map(item => (
                <div key={item.title} className="rounded-[20px] border border-slate-200 bg-white/75 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-enterpriseHover">
                  <h3 className="font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
