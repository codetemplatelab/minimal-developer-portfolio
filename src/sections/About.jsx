import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="section-space">
      <div className="section-shell">
        <SectionHeading
          label="About"
          title="Developer-focused by craft and architecture-driven by default."
          description={profile.about.careerSummary}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="surface-card p-6 sm:p-8">
            {profile.about.biography.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-base leading-relaxed text-muted last:mb-0">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="surface-card p-6 sm:p-8" delay={0.08}>
            <h3 className="font-display text-xl text-ink">Technology Focus</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.about.technologyFocus && profile.about.technologyFocus.map((tech) => (
                <li key={tech} className="rounded-full bg-soft px-4 py-2 text-sm font-medium text-ink">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
