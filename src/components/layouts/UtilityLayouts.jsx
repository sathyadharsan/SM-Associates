import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveSubmission } from '../../chatbot/leadTransport';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Phone, 
  Mail, 
  Lock, 
  ShieldAlert,
  Users,
  Shield,
  ShieldCheck,
  Activity,
  FileCheck,
  ChevronDown,
  Compass,
  X,
  Upload,
  Calendar,
  DollarSign,
  Award,
  TrendingUp,
  Check,
  FileText,
  Sparkles,
  ChevronRight,
  Filter,
  UserCheck,
  Plus,
  Minus
} from 'lucide-react';
import { careerDepartments, careerPositionsData, careerCultureHighlights } from '../../data/careersData';

const fUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 15 } }
};

// ----------------------------------------------------
// 1. CAREERS LAYOUT (DPDzero Inspired Enterprise Design)
// ----------------------------------------------------
export function CareersLayout({ content }) {
  const [activeDept, setActiveDept] = useState('all');
  const [viewingJob, setViewingJob] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isReferred, setIsReferred] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');

  // Filter jobs by active department
  const filteredJobs = activeDept === 'all'
    ? careerPositionsData
    : careerPositionsData.filter(job => job.department === activeDept);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      salutation: form.salutation?.value || '',
      firstName: form.firstName?.value || '',
      lastName: form.lastName?.value || '',
      email: form.email?.value || '',
      phone: form.phone?.value || '',
      dob: form.dob?.value || '',
      currentCtc: form.currentCtc?.value || '',
      expectedCtc: form.expectedCtc?.value || '',
      noticePeriod: form.noticePeriod?.value || '',
      experienceYears: form.experienceYears?.value || '',
      linkedin: form.linkedin?.value || '',
      employeeRefId: form.employeeRefId?.value || '',
      resumeName: selectedFileName || 'Attached_Resume.pdf',
      role: applyingJob?.title || 'General Applicant',
      department: applyingJob?.departmentLabel || 'Operations'
    };

    saveSubmission('careers', formData);
    setSubmitted(true);
  };

  const closeModals = () => {
    setViewingJob(null);
    setApplyingJob(null);
    setSubmitted(false);
    setSelectedFileName('');
    setIsReferred(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] font-inter overflow-x-hidden">
      {/* SECTION 1: PURE WHITE HERO HEADER */}
      <section className="relative pt-40 pb-20 bg-white border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,114,188,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute left-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#0072bc]/5 blur-[100px]" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#0072bc]/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0072bc]/10 border border-[#0072bc]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Careers at SM Associates
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            className="text-4xl font-extrabold tracking-tight text-[#0a1128] sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            Build Your Career in <span className="text-[#0072bc]">Enterprise Recovery</span> Operations
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Join South India's premier risk management infrastructure. We empower professionals across field operations, tele-recovery, audit, analytics, and leadership with industry-leading training and career growth.
          </motion.p>

          {/* Key Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-slate-50/80 border border-slate-200/80 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-sora text-[#0072bc]">1,500+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Recovery Professionals</div>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-sora text-[#0072bc]">19</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Regional Branches</div>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-sora text-[#0072bc]">25+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Years Standing (Est. 2000)</div>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 shadow-sm rounded-2xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-sora text-[#0072bc]">100%</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">DRA Certified Conduct</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: OPEN POSITIONS LIST (DPDZERO FILTERED LISTING) */}
      <section id="open-positions" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">Current Career Opportunities</span>
            <h2 className="text-3xl font-extrabold font-sora text-[#0a1128] sm:text-4xl">Open Positions</h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Explore active roles across Telecalling, Field Recovery, Management, HR, and Legal operations.
            </p>
          </div>

          {/* Active Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPositionsData.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 text-left shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#0072bc]/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#0072bc]/10 px-3 py-1 text-[11px] font-bold text-[#0072bc] font-mono">
                      <Briefcase className="h-3 w-3" />
                      {job.departmentLabel}
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-mono border border-slate-200">
                      {job.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg font-sora text-[#0a1128] group-hover:text-[#0072bc] transition-colors leading-snug">
                      {job.title}
                    </h3>
                    
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {job.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setViewingJob(job)}
                    className="flex-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a1128] font-bold text-xs py-2.5 text-center transition-all flex items-center justify-center gap-1"
                  >
                    <span>View Role</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                  
                  <button
                    onClick={() => {
                      setApplyingJob(job);
                      setViewingJob(null);
                    }}
                    className="flex-1 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs py-2.5 text-center transition-all shadow-sm flex items-center justify-center gap-1"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <Briefcase className="h-10 w-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">No positions found in this category</h3>
              <p className="text-xs text-slate-500">Try selecting another department tab above.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK / CULTURE GRID (DPDZERO inspired bottom section) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">Culture & Discipline</span>
            <h2 className="text-3xl font-bold font-sora text-[#0a1128]">How We Work</h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Our operational principles that guide our team and empower career longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerCultureHighlights.map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3 text-left hover:border-[#0072bc]/40 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-2xl bg-[#0072bc]/10 text-[#0072bc] flex items-center justify-center font-bold">
                  {index === 0 && <ShieldCheck className="h-5 w-5" />}
                  {index === 1 && <Award className="h-5 w-5" />}
                  {index === 2 && <TrendingUp className="h-5 w-5" />}
                  {index === 3 && <Users className="h-5 w-5" />}
                </div>
                <h3 className="font-bold text-base font-sora text-[#0a1128]">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ & CONTACT HR */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold font-sora text-[#0a1128]">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500">Everything you need to know about joining SM Associates.</p>
          </div>

          <div className="space-y-4 text-left">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)} 
                className="w-full flex justify-between items-center text-sm font-bold text-[#0a1128] font-sora text-left"
              >
                <span>Do I need prior DRA (Debt Recovery Agent) certification to apply?</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${activeFaq === 0 ? 'bg-[#0072bc] text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {activeFaq === 0 ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {activeFaq === 0 && (
                <p className="mt-3 text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  No prior DRA certification is required for entry-level positions. We fully sponsor candidate training and IIBF DRA examination certification loops before client dispatch.
                </p>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)} 
                className="w-full flex justify-between items-center text-sm font-bold text-[#0a1128] font-sora text-left"
              >
                <span>What are the career growth opportunities for field & telecalling officers?</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${activeFaq === 1 ? 'bg-[#0072bc] text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {activeFaq === 1 ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {activeFaq === 1 && (
                <p className="mt-3 text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  We have structured performance evaluations every 6 months. Field Officers and Tele-callers frequently advance into Senior Portfolio Managers, Team Leads, and Branch Operations Managers across our 19 regional hubs.
                </p>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)} 
                className="w-full flex justify-between items-center text-sm font-bold text-[#0a1128] font-sora text-left"
              >
                <span>How long does the recruitment and onboarding process take?</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${activeFaq === 2 ? 'bg-[#0072bc] text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {activeFaq === 2 ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {activeFaq === 2 && (
                <p className="mt-3 text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  Our HR recruitment desk typically reviews applications within 24 to 48 hours. Successful candidates go through initial screening, a branch manager discussion, and background verification before joining.
                </p>
              )}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center text-white space-y-4 shadow-xl">
            <h3 className="text-xl font-bold font-sora">Can't find a role matching your experience?</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Send your CV directly to our central HR recruitment desk and we will contact you when a matching position opens.
            </p>
            <a
              href="mailto:smarmpl.ho@gmail.com?subject=General%20Career%20Application%20-%20SM%20Associates"
              className="inline-flex items-center gap-2 rounded-full bg-[#0072bc] hover:bg-[#005a96] px-6 py-3 text-xs font-bold text-white shadow-md transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Send CV to HR Desk (smarmpl.ho@gmail.com)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL 1: JOB DETAILS VIEW (DPDZERO SCREENSHOT 2 MODAL) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {viewingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.96, y: 20 }} 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left border border-slate-200 my-8"
            >
              {/* Modal Top Header */}
              <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0072bc] font-mono">Role Details</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-500">{viewingJob.departmentLabel}</span>
                </div>
                <button 
                  onClick={closeModals}
                  className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main Content Area: DPDZero 2-Column Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column (2 Cols wide on desktop): Description & Requirements */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-sora text-[#0a1128]">
                      {viewingJob.title}
                    </h2>
                    <p className="text-xs font-mono text-[#0072bc] mt-1 font-semibold">
                      {viewingJob.departmentLabel} — Posted {viewingJob.postedDate}
                    </p>
                  </div>

                  {/* About SM Associates */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-bold font-sora text-[#0a1128]">About SM Associates</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      SM Associates is India's leading enterprise recovery operations firm, serving nationalized banks, NBFCs, housing finance institutions, and financial risk clients across South India since 2000.
                    </p>
                  </div>

                  {/* About the Role */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-bold font-sora text-[#0a1128]">About the Role</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {viewingJob.aboutRole}
                    </p>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-bold font-sora text-[#0a1128]">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {viewingJob.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-[#0072bc] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We're Looking For */}
                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-bold font-sora text-[#0a1128]">What We're Looking For</h4>
                    <ul className="space-y-2">
                      {viewingJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shrink-0 mt-1.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Join Us */}
                  {viewingJob.whyJoinUs && (
                    <div className="space-y-3 border-t border-slate-100 pt-4">
                      <h4 className="text-sm font-bold font-sora text-[#0a1128]">Why Join Us?</h4>
                      <ul className="space-y-2">
                        {viewingJob.whyJoinUs.map((w, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                            <Sparkles className="h-3.5 w-3.5 text-[#0072bc] shrink-0 mt-0.5" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column Sidebar Card: "Information" (DPDZero Exact Sidebar) */}
                <div className="space-y-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 sticky top-20">
                    <h3 className="text-base font-bold font-sora text-[#0a1128] border-b border-slate-200 pb-3">
                      Information
                    </h3>

                    <div className="space-y-4 text-xs">
                      <div>
                        <div className="text-slate-400 font-medium">Number of Positions</div>
                        <div className="font-bold text-[#0a1128] font-mono text-sm mt-0.5">
                          {viewingJob.positionsCount} Openings
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium">Employment Type</div>
                        <div className="font-bold text-[#0a1128] mt-0.5">
                          {viewingJob.type}
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium">Department</div>
                        <div className="font-bold text-[#0a1128] mt-0.5">
                          {viewingJob.departmentLabel}
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium">Work Experience</div>
                        <div className="font-bold text-[#0a1128] mt-0.5">
                          {viewingJob.experience}
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium">Work Location</div>
                        <div className="font-bold text-[#0a1128] mt-0.5">
                          {viewingJob.location}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setApplyingJob(viewingJob);
                        setViewingJob(null);
                      }}
                      className="w-full rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs py-3 text-center transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL 2: APPLICATION FORM (DPDZERO SCREENSHOT 3 MODAL) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-md overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.96, y: 20 }} 
              className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative text-left border border-slate-200 my-8 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-sora">
                    Job Application: {applyingJob.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {applyingJob.departmentLabel} • {applyingJob.location}
                  </p>
                </div>
                <button 
                  onClick={closeModals}
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {submitted ? (
                /* Submission Success View */
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0a1128] font-sora">Application Submitted Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for applying for the <strong>{applyingJob.title}</strong> role at SM Associates. Your details have been transmitted directly to our central HR recruitment desk.
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`mailto:smarmpl.ho@gmail.com?subject=CV Submission for ${encodeURIComponent(applyingJob.title)}`}
                      className="rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs px-5 py-3 text-center transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email Resume directly to HR Desk</span>
                    </a>
                    <button 
                      onClick={closeModals}
                      className="rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-3 text-center transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form Fields (Matching DPDZero Screenshot 3) */
                <form onSubmit={handleApplySubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
                  
                  {/* Salutation & Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Salutation *</label>
                      <select required name="salutation" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]">
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Dr">Dr.</option>
                      </select>
                    </div>

                    <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">First Name *</label>
                        <input required name="firstName" type="text" placeholder="First Name..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Last Name *</label>
                        <input required name="lastName" type="text" placeholder="Last Name..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                      </div>
                    </div>
                  </div>

                  {/* DOB, Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Date of Birth *</label>
                      <input required name="dob" type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address *</label>
                      <input required name="email" type="email" placeholder="name@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Mobile Phone *</label>
                      <input required name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                  </div>

                  {/* CTC & Notice Period */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Current CTC (Per Annum) *</label>
                      <input required name="currentCtc" type="text" placeholder="e.g. ₹ 3.5 LPA" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Expected CTC (Per Annum) *</label>
                      <input required name="expectedCtc" type="text" placeholder="e.g. ₹ 4.5 LPA" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Notice Period (Days) *</label>
                      <select name="noticePeriod" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]">
                        <option value="Immediate">Immediate / 0 Days</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="60 Days">60 Days</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience & LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Years of Experience *</label>
                      <input required name="experienceYears" type="text" placeholder="e.g. 2 Years" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">LinkedIn Profile (Optional)</label>
                      <input name="linkedin" type="url" placeholder="https://linkedin.com/in/username" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-[#0a1128] focus:bg-white focus:border-[#0072bc]" />
                    </div>
                  </div>

                  {/* Employee Referral Check */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <input 
                        id="employeeRef"
                        type="checkbox"
                        checked={isReferred}
                        onChange={(e) => setIsReferred(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-[#0072bc] focus:ring-[#0072bc]"
                      />
                      <label htmlFor="employeeRef" className="text-xs font-bold text-slate-700 cursor-pointer">
                        Referred by an existing SM Associates Employee?
                      </label>
                    </div>

                    {isReferred && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                        <input name="employeeRefId" type="text" placeholder="Enter Employee Name & Employee ID..." className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-[#0a1128]" />
                      </motion.div>
                    )}
                  </div>

                  {/* Resume Upload Dropzone Box (DPDZero Screenshot 3 Upload Component) */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Resume / CV Document *</label>
                    <div className="border-2 border-dashed border-slate-300 hover:border-[#0072bc] rounded-2xl p-4 text-center bg-slate-50 hover:bg-slate-100/50 transition-all cursor-pointer relative">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setSelectedFileName(e.target.files[0].name);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="h-6 w-6 text-[#0072bc] mx-auto mb-1" />
                      <div className="text-xs font-bold text-[#0a1128]">
                        {selectedFileName ? (
                          <span className="text-[#0072bc]">Attached: {selectedFileName}</span>
                        ) : (
                          <span>Click to Upload or Drag & Drop Resume</span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">PDF, DOC, DOCX (Max size: 5 MB)</div>
                    </div>
                  </div>

                  {/* Submit / Cancel buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeModals}
                      className="rounded-xl px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs px-6 py-2.5 text-center transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ----------------------------------------------------
// 2. CONTACT LAYOUT (12 Content Sections)
// ----------------------------------------------------
export function ContactLayout({ content }) {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleProposal = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] font-inter overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
          <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[100px] animate-pulse" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-brand-500/5 blur-[100px] animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-500 font-mono"
          >
            <Compass className="h-3.5 w-3.5 animate-pulse" />
            {content.eyebrow}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            {content.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: BOARD DIRECTORY */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Direct Escalations</span>
          <h3 className="text-2xl font-bold font-sora">Executive Coordination Desk</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Lenders escalate empanelment proposals directly to board directors. MD Shri. M. Jebaraj supervises all SARFAESI notice enforcements.
          </p>
        </div>
      </section>

      {/* SECTION 3: REGISTERED ADDRESS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <span className="text-xs font-bold text-[#C5A021] font-mono">Address Coordinates</span>
              <h4 className="font-bold text-sm font-sora">Chennai Headquarters</h4>
              <p className="text-slate-500 text-xs leading-relaxed">No.8, Ground Floor, Gandhi Nagar Second Street, Kodambakkam, Chennai - 600024.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <span className="text-xs font-bold text-brand-500 font-mono">Telephone Desk</span>
              <h4 className="font-bold text-sm font-sora">Outreach channels</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Landline: 044-48600024 / 48600042</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TELEPHONE LOGS */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Branch Lines</span>
          <h3 className="text-2xl font-bold font-sora">Fax & Dial Log Directory</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Branch phone networks are monitored by corporate auditors. Outbound call lines strictly log client IDs to block compliance check errors.
          </p>
        </div>
      </section>

      {/* SECTION 5: SECURE FTP DETAILS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Ingestion portal</span>
          <h3 className="text-2xl font-bold font-sora">Secure SSL FTP parameters</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Banks transmit defaulted client lists through SSH encrypted port logs daily. Reconciled payment logs are exported weekly.
          </p>
        </div>
      </section>

      {/* SECTION 6: INGESTION PROPOSAL FORM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 bg-slate-50 border border-slate-200 rounded-[32px] p-8 text-left shadow-lg">
          <h3 className="text-2xl font-bold font-sora text-[#0a1128] mb-6">Submit Empanelment Proposal</h3>
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="h-10 w-10 text-brand-500 mx-auto" />
              <p className="font-bold text-xs">Proposal Request Logged Successfully</p>
            </div>
          ) : (
            <form onSubmit={handleProposal} className="space-y-4">
              <input required type="text" placeholder="Banking Institution Name..." className="w-full rounded-xl border border-slate-250 bg-white px-4 py-3 text-xs" />
              <input required type="email" placeholder="Corporate Contact Email..." className="w-full rounded-xl border border-slate-250 bg-white px-4 py-3 text-xs" />
              <textarea required rows="4" placeholder="Detail empanelment coordinates or ground verification checking needed..." className="w-full rounded-xl border border-slate-250 bg-white px-4 py-3 text-xs"></textarea>
              <button type="submit" className="w-full rounded-xl bg-brand-500 hover:bg-brand-500 text-white font-bold text-xs py-3.5 text-center transition-all shadow-md">
                Submit Proposal Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 7: STATE TAB SELECTOR */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">Branch Networks</span>
          <h3 className="text-2xl font-bold font-sora">Decentralized Regional Offices</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            We cover South India branches network out of physical branch offices. Select coverage tabs on Coverage page to verify managers coordinates.
          </p>
        </div>
      </section>

      {/* SECTION 8: SLA COMMITMENTS */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Precision SLA</span>
          <h3 className="text-2xl font-bold font-sora">Timeline TAT Targets</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            CPV candidate document checks are completed within average 48 Hours. SEC 13 demand notices are served within 3 Days from file assignment log.
          </p>
        </div>
      </section>

      {/* SECTION 9: CONDUCT STANDARDS */}
      <section className="py-20 bg-slate-50 text-left border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Outreach Ethics</span>
          <h3 className="text-2xl font-bold font-sora">Mandatory RBI caller audit protocols</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Outbound dialing hours bounds are strictly locked. Caller recordings are audited daily to block fair practices violation logs.
          </p>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE AUDITING */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-brand-500">Zero Tolerance Regulatory Conduct</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">100% DRA Certified Staff</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">ISO Data Security check loops</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center mb-8">FAQ</h3>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <button onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)} className="w-full flex justify-between text-xs font-bold text-[#0a1128] font-sora text-left">
                <span>What is the TAT for proposal review?</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              {activeFaq === 0 && <p className="mt-3 text-xs text-slate-500 border-t pt-3 leading-relaxed">Managing directors review empanelment proposal coordinates and submit pricing quotes within 48 Hours.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: PROPOSAL CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="mx-auto max-w-4xl px-4 bg-slate-900 border border-slate-800 rounded-[32px] p-12 text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold font-sora">Empanel SM Associates today</h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs leading-relaxed">
            Partner with South India's premier B2B credit risk and legal foreclosure coordinator.
          </p>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 3. LOGIN LAYOUT (12 Content Sections)
// ----------------------------------------------------
export function LoginLayout({ content }) {
  const [success, setSuccess] = useState(false);
  const [mfaChecked, setMfaChecked] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden font-inter text-left">
      {/* Background radial overlays */}
      <div className="absolute top-[-20%] left-[-20%] h-[600px] w-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
          <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[100px] animate-pulse" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-brand-500/5 blur-[100px] animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-brand-500 uppercase font-mono"
          >
            <Lock className="h-3.5 w-3.5" /> Secure Client Console
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            Lender Portal Sign-In
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Verify credentials and Multi-Factor Auth to access recovery data.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: CORPORATE LOGIN TERMINAL */}
      <section className="py-16">
        <div className="mx-auto max-w-md px-4">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md space-y-6">
            {success ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-brand-500 mx-auto" />
                <h4 className="font-bold text-sm">Authentication Validated</h4>
                <p className="text-slate-400 text-xs">Accessing dashboard ledger...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase font-mono">Corporate User ID</label>
                  <input required type="text" placeholder="e.g. bank_axis_user01" className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase font-mono">Terminal Password</label>
                  <input required type="password" placeholder="••••••••••••" className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" id="mfa" checked={mfaChecked} onChange={() => setMfaChecked(!mfaChecked)} className="rounded bg-white/5 border-white/10 text-brand-500 focus:ring-0 cursor-pointer" />
                  <label htmlFor="mfa" className="text-[10px] font-bold text-slate-400 uppercase cursor-pointer select-none">Verify OTP / Mobile MFA Check</label>
                </div>
                <button type="submit" disabled={!mfaChecked} className={`w-full rounded-xl text-xs font-bold py-3.5 text-center shadow-lg transition-all ${mfaChecked ? 'bg-brand-500 hover:bg-brand-500 text-white cursor-pointer' : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'}`}>
                  Sign In to Vault
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: 256-BIT ENCRYPTION DETAILS */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Data Protection</span>
          <h3 className="text-2xl font-bold font-sora">Bank-Grade Database Security</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            All transaction files and geolocated visit logs are encrypted at rest using AES-256 coordinates loops. Database nodes access requires pre-vetted banking IP ranges.
          </p>
        </div>
      </section>

      {/* SECTION 4: ISO SECURITY LOGS */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">System Auditing</span>
          <h3 className="text-2xl font-bold font-sora">ISO 27001 Data Custody Protocols</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            We are audited annually by third-party bank cybersecurity auditors. Connection logs sync parameters are validated monthly to prevent synthetic data leaks.
          </p>
        </div>
      </section>

      {/* SECTION 5: USER SECURITY GUIDELINES */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">User Codes</span>
          <h3 className="text-2xl font-bold font-sora">Corporate credentials safety directives</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            Users must update passcodes every 90 Days. Login session tokens expire within 15 Minutes of terminal inactivity.
          </p>
        </div>
      </section>

      {/* SECTION 6: COMPLIANCE CODE GUIDELINES */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Regulatory loop</span>
          <h3 className="text-2xl font-bold font-sora">Outbound Caller boundaries</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Portals disable manual phone number exports to comply with data privacy policies and RBI Fair Practices codes.
          </p>
        </div>
      </section>

      {/* SECTION 7: BRANCH NETWORK SECURITY */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Office Vetting</span>
          <h3 className="text-2xl font-bold font-sora">Local physical data safety</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            All regional branches operate CCTV watch logs and restrict physical paper files storage to block borrower data exposures.
          </p>
        </div>
      </section>

      {/* SECTION 8: INGESTION FTP PARAMETERS */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Ingestion ports</span>
          <h3 className="text-2xl font-bold font-sora">SFTP SSH coordinates</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Case directories sync parameters require authorized private keys files coordinates to establish upload handshakes.
          </p>
        </div>
      </section>

      {/* SECTION 9: AUDITABLE VOICE LOG DETAILS */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 font-mono">Outbound Auditing</span>
          <h3 className="text-2xl font-bold font-sora">Call logger archives</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Outbound dialer calling logs are archived automatically and forwarded to client banking audit panels monthly.
          </p>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE STATUS */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-brand-500">Security Certifications Vetting</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">ISO 27001 Certified Custody</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">RBI Fair Practices Compliant System</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center text-white mb-8 font-semibold">Security FAQ</h3>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-xl p-4 bg-[#0b0f19]">
              <h5 className="text-xs font-bold font-sora text-white">How is MFA configured?</h5>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">Users must bind corporate mobile phone numbers to receive OTP coordinates codes during sign-in verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: SYSTEM STATUS CTA */}
      <section className="py-20 bg-[#050914] text-center">
        <div className="mx-auto max-w-4xl px-4 bg-brand-500 rounded-[32px] p-12 text-white space-y-6 shadow-2xl">
          <h2 className="text-3xl font-extrabold font-sora">Security System Status: Online</h2>
          <p className="text-brand-500 max-w-md mx-auto text-xs leading-relaxed">
            All SSH FTP servers, outbound dialers logging pipelines, and geofencing systems are fully functional.
          </p>
        </div>
      </section>
    </div>
  );
}
