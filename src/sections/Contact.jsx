import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { profile } from '../data/profile'

function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'GitHub', value: profile.github, href: profile.github, icon: Github },
    { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin, icon: Linkedin },
  ]

  return (
    <section id="contact" className="section-space">
      <div className="section-shell">
        <SectionHeading label="Contact" title="Let&apos;s work together." description={profile.contactIntro} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="surface-card p-6 sm:p-8">
            <h3 className="font-display text-xl text-ink">Contact Links</h3>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label === 'Email' ? undefined : '_blank'}
                    rel={link.label === 'Email' ? undefined : 'noreferrer noopener'}
                    className="flex items-center justify-between rounded-xl border border-line px-4 py-3 hover:bg-soft"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                      <link.icon className="h-4 w-4" strokeWidth={1.8} />
                      {link.label}
                    </span>
                    <span className="max-w-[55%] truncate text-sm text-muted">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="surface-card p-6 sm:p-8" delay={0.1}>
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField label="Name" placeholder="Your name" type="text" />
                <InputField label="Email" placeholder="name@email.com" type="email" />
              </div>
              <InputField label="Subject" placeholder="Project inquiry" type="text" />
              <TextAreaField label="Message" placeholder="Tell me about your project..." />

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
                <Send className="h-4 w-4" strokeWidth={1.8} />
              </motion.button>

              <p className="text-xs text-muted">Form is UI-only and ready to connect with your preferred backend.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, type, placeholder }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
      />
    </label>
  )
}

function TextAreaField({ label, placeholder }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</span>
      <textarea
        rows={5}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
      />
    </label>
  )
}

export default Contact
