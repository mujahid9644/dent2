function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-600">{description}</p> : null}
    </div>
  )
}

export default SectionHeader
