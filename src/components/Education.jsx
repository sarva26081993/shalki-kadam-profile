import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    institution: 'Department of Technology, Shivaji University, Kolhapur',
    degree: 'B.Tech in Food Technology',
    field: 'Food Technology and Processing',
    period: '2013 – 2016',
    level: "Bachelor's Degree",
    color: 'teal',
    icon: '🎓',
  },
  {
    institution: "Premlila Vithaldas Polytechnic, SNDT Women's University",
    degree: 'Diploma in Food Technology',
    field: 'Food Technology and Processing',
    period: '2010 – 2013',
    level: 'Diploma',
    location: 'Juhu, Santacruz West',
    color: 'gold',
    icon: '📜',
  },
  {
    institution: 'Parle Tilak Vidyalaya, Vile Parle East, Mumbai',
    degree: 'SSC (Secondary School Certificate)',
    field: '',
    period: '2000 – 2010',
    level: 'Secondary Education',
    color: 'slate',
    icon: '🏫',
  },
]

const colorMap = {
  teal: {
    border: 'border-t-teal-500',
    badge: 'bg-teal-100 text-teal-800 dark:bg-teal-500/15 dark:text-teal-300',
    accent: 'text-teal-700 dark:text-teal-400',
    hover: 'hover:shadow-teal-100 dark:hover:shadow-teal-500/10',
  },
  gold: {
    border: 'border-t-amber-500',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
    accent: 'text-amber-700 dark:text-amber-400',
    hover: 'hover:shadow-amber-100 dark:hover:shadow-amber-500/10',
  },
  slate: {
    border: 'border-t-slate-500',
    badge: 'bg-slate-200 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300',
    accent: 'text-slate-600 dark:text-slate-400',
    hover: 'hover:shadow-slate-100 dark:hover:shadow-slate-500/10',
  },
}

export default function Education() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A strong foundation in Food Technology from renowned institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, idx) => {
            const colors = colorMap[edu.color]
            return (
              <div
                key={idx}
                className={`card border-t-2 ${colors.border} hover:shadow-xl ${colors.hover} flex flex-col`}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{edu.icon}</div>

                {/* Level badge */}
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-3 w-fit`}>
                  {edu.level}
                </span>

                {/* Degree */}
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">
                  {edu.degree}
                </h3>

                {/* Field */}
                {edu.field && (
                  <p className={`text-sm font-medium ${colors.accent} mb-3`}>{edu.field}</p>
                )}

                {/* Institution */}
                <div className="flex items-start gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-navy-600/50">
                  <GraduationCap size={15} className="text-slate-500 dark:text-slate-400 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-tight">{edu.institution}</p>
                </div>

                {/* Period */}
                <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <Calendar size={12} />
                  <span>{edu.period}</span>
                </div>

                {/* Location */}
                {edu.location && (
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 dark:text-slate-500">
                    <MapPin size={11} />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
