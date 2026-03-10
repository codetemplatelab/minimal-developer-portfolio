import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-accent text-white hover:bg-slate-700',
  secondary: 'border border-line bg-white text-ink hover:bg-soft',
}

function ButtonLink({ href, children, variant = 'primary', className = '', ...rest }) {
  const classNames = [
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
    variants[variant] ?? variants.primary,
    className,
  ]
    .join(' ')
    .trim()

  return (
    <motion.a
      href={href}
      className={classNames}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

export default ButtonLink
