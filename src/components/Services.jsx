import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { X, Send, CheckCircle, BookOpen, Award, ShieldCheck, GraduationCap } from 'lucide-react'

const trainingServices = [
  {
    id: 'brcgs',
    icon: ShieldCheck,
    color: 'teal',
    badge: 'Global Standard',
    title: 'BRCGS',
    subtitle: 'Brand Reputation through Compliance Global Standards',
    description:
      'Comprehensive training on BRCGS (formerly BRC Global Standard) for Food Safety, covering requirements, implementation, and audit preparation for manufacturers and suppliers.',
    topics: ['BRCGS Issue 9 Requirements', 'Site Standards & Documentation', 'Audit Preparation', 'Corrective Actions'],
  },
  {
    id: 'fssc22000-food-safety',
    icon: Award,
    color: 'blue',
    badge: 'Certification Training',
    title: 'FSSC 22000 – Food Safety',
    subtitle: 'Food Safety System Certification',
    description:
      'In-depth training on FSSC 22000 food safety certification scheme — covering scheme requirements, gap analysis, HACCP principles, and FSMS documentation aligned with the latest version.',
    topics: ['FSSC 22000 Scheme Requirements', 'HACCP & Pre-requisite Programs', 'Gap Analysis', 'FSMS Documentation'],
  },
  {
    id: 'fssc-iso-training',
    icon: BookOpen,
    color: 'amber',
    badge: 'Foundation Training',
    title: 'FSSC / ISO 22000 Training',
    subtitle: 'Implementation & Awareness',
    description:
      'Awareness and implementation training for FSSC 22000 and ISO 22000:2018 — ideal for food business operators, quality teams, and managers looking to understand and apply these standards.',
    topics: ['ISO 22000:2018 Clauses', 'FSSC Additional Requirements', 'Implementation Roadmap', 'Team Awareness Sessions'],
  },
  {
    id: 'lead-auditor',
    icon: GraduationCap,
    color: 'purple',
    badge: 'CQI / IRCA Certified',
    title: 'FSSC 22000 v6 / ISO 22000 Auditor / Lead Auditor',
    subtitle: 'CQI/IRCA Certified Training Course',
    description:
      'Internationally recognised CQI/IRCA certified Lead Auditor training for FSSC 22000 v6 and ISO 22000. Equips participants to plan, conduct, report, and follow up on food safety management system audits.',
    topics: ['Audit Principles & Process', 'Planning & Conducting Audits', 'Audit Reporting', 'CQI/IRCA Certification Exam'],
  },
]

const colorMap = {
  teal: {
    badge: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-500/20',
    icon: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400',
    btn: 'bg-teal-600 hover:bg-teal-700 text-white',
    border: 'hover:border-teal-300 dark:hover:border-teal-500/40',
    topic: 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300',
  },
  blue: {
    badge: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
    icon: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
    btn: 'bg-blue-600 hover:bg-blue-700 text-white',
    border: 'hover:border-blue-300 dark:hover:border-blue-500/40',
    topic: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  amber: {
    badge: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    icon: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
    btn: 'bg-amber-600 hover:bg-amber-700 text-white',
    border: 'hover:border-amber-300 dark:hover:border-amber-500/40',
    topic: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
  },
  purple: {
    badge: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
    icon: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400',
    btn: 'bg-purple-600 hover:bg-purple-700 text-white',
    border: 'hover:border-purple-300 dark:hover:border-purple-500/40',
    topic: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300',
  },
}

function EnquiryModal({ service, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const colors = colorMap[service.color]

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Training Enquiry: ${service.title}`)
    const body = encodeURIComponent(
      `Hello Shalki,\n\nI am interested in the "${service.title}" training programme.\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.phone ? `Phone: ${form.phone}\n` : '') +
      (form.message ? `\nMessage:\n${form.message}\n` : '') +
      `\nPlease get in touch at your earliest convenience.\n\nThank you.`
    )
    window.location.href = `mailto:shalkinirgun2009@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-navy-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-navy-600/50 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-navy-600/50">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-2 ${colors.badge}`}>
                {service.badge}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{service.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{service.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {submitted ? (
          /* Success state */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-teal-500" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Enquiry Sent!</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Your email client has opened with your enquiry pre-filled. Shalki will get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 dark:focus:border-teal-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 dark:focus:border-teal-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Phone Number <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 dark:focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Message <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your organisation, team size, preferred dates..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 dark:focus:border-teal-500 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${colors.btn}`}
              >
                <Send size={15} />
                Send Enquiry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-600 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-navy-700 transition-colors"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-slate-400 text-center">
              Clicking "Send Enquiry" will open your email client with the details pre-filled.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

function ServiceCard({ service, onEnquire, index }) {
  const colors = colorMap[service.color]
  const Icon = service.icon

  return (
    <div
      className={`card flex flex-col border-slate-200 dark:border-navy-600/50 ${colors.border} transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/20 hover:-translate-y-0.5`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colors.icon}`}>
          <Icon size={22} />
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colors.badge}`}>
          {service.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1">
        {service.title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">{service.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
        {service.description}
      </p>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {service.topics.map(t => (
          <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-medium ${colors.topic}`}>
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => onEnquire(service)}
        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${colors.btn} hover:shadow-md`}
      >
        <Send size={14} />
        Enquire Now
      </button>
    </div>
  )
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal()
  const [selectedService, setSelectedService] = useState(null)

  return (
    <>
      <section id="services" className="py-24 bg-white dark:bg-navy-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

        <div
          ref={ref}
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <p className="section-subtitle">What I Offer</p>
            <h2 className="section-title">Training Services</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Internationally recognised food safety training programmes — tailored for food business operators, quality teams, and auditors across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {trainingServices.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onEnquire={setSelectedService}
              />
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              All trainings can be conducted on-site or online. &nbsp;
              <a
                href="mailto:shalkinirgun2009@gmail.com?subject=Training%20Enquiry"
                className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
              >
                Contact directly
              </a>{' '}
              for custom programmes or group bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {selectedService && (
        <EnquiryModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  )
}
