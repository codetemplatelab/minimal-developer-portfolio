import { Atom, Code2, Database, Server, Wind } from 'lucide-react'

const iconMap = {
  react: Atom,
  javascript: Code2,
  tailwind: Wind,
  node: Server,
  graphql: Database,
}

function SkillIcon({ name, className = 'h-5 w-5' }) {
  const Icon = iconMap[name] ?? Code2
  return <Icon className={className} strokeWidth={1.8} />
}

export default SkillIcon
