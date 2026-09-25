import { CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  'Certified Lead Auditor for FSSC 22000 V5/V6',
  'Certified Lead Auditor for ISO 22000:2018',
  'Certified Lead Auditor for IMS (Integrated Management System)',
  'Over 10 years of industrial experience across diverse food sectors',
  'Expert in HACCP Implementation & Gap Analysis',
  'Certified Food Safety Trainer (FoSTaC)',
  'Eat Right Campus & Hygiene Rating Auditor',
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Summary */}
          <div>
            <p className="section-subtitle">About Me</p>
            <h2 className="section-title mb-6">
              Shaping Food Safety<br />
              <span className="text-gradient">Standards Across India</span>
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                With over <strong className="text-slate-900 dark:text-white font-semibold">10 years of comprehensive industrial experience</strong> spanning
                multiple sectors of the food industry, I bring deep expertise in food safety auditing,
                consulting, and training to organizations committed to excellence.
              </p>
              <p>
                As a <strong className="text-teal-700 dark:text-teal-400 font-semibold">Certified Lead Auditor</strong> for FSSC 22000, ISO 22000:2018,
                and IMS, I have guided numerous organizations through certification journeys,
                gap analyses, and sustainable food safety management system implementations.
              </p>
              <p>
                Currently serving as <strong className="text-slate-900 dark:text-white font-semibold">Food Scheme In-charge at TQ Cert Services Pvt. Ltd.</strong>,
                I continue to drive quality and compliance excellence across the Mumbai region and beyond.
              </p>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-5">
              Core Expertise
            </p>
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-navy-700/50 border border-slate-200 dark:border-navy-600/50 hover:border-teal-400 dark:hover:border-teal-500/30 hover:bg-white dark:hover:bg-navy-700/70 transition-all duration-200 group shadow-sm"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <CheckCircle size={18} className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
