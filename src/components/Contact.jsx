import { Mail, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shalkinirgun2009@gmail.com',
    href: 'mailto:shalkinirgun2009@gmail.com',
    color: 'teal',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ft-shalki-kadam-9246279b',
    href: 'https://www.linkedin.com/in/ft-shalki-kadam-9246279b/',
    color: 'blue',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai Metropolitan Region, India',
    href: 'https://maps.google.com/?q=Mumbai,India',
    color: 'gold',
  },
]

const colorMap = {
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-500/10',
    text: 'text-teal-600 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-500/20',
    hover: 'hover:border-teal-400 dark:hover:border-teal-400/50',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-500/20',
    hover: 'hover:border-blue-400 dark:hover:border-blue-400/50',
  },
  gold: {
    bg: 'bg-amber-50 dark:bg-gold-500/10',
    text: 'text-amber-600 dark:text-gold-400',
    border: 'border-amber-200 dark:border-gold-500/20',
    hover: 'hover:border-amber-400 dark:hover:border-gold-400/50',
  },
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="py-24 bg-slate-100/70 dark:bg-navy-800/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="section-subtitle">Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Looking for a Food Safety Consultant, Lead Auditor, or Trainer? Let's discuss how I can help
            your organization achieve and maintain the highest food safety standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact cards */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => {
              const colors = colorMap[color]
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-navy-700 border ${colors.border} ${colors.hover} hover:shadow-md dark:hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={colors.text} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</p>
                    <p className="text-slate-800 dark:text-white font-medium text-sm mt-0.5 break-all">{value}</p>
                  </div>
                  <Send size={14} className={`ml-auto ${colors.text} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200`} />
                </a>
              )
            })}

            {/* Availability notice */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-500/5 border border-teal-200 dark:border-teal-500/20 mt-6">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 animate-pulse shrink-0" />
              <div>
                <p className="text-teal-700 dark:text-teal-400 font-medium text-sm">Available for Consulting</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  Open to freelance food safety consulting, training engagements, and audit assignments across India.
                </p>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="card border-teal-200 dark:border-teal-500/20 text-center py-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.05)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.07)_0%,_transparent_70%)]" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center mx-auto mb-6 border border-teal-200 dark:border-teal-500/20">
                <MessageCircle size={28} className="text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
                Ready to Elevate Your<br />Food Safety Standards?
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 max-w-xs mx-auto">
                Whether it's FSSC 22000 certification, ISO 22000 implementation, HACCP setup, or food safety training — I'm here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:shalkinirgun2009@gmail.com?subject=Food%20Safety%20Consulting%20Inquiry"
                  className="btn-primary justify-center"
                >
                  <Mail size={16} />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/ft-shalki-kadam-9246279b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline justify-center"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
