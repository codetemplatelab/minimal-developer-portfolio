import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold text-ink">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {profile.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="section-shell space-y-2 pb-4 md:hidden">
          {profile.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
