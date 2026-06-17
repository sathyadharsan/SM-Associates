import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

const leadership = [
  { name: 'Ramesh Kumar', role: 'Managing Director', expertise: 'Recovery Operations & Legal Coordination' },
  { name: 'Priya Sharma', role: 'Operations Head', expertise: 'Field Collections & Verification' },
  { name: 'Arun Venkat', role: 'Legal Coordinator', expertise: 'SARFAESI & Court Liaison' }
];

export default function LeadershipTeamPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Leadership Team</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Our leadership brings decades of experience in recovery, legal coordination, and risk operations across
          financial institutions.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {leadership.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.08 }}
            className="glass-card rounded-[24px] p-6 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-950 text-2xl font-bold text-white">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h4 className="mt-4 text-lg font-semibold text-blue-950">{member.name}</h4>
            <p className="text-sm font-medium text-blue-700">{member.role}</p>
            <p className="mt-2 text-sm text-slate-500">{member.expertise}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}