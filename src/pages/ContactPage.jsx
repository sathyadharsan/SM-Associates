import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-white pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="noise-overlay absolute inset-0 opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass-card rounded-[32px] p-10 lg:p-16">
          <h1 className="text-4xl font-semibold tracking-[-0.055em] text-gray-950 sm:text-5xl lg:text-7xl">Contact Us</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Connect with our recovery and risk management team.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-gray-950" />
                <div>
                  <p className="font-bold text-gray-950">Address</p>
                  <p className="text-sm text-slate-500">
                    No.10/17, 2nd Floor, East Ellaiamman Koil Street, Kotturpuram, Chennai – 600085
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-gray-950" />
                <div>
                  <p className="font-bold text-gray-950">Phone</p>
                  <p className="text-sm text-slate-500">
                    044-43060206
                    <br />
                    044-48530577
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-gray-950" />
                <div>
                  <p className="font-bold text-gray-950">Email</p>
                  <p className="text-sm text-slate-500">smarmpl.ho@gmail.com</p>
                </div>
              </div>
            </div>

            <form className="glass-card rounded-[28px] p-8">
              <div className="grid gap-4">
                <input type="text" placeholder="Your Name" className="rounded-2xl border border-slate-200 px-4 py-3" />
                <input type="email" placeholder="Your Email" className="rounded-2xl border border-slate-200 px-4 py-3" />
                <textarea placeholder="Your Message" rows={4} className="rounded-2xl border border-slate-200 px-4 py-3" />
                <button className="rounded-2xl bg-[#3366FF] py-3 font-bold text-white transition hover:bg-blue-700">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}