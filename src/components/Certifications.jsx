import { Award, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    title: 'Lead Auditor – ISO 22000:2018 & FSSC V5',
    issuer: 'Accredited Certification Body',
    description: 'Qualified Lead Auditor for ISO 22000:2018 Food Safety Management Systems and FSSC 22000 Version 5 food safety scheme.',
    icon: '🏆',
    color: 'teal',
    tags: ['ISO 22000', 'FSSC V5', 'Lead Auditor'],
  },
  {
    title: 'FSSC V6 Transition Training',
    issuer: 'FSSC 22000 Foundation',
    description: 'Successfully completed the transition training for FSSC 22000 Version 6, keeping up with the latest requirements and updates to the scheme.',
    icon: '🔄',
    color: 'gold',
    tags: ['FSSC V6', 'Transition', 'Food Safety'],
  },
  {
    title: 'HACCP Certification',
    issuer: 'Food Safety Authority',
    description: 'Certified in Hazard Analysis and Critical Control Points (HACCP) – the internationally recognized systematic preventive approach to food safety.',
    icon: '⚠️',
    color: 'purple',
    tags: ['HACCP', 'Hazard Analysis', 'Food Safety'],
  },
  {
    title: 'FoSTaC – Food Safety Training & Certification',
    issuer: 'FSSAI',
    description: "Certified Food Safety Supervisor under FSSAI's Food Safety Training and Certification (FoSTaC) program, enabling training of food handlers across India.",
    icon: '🎓',
    color: 'blue',
    tags: ['FoSTaC', 'FSSAI', 'Food Safety Trainer'],
  },
]

const colorMap = {
  teal: {
    border: 'border-teal-300 dark:border-teal-500/40',
    icon: 'bg-teal-100 dark:bg-teal-500/15',
    badge: 'bg-teal-100 text-teal-800 dark:bg-teal-500/15 dark:text-teal-300',
    accent: 'text-teal-700 dark:text-teal-400',
    hover: 'hover:border-teal-500 dark:hover:border-teal-500/60 hover:shadow-teal-100 dark:hover:shadow-teal-500/10',
  },
  gold: {
    border: 'border-amber-300 dark:border-amber-500/40',
    icon: 'bg-amber-100 dark:bg-amber-500/15',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
    accent: 'text-amber-700 dark:text-amber-400',
    hover: 'hover:border-amber-500 dark:hover:border-amber-500/60 hover:shadow-amber-100 dark:hover:shadow-amber-500/10',
  },
  purple: {
    border: 'border-purple-300 dark:border-purple-500/40',
    icon: 'bg-purple-100 dark:bg-purple-500/15',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-500/15 dark:text-purple-300',
    accent: 'text-purple-700 dark:text-purple-400',
    hover: 'hover:border-purple-500 dark:hover:border-purple-500/60 hover:shadow-purple-100 dark:hover:shadow-purple-500/10',
  },
  blue: {
    border: 'border-blue-300 dark:border-blue-500/40',
    icon: 'bg-blue-100 dark:bg-blue-500/15',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300',
    accent: 'text-blue-700 dark:text-blue-400',
    hover: 'hover:border-blue-500 dark:hover:border-blue-500/60 hover:shadow-blue-100 dark:hover:shadow-blue-500/10',
  },
}

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="section-subtitle">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications that validate expertise in food safety standards and auditing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const colors = colorMap[cert.color]
            return (
              <div
                key={idx}
                className={`card border ${colors.border} hover:shadow-xl ${colors.hover} transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center text-2xl shrink-0`}>
                    {cert.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <Award size={13} className={colors.accent} />
                      <span className={`text-sm font-medium ${colors.accent}`}>{cert.issuer}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Verification CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-navy-700/50 border border-slate-200 dark:border-navy-600/50 shadow-sm">
            <Award size={20} className="text-amber-500" />
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
              All certifications are verifiable and from accredited institutions
            </span>
            <a
              href="https://www.linkedin.com/in/ft-shalkikadam-9246279b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-teal-700 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 text-sm font-semibold transition-colors"
            >
              Verify on LinkedIn <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
