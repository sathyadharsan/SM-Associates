import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import ContactOptionCards from '../components/contact/ContactOptionCards';
import EnterpriseContactForm from '../components/contact/EnterpriseContactForm';
import OfficeDirectory from '../components/contact/OfficeDirectory';
import OperationalMap from '../components/contact/OperationalMap';

function ContactHero() {
  return (
    <section className="enterprise-gradient relative overflow-hidden pb-20 pt-44 text-center">
      <div className="aurora-a absolute left-[10%] top-[-10%] h-[480px] w-[480px] rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(51,102,255,0.10), transparent 70%)' }} />
      <div className="aurora-b absolute right-[8%] top-[0%] h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(200,164,93,0.10), transparent 70%)' }} />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-500"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          Contact SM Associates
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-sora text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]"
        >
          Connect with India&apos;s trusted recovery,<br className="hidden sm:block" /> verification and risk management specialists.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg"
        >
          Discuss your operational requirements with our enterprise team — from portfolio-scale collections to SARFAESI enforcement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#enquiry" variant="primary">Request a Consultation</Button>
          <Button href="#offices" variant="secondary" icon={false}>
            View Our Offices <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="enterprise-gradient noise-overlay relative overflow-hidden rounded-[28px] border border-slate-200 px-8 py-16 text-center shadow-enterprise sm:px-16"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-500">Let&apos;s Talk</span>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-sora text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s build better recovery operations together
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
            Whether you&apos;re evaluating a new empanelment or scaling an existing portfolio, our team is ready to structure the right operating model for you.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="#enquiry" variant="primary">Contact Enterprise Team</Button>
            <Button to="/services" variant="secondary" icon={false}>
              Explore Services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <EnterpriseContactForm />
      <ContactOptionCards />
      <OfficeDirectory />
      <OperationalMap />
      <ClosingCta />
    </div>
  );
}
