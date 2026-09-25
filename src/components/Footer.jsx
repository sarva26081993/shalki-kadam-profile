import { Linkedin, Mail, Heart } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-navy-800 border-t border-slate-200 dark:border-navy-600/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xs">
                SK
              </div>
              <span className="font-display font-semibold text-slate-900 dark:text-white">FT Shalki Kadam</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Senior Food Safety Consultant & Lead Auditor</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:shalkinirgun2009@gmail.com"
              className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-navy-700 border border-slate-200 dark:border-navy-600 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-500/50 transition-all duration-200"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ft-shalkikadam-9246279b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-navy-700 border border-slate-200 dark:border-navy-600 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-500/50 transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-navy-600/50 text-center">
          <p className="text-slate-400 text-xs flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} FT Shalki Kadam. Built with
            <Heart size={12} className="text-teal-500 fill-teal-500" />
            using React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
