import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function YardManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#3366FF]">
            Yard Management Services
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Secure Asset Custody &amp; Management
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[24px] p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-950">Key Services</h3>
            <ul className="mt-6 space-y-4">
              {['Authorized Security Yards', 'Asset Storage &amp; Insurance', 'Regular Audits', 'Inventory Documentation', 'Notarized Reports', 'Easy Access for Banks'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#3366FF]" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-[24px] p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-950">Infrastructure</h3>
            <p className="mt-4 text-slate-500">
              Tamil Nadu-wide secure yards serving SBI, Dena Bank, Reliance Capital, and Tata Capital with documented inventory reports.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-950">
              Discuss Requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}