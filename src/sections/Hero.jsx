import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Mail, MapPin } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink'
import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="home" className="section-space pb-12 sm:pb-16">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{profile.role}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl text-ink/90">{profile.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{profile.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={profile.cta.primary.href}>
                {profile.cta.primary.label}
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </ButtonLink>
              <ButtonLink href={profile.cta.secondary.href} variant="secondary">
                {profile.cta.secondary.label}
                <Mail className="h-4 w-4" strokeWidth={1.8} />
              </ButtonLink>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.8} />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4" strokeWidth={1.8} />
                {profile.availability}
              </span>
            </div>
          </motion.div>

          <motion.aside
            className="surface-card overflow-hidden"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <img
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Hero
