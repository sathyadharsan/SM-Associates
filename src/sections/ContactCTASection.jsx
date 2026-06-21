import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

export default function ContactCTASection() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28" style={{ background: '#f6f8fb' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #3366FF, transparent)' }} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3366FF, transparent)' }} />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #2d1654, transparent)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3366FF]">Get In Touch</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-gray-950 sm:text-5xl lg:text-6xl">
              Need a Trusted Recovery & Risk Management Partner?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-500">
              Discuss recovery operations, collections strategy, SARFAESI support, verification services or asset recovery requirements with our risk management team.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:smarmpl.ho@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-soft transition hover:opacity-90"
                style={{ background: '#3366FF', color: '#ffffff' }}
              >
                <Mail className="h-4 w-4" />
                Request Consultation
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-950 transition hover:border-[#3366FF] hover:text-[#3366FF]"
              >
                <Download className="h-4 w-4" />
                Download Company Profile
              </a>
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
              <div key={item.title} className="rounded-[20px] border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#3366FF]/40">
                <h3 className="font-semibold text-gray-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{item.copy}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
