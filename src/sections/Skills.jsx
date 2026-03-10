import SectionHeading from '../components/ui/SectionHeading'
import SkillCard from '../components/ui/SkillCard'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="section-shell">
        <SectionHeading
          label="Skills"
          title="Core stack for modern frontend delivery."
          description="Each skill is represented with lucide-react icons and modular cards."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
