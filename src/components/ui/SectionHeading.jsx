function SectionHeading({ label, title, description, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
      <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
