import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const COMPARISON_IMAGES = {
  before:
    'https://res.cloudinary.com/dw8r48tmq/image/upload/v1777037203/cmp_vhzh2j.png',
  after:
    'https://res.cloudinary.com/dw8r48tmq/image/upload/v1777197501/cmp2_efmxye.png',
}

const TRUST_POINTS = [
  'Natural-looking results',
  'Modern cosmetic dentistry',
  'Patient-focused care',
]

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function SmileComparisonSection() {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  const activePointerIdRef = useRef(null)
  const frameRef = useRef(0)
  const pendingPositionRef = useRef(50)
  const boundsRef = useRef(null)
  const beforeClipPath = `inset(0 ${100 - position}% 0 0)`

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  function schedulePositionUpdate(nextPosition) {
    pendingPositionRef.current = clamp(nextPosition, 0, 100)

    if (frameRef.current) return

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0
      setPosition(pendingPositionRef.current)
    })
  }

  function updatePositionFromClientX(clientX) {
    const bounds = boundsRef.current || sliderRef.current?.getBoundingClientRect()
    if (!bounds || !bounds.width) return

    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100
    schedulePositionUpdate(nextPosition)
  }

  function endDrag(event) {
    if (activePointerIdRef.current !== event.pointerId) return

    if (sliderRef.current?.hasPointerCapture(event.pointerId)) {
      sliderRef.current.releasePointerCapture(event.pointerId)
    }
    activePointerIdRef.current = null
    boundsRef.current = null
    setIsDragging(false)
  }

  function startDrag(event) {
    if (!sliderRef.current) return

    event.preventDefault()
    activePointerIdRef.current = event.pointerId
    boundsRef.current = sliderRef.current.getBoundingClientRect()
    sliderRef.current.setPointerCapture(event.pointerId)
    setIsDragging(true)
    updatePositionFromClientX(event.clientX)
  }

  function handlePointerMove(event) {
    if (!isDragging || activePointerIdRef.current !== event.pointerId) return

    event.preventDefault()
    updatePositionFromClientX(event.clientX)
  }

  function handleKeyboard(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPosition((prev) => clamp(prev - 2, 0, 100))
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPosition((prev) => clamp(prev + 2, 0, 100))
    }
  }

  return (
    <section className="px-4 py-14 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-cyan-100 bg-white p-6 shadow-[0_20px_50px_rgba(14,116,144,0.11)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:p-10">
        <div>
          <p className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Smile Transformation Preview
          </p>

          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-slate-900 md:text-4xl">
            See the Difference in Real Smile Transformation
          </h2>

          <p className="mt-4 max-w-lg text-slate-600">
            Explore how modern dental care can improve confidence and smile aesthetics with natural, patient-first cosmetic outcomes.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-cyan-700" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Link to="/appointment" className="btn-primary mt-7 inline-flex px-7">
            Book Appointment <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.1)] md:p-4">
            <div
              ref={sliderRef}
              className="relative isolate h-75 w-full overflow-hidden rounded-xl bg-slate-100 touch-none select-none cursor-ew-resize md:h-95"
              onPointerDown={startDrag}
              onPointerMove={handlePointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              role="region"
              aria-label="Before and after smile comparison"
            >
              <img
                src={COMPARISON_IMAGES.after}
                alt="After dental treatment smile result"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />

              <div
                className="absolute inset-0"
                style={{ clipPath: beforeClipPath, WebkitClipPath: beforeClipPath }}
              >
                <img
                  src={COMPARISON_IMAGES.before}
                  alt="Before dental treatment smile condition"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Before
              </div>
              <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-cyan-700/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                After
              </div>

              <div
                className={`absolute inset-y-0 z-20 cursor-ew-resize ${isDragging ? '' : 'transition-[left] duration-200'}`}
                style={{ left: `${position}%` }}
                role="slider"
                aria-label="Comparison slider handle"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                tabIndex={0}
                onKeyDown={handleKeyboard}
              >
                <div className="h-full w-0.5 -translate-x-1/2 bg-white/95 shadow-[0_0_0_1px_rgba(14,116,144,0.4)]" />
                <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-100 bg-white text-cyan-700 shadow-[0_8px_24px_rgba(15,23,42,0.2)] touch-none">
                  <span aria-hidden="true" className="text-sm font-bold"></span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Drag the slider to compare smile results.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SmileComparisonSection
