import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="surface-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-4 p-5">
        <h3 className="font-display text-xl text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-ink">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-slate-700"
          >
            Demo
            <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-slate-700"
          >
            GitHub
            <Github className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
