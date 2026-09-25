import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    company: 'TQ Cert Services Private Limited',
    duration: '1 year 9 months',
    location: 'Mumbai',
    roles: [
      {
        title: 'Food Scheme In-charge',
        period: 'August 2025 – Present',
        duration: '1 year 2 months',
        highlights: [
          'Leading and managing food safety scheme operations for the certification body',
          'Overseeing audit planning, auditor competency, and scheme integrity',
          'Ensuring compliance with FSSC 22000, ISO 22000, and related standards',
        ],
        current: true,
      },
      {
        title: 'Auditor',
        period: 'January 2025 – July 2025',
        duration: '7 months',
        highlights: [
          'Conducted Hygiene Rating Audits for food businesses',
          'Performed Eat Right Campus Audits as per FSSAI guidelines',
          'Assessed food safety management systems and reported findings',
        ],
        current: false,
      },
    ],
    color: 'teal',
  },
  {
    company: 'Paradigm Services Pvt. Ltd.',
    duration: '4 years 11 months',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        title: 'Deputy Manager',
        period: 'April 2024 – January 2025',
        duration: '10 months',
        highlights: [
          'Led a team of food safety consultants and trainers',
          'Managed client portfolios and drove business development in food safety consulting',
          'Oversaw implementation of ISO and FSSC standards across client organizations',
        ],
        current: false,
      },
      {
        title: 'Assistant Manager',
        period: 'March 2020 – September 2024',
        duration: '4 years 7 months',
        highlights: [
          'Implemented ISO 22000 and FSSC 22000 standards for multiple clients',
          'Conducted food safety training programs for industry professionals',
          'Performed gap analysis and pre-certification audits',
        ],
        current: false,
      },
    ],
    color: 'gold',
  },
  {
    company: 'Oxypro Labs Pvt Ltd',
    duration: '2 years 2 months',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        title: 'Food Safety Consultant & Trainer',
        period: 'December 2018 – January 2020',
        duration: '1 year 2 months',
        highlights: [
          'Delivered food safety training and awareness programs',
          'Consulted clients on FSMS implementation and regulatory compliance',
        ],
        current: false,
      },
      {
        title: 'Quality Assurance Executive',
        period: 'December 2017 – November 2018',
        duration: '1 year',
        highlights: [
          'Managed quality assurance processes and documentation',
          'Conducted internal audits and corrective action follow-ups',
        ],
        current: false,
      },
    ],
    color: 'purple',
  },
  {
    company: 'Lotus Inc.',
    duration: '7 months',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        title: 'R&D Executive',
        period: 'October 2016 – April 2017',
        duration: '7 months',
        highlights: [
          'Conducted research and development activities for food products',
          'New product development and chemical analysis',
        ],
        current: false,
      },
    ],
    color: 'slate',
  },
  {
    company: 'ROHA Dye Chem Pvt. Ltd.',
    duration: '1 month',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        title: 'Trainee',
        period: 'June 2015',
        duration: '1 month',
        highlights: ['Industry exposure in food color and ingredients manufacturing.'],
        current: false,
      },
    ],
    color: 'slate',
  },
  {
    company: 'Oberoi Flight Services, Mumbai',
    duration: '6 months',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        title: 'Trainee',
        period: 'June 2012 – November 2012',
        duration: '6 months',
        highlights: [
          'Trained in airline catering and food production operations',
          'Exposure to high-volume food safety and hygiene practices',
        ],
        current: false,
      },
    ],
    color: 'slate',
  },
]

const colorMap = {
  teal: {
    dot: 'bg-teal-500',
    border: 'border-l-teal-500',
    title: 'text-teal-600 dark:text-teal-400',
    icon: 'text-teal-600 dark:text-teal-400',
    bullet: 'bg-teal-500',
    current: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30',
  },
  gold: {
    dot: 'bg-gold-500',
    border: 'border-l-gold-500',
    title: 'text-gold-600 dark:text-gold-400',
    icon: 'text-gold-600 dark:text-gold-400',
    bullet: 'bg-gold-500',
    current: 'bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/30',
  },
  purple: {
    dot: 'bg-purple-500',
    border: 'border-l-purple-500',
    title: 'text-purple-600 dark:text-purple-400',
    icon: 'text-purple-600 dark:text-purple-400',
    bullet: 'bg-purple-500',
    current: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30',
  },
  slate: {
    dot: 'bg-slate-400',
    border: 'border-l-slate-400',
    title: 'text-slate-600 dark:text-slate-400',
    icon: 'text-slate-500 dark:text-slate-400',
    bullet: 'bg-slate-400',
    current: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/30',
  },
}

export default function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experience" className="py-24 bg-slate-100/70 dark:bg-navy-800/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A decade-long journey across food safety consulting, auditing, training, and quality assurance.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-navy-600 transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, expIdx) => {
              const colors = colorMap[exp.color]
              return (
                <div key={expIdx} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full ${colors.dot} timeline-dot transform -translate-x-1/2 mt-1 z-10 border-2 border-slate-50 dark:border-navy-900`} />

                  {/* Card - alternating sides on desktop */}
                  <div className={`ml-14 md:ml-0 ${expIdx % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}>
                    <div className={`card border-l-2 ${colors.border} hover:shadow-lg`}>
                      {/* Company header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase size={16} className={colors.icon} />
                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">{exp.company}</h3>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Roles */}
                      <div className="space-y-5">
                        {exp.roles.map((role, roleIdx) => (
                          <div key={roleIdx} className={roleIdx > 0 ? 'pt-5 border-t border-slate-200 dark:border-navy-600/50' : ''}>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h4 className={`font-semibold ${colors.title}`}>{role.title}</h4>
                              {role.current && (
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.current}`}>
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{role.period} · {role.duration}</p>
                            <ul className="space-y-1.5">
                              {role.highlights.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                  <span className={`w-1.5 h-1.5 rounded-full ${colors.bullet} mt-1.5 shrink-0`} />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
