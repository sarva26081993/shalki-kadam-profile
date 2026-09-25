import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    category: 'Food Safety Standards',
    icon: '🛡️',
    skills: [
      'FSSC 22000 V5/V6',
      'ISO 22000:2018',
      'IMS (Integrated Management)',
      'HACCP',
      'GMP / GHP',
    ],
  },
  {
    category: 'Auditing & Compliance',
    icon: '🔍',
    skills: [
      'Lead Auditing',
      'Hygiene Rating Audits',
      'Eat Right Campus Audits',
      'Gap Analysis',
      'Corrective Action Review',
    ],
  },
  {
    category: 'Training & Consulting',
    icon: '🎓',
    skills: [
      'Food Safety Training',
      'FoSTaC Training',
      'FSMS Implementation',
      'Client Management',
      'Documentation & SOP',
    ],
  },
  {
    category: 'Technical Skills',
    icon: '🔬',
    skills: [
      'Chemical Analysis',
      'Product R&D',
      'New Product Development',
      'Quality Assurance',
      'Regulatory Compliance (FSSAI)',
    ],
  },
]

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="py-24 bg-slate-100/70 dark:bg-navy-800/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="section-subtitle">Competencies</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive skill set built over a decade of hands-on experience in the food safety industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div key={catIdx} className="card">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{cat.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-700/60 border border-slate-200 dark:border-navy-600/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:border-teal-400 hover:bg-teal-50 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Top skills chips */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider font-medium">Top Skills (LinkedIn)</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Product R&D', 'Chemical Analysis', 'New Product Development', 'Food Safety', 'HACCP', 'FSSC 22000', 'ISO 22000:2018'].map(skill => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-teal-300 dark:border-teal-500/30 bg-teal-50 dark:bg-teal-500/5 text-teal-700 dark:text-teal-300 text-sm font-medium hover:border-teal-500 hover:bg-teal-100 dark:hover:border-teal-400/60 dark:hover:bg-teal-500/10 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
