import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactOptionCards from '../components/contact/ContactOptionCards';
import EnterpriseContactForm from '../components/contact/EnterpriseContactForm';
import OfficeDirectory from '../components/contact/OfficeDirectory';
import { CtaButton } from '../components/ui/cta-button';

/* ── Premium Closing CTA ─────────────────────────────────────────────────── */
function ClosingCta() {
  return (
    <section className="relative bg-slate-50 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white px-8 py-16 text-center shadow-enterprise sm:px-16"
        >
          {/* inner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[28px]"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0, 114, 188,0.06) 0%, transparent 60%),' +
                'radial-gradient(ellipse 50% 40% at 50% 110%, rgba(0, 114, 188, 0.08) 0%, transparent 60%)',
            }}
          />

          <span className="relative font-mono text-xs font-bold uppercase tracking-[0.22em] text-brand-400">
            Let&apos;s Talk
          </span>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-sora text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s build better recovery operations together
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
            Whether you&apos;re evaluating a new empanelment or scaling an existing portfolio, our leadership team is ready to structure the right operating model for you.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaButton href="#enquiry">
              Contact Enterprise Team
            </CtaButton>
            <CtaButton href="/services" variant="secondary">
              Explore Services
            </CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <div className="bg-white pt-24">
      <EnterpriseContactForm />
      <ContactOptionCards />
      <OfficeDirectory />
      <ClosingCta />
    </div>
  );
}
