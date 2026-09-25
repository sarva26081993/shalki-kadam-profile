import { Mail, Linkedin, MapPin, ChevronDown, Award, Shield, Users } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Years Experience', value: '10+' },
  { icon: Shield, label: 'Certifications', value: '5+' },
  { icon: Users, label: 'Sectors Covered', value: '8+' },
]

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.08)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.05)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/40 dark:border-teal-500/30 bg-teal-50 dark:bg-teal-500/5 text-teal-600 dark:text-teal-400 text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse" />
              Available for Consulting
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-4 animate-slide-up">
              FT Shalki
              <span className="block text-gradient">Kadam</span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300 mb-3 animate-slide-up">
              Senior Food Safety Consultant &amp; Lead Auditor
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-slate-500 dark:text-slate-400 text-sm mb-8 animate-slide-up">
              <MapPin size={14} className="text-teal-500 dark:text-teal-400" />
              <span>Mumbai Metropolitan Region, India</span>
            </div>

            {/* Certifications chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 animate-slide-up">
              {['FSSC Lead Auditor', 'ISO 22000:2018', 'IMS Lead Auditor', 'HACCP Certified', 'FoSTaC'].map(cert => (
                <span key={cert} className="tag">{cert}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in">
              <a href="mailto:shalkinirgun2009@gmail.com" className="btn-primary">
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/ft-shalkikadam-9246279b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: Avatar & Stats card */}
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            {/* Avatar */}
            <div className="relative">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl glow-teal ring-4 ring-teal-500/20">
                <img
                  src="/profile.jpg"
                  alt="FT Shalki Kadam - Senior Food Safety Consultant and Certified Lead Auditor"
                  width="256"
                  height="256"
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white rounded-2xl px-4 py-2 text-xs font-bold shadow-lg">
                10+ Years
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card text-center p-4">
                  <Icon size={20} className="text-teal-500 dark:text-teal-400 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
