import ProjectCard from '../components/ui/ProjectCard'
import SectionHeading from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="section-shell">
        <SectionHeading
          label="Projects"
          title="Selected projects built with clarity and maintainability."
          description="Project cards include placeholder images, stack details, demo links, and GitHub links."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
