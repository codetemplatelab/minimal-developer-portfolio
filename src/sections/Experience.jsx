import { Building2, CalendarDays, MapPin } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="section-shell">
        <SectionHeading
          label="Experience"
          title="Professional experience focused on product quality."
          description="A concise timeline of roles, impact, and delivery outcomes."
        />

        <div className="mt-10 space-y-4">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} className="surface-card p-6 sm:p-7" delay={index * 0.06}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-ink">{item.role}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-muted">
                    <Building2 className="h-4 w-4" strokeWidth={1.8} />
                    {item.company}
                  </p>
                </div>

                <div className="space-y-2 text-sm text-muted sm:text-right">
                  <p className="inline-flex items-center gap-2 sm:justify-end">
                    <CalendarDays className="h-4 w-4" strokeWidth={1.8} />
                    {item.period}
                  </p>
                  <p className="inline-flex items-center gap-2 sm:justify-end">
                    <MapPin className="h-4 w-4" strokeWidth={1.8} />
                    {item.location}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{item.summary}</p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((point) => (
                  <li key={point} className="text-sm text-ink/90">
                    - {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
