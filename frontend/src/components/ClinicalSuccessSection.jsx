import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CASE_STUDIES = [
  {
    title: 'Orthodontic Correction',
    description: 'Transformative power of comprehensive orthodontic treatment.',
    cta: 'EXPLORE CASE ->',
    imageUrl:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
    alt: 'Orthodontic braces treatment close-up in a dental clinic',
  },
  {
    title: 'Instant Teeth Whitening',
    description: 'Safe, effective way to brighten your smile professionally.',
    cta: 'EXPLORE CASE ->',
    imageUrl:
      'https://tse1.mm.bing.net/th/id/OIP.GCbn6HZg8GJObwP-pvLl4QHaEN?pid=ImgDet&w=181&h=102&c=7&dpr=1.5&o=7&rm=3',
    alt: 'Professional in-clinic teeth whitening session with dentist',
  },
  {
    title: 'Case Study: Missing Tooth',
    description: 'Dental implants are the gold standard for tooth replacement.',
    cta: 'EXPLORE CASE ->',
    imageUrl:
      'https://th.bing.com/th/id/OIP.38QCE_P8psoIIgl_h1CZQwHaFD?w=293&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
    alt: 'Dental implant planning and consultation with digital diagnostics',
  },
  {
    title: 'Aesthetic Rehab: Veneers',
    description: 'Excellent choice for managing attrition and minor chipping.',
    cta: 'EXPLORE CASE ->',
    imageUrl:
      'https://media.istockphoto.com/id/846896372/photo/dental-tooth-dentistry-student-learning-teaching-model-showing-teeth-roots-gums-gum-disease.jpg?s=170667a&w=0&k=20&c=mlXMLHVgBmdd1qAGUugrKmm2DJKkOKne5NcXKiu2LnI=',
    alt: 'Cosmetic veneer smile makeover consultation in modern dental office',
  },
]

const STACK_CONFIG = [
  {
    cardSize: 'h-[15rem] w-[13.5rem] md:h-[15.5rem] md:w-[14rem]',
    defaultState: { top: '50%', left: '50%', x: 0, y: 0, scale: 1, opacity: 1, zIndex: 40 },
    hoverState: { top: '26%', left: '30%', x: 0, y: 0, scale: 1, opacity: 1, zIndex: 40 },
    defaultShadow: 'shadow-[0_24px_54px_rgba(30,41,59,0.2)]',
    hoverShadow: 'shadow-[0_22px_50px_rgba(30,41,59,0.19)]',
  },
  {
    cardSize: 'h-[15rem] w-[13.5rem] md:h-[15.5rem] md:w-[14rem]',
    defaultState: { top: '50%', left: '50%', x: -13, y: -8, scale: 0.96, opacity: 0.9, zIndex: 30 },
    hoverState: { top: '26%', left: '70%', x: 0, y: 0, scale: 1, opacity: 1, zIndex: 35 },
    defaultShadow: 'shadow-[0_16px_36px_rgba(30,41,59,0.15)]',
    hoverShadow: 'shadow-[0_22px_48px_rgba(30,41,59,0.19)]',
  },
  {
    cardSize: 'h-[15rem] w-[13.5rem] md:h-[15.5rem] md:w-[14rem]',
    defaultState: { top: '50%', left: '50%', x: 12, y: 7, scale: 0.94, opacity: 0.86, zIndex: 20 },
    hoverState: { top: '74%', left: '30%', x: 0, y: 0, scale: 1, opacity: 1, zIndex: 30 },
    defaultShadow: 'shadow-[0_15px_34px_rgba(30,41,59,0.14)]',
    hoverShadow: 'shadow-[0_22px_48px_rgba(30,41,59,0.19)]',
  },
  {
    cardSize: 'h-[15rem] w-[13.5rem] md:h-[15.5rem] md:w-[14rem]',
    defaultState: { top: '50%', left: '50%', x: 0, y: 16, scale: 0.92, opacity: 0.82, zIndex: 10 },
    hoverState: { top: '74%', left: '70%', x: 0, y: 0, scale: 1, opacity: 1, zIndex: 25 },
    defaultShadow: 'shadow-[0_14px_30px_rgba(30,41,59,0.13)]',
    hoverShadow: 'shadow-[0_20px_44px_rgba(30,41,59,0.18)]',
  },
]

function ClinicalSuccessSection() {
  const [isBoardHovered, setIsBoardHovered] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [mobileOrder, setMobileOrder] = useState(CASE_STUDIES.map((_, index) => index))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    function handleViewportChange(event) {
      setIsMobileView(event.matches)
    }

    setIsMobileView(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleViewportChange)

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange)
    }
  }, [])

  function handleMobileCardSelect(slotIndex) {
    if (!isMobileView || slotIndex === 0) return

    setMobileOrder((prevOrder) => {
      const nextOrder = [...prevOrder]
      ;[nextOrder[0], nextOrder[slotIndex]] = [nextOrder[slotIndex], nextOrder[0]]
      return nextOrder
    })
  }

  const cardRenderOrder = isMobileView
    ? mobileOrder
    : CASE_STUDIES.map((_, index) => index)

  return (
    <section className="px-4 py-14 md:px-6" aria-label="Clinical success and case studies">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-rose-100 bg-linear-to-b from-white to-rose-50/45 p-6 shadow-[0_28px_60px_rgba(236,72,153,0.08)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:p-10">
        <div className="max-w-xl">
          <p className="inline-flex rounded-full border border-green-300 bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
            EXPERT TREATMENTS
          </p>

          <h2 className="mt-4 font-display text-3xl leading-tight text-slate-900 md:text-5xl md:leading-[1.08]">
            Clinical
            <span className="bg-linear-to-r from-green-500 via-green-700 to-green-900 bg-clip-text text-transparent"> Success </span>
            &amp; Case Studies.
          </h2>

          <p className="mt-5 max-w-lg text-slate-600">
            Experience the precision of Tech Dental experts through our real-life treatment cases. Explore how we restore health and confidence.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-green-500 to-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(236,72,153,0.34)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
          >
            <span>View all Case Study</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        <div
          className="relative h-132 overflow-hidden rounded-4xl border border-rose-100/80 bg-white/75 md:h-140"
          onMouseEnter={() => setIsBoardHovered(true)}
          onMouseLeave={() => setIsBoardHovered(false)}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-pink-300/50 via-fuchsia-200/30 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-[56%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-fuchsia-300/25 via-rose-200/20 to-transparent blur-[72px]" />

          <div className="relative h-full w-full">
            {cardRenderOrder.map((studyIndex, slotIndex) => {
              const item = CASE_STUDIES[studyIndex]
              const config = STACK_CONFIG[slotIndex]
              const state = isBoardHovered ? config.hoverState : config.defaultState

              return (
                <article
                  key={item.title}
                  className={`absolute overflow-hidden rounded-[1.6rem] border border-rose-100 bg-white will-change-transform transition-[top,left,transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${config.cardSize} ${isBoardHovered ? config.hoverShadow : config.defaultShadow} ${isMobileView ? 'cursor-pointer touch-manipulation' : ''}`}
                  style={{
                    top: state.top,
                    left: state.left,
                    zIndex: state.zIndex,
                    opacity: state.opacity,
                    transform: `translate(calc(-50% + ${state.x}px), calc(-50% + ${state.y}px)) scale(${state.scale})`,
                  }}
                  onClick={() => handleMobileCardSelect(slotIndex)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    loading="lazy"
                    className="h-32 w-full object-cover md:h-36"
                  />
                  <div className="space-y-2 p-4 md:p-5">
                    <h3 className="font-display text-lg leading-tight text-slate-900 md:text-xl">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                    <p className="pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-rose-600">{item.cta}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClinicalSuccessSection
