import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon'

function SkillCard({ skill, index }) {
  return (
    <motion.article
      className="surface-card p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-soft text-ink">
          <SkillIcon name={skill.icon} />
        </span>
        <h3 className="font-semibold text-ink">{skill.name}</h3>
      </div>
    </motion.article>
  )
}

export default SkillCard
