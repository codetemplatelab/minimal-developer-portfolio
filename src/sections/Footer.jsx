import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  ]

  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.footerMessage}</p>
        </div>

        <nav className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer noopener'}
              aria-label={link.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:bg-soft"
            >
              <link.icon className="h-4 w-4" strokeWidth={1.8} />
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted">Copyright {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
