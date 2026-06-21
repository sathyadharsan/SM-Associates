import { motion } from 'framer-motion';
import { Award, MapPin, ShieldCheck, Target, Users, Calendar, Building2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const aboutCards = [
  {
    title: 'Company Overview',
    description: 'Established in 2000, SM Associates operates as a recovery and risk management partner for banks, NBFCs, HFCs, ARCs and corporate lenders.',
    icon: ShieldCheck
  },
  {
    title: '25+ Years Experience',
    description: 'Two decades of continuous service in recovery operations across Tamil Nadu with proven methodologies.',
    icon: Calendar
  },
  {
    title: '300+ Employees',
    description: 'Skilled workforce of professionals, advocates, CAs and ex-bankers dedicated to recovery excellence.',
    icon: Users
  },
  {
    title: '20+ Industry Experts',
    description: 'Experienced leadership team with backgrounds in banking, legal, and recovery operations.',
    icon: Award
  },
  {
    title: 'Leading Banks & NBFC Partnerships',
    description: 'Empanelled with SBI, Indian Bank, Canara Bank, PNB, BOB and other major financial institutions.',
    icon: Building2
  },
  {
    title: 'Trust Indicators',
    description: 'Professional integrity, transparent operations, and consistent delivery across portfolios.',
    icon: Target
  },
  {
    title: 'Our Journey Since 2000',
    description: 'Started in Chennai with a small team, now serving 300+ professionals across Tamil Nadu recovery markets.',
    icon: MapPin
  },
  {
    title: 'Vision & Mission',
    description: 'To build trusted recovery infrastructure that improves outcomes while maintaining professionalism and compliance.',
    icon: Target
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About SM Associates"
          title="India's Trusted Recovery Partner Since 2000"
          description="SM Associates combines two decades of field execution, verification discipline, legal coordination and recovery strategy to support India's lending ecosystem."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3366FF]/40 hover:shadow-enterpriseHover"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3366FF] text-white transition group-hover:bg-[#3366FF]">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-gray-950">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}