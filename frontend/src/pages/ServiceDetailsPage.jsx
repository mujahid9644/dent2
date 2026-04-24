import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import SEO from '../components/SEO'
import { getServiceImage } from '../config/serviceImages'
import { serviceCatalog } from '../data/siteContent'
import { fetchServiceBySlug } from '../lib/api'
import { breadcrumbSchema, serviceSchema } from '../utils/seo'

function ServiceDetailsPage({ settings }) {
  const { slug } = useParams()
  const localService = useMemo(
    () => serviceCatalog.find((item) => item.slug === slug) || null,
    [slug],
  )
  const [service, setService] = useState(localService)
  const [isLoading, setIsLoading] = useState(!localService)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    let isActive = true

    setService(localService)
    setIsLoading(!localService)
    setIsImageLoaded(false)

    if (localService) {
      return () => {
        isActive = false
      }
    }

    fetchServiceBySlug(slug)
      .then((result) => {
        if (!isActive) return
        setService(result || null)
      })
      .finally(() => {
        if (!isActive) return
        setIsLoading(false)
      })

    return () => {
      isActive = false
    }
  }, [slug, localService])

  if (isLoading) {
    return (
      <section className="px-4 py-16 md:px-6" aria-label="Loading service details">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="animate-pulse">
            <div className="h-5 w-32 rounded-full bg-slate-200" />
            <div className="mt-4 h-10 w-3/4 rounded-lg bg-slate-200" />
            <div className="mt-6 h-72 w-full rounded-2xl bg-slate-200" />
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-11/12 rounded bg-slate-200" />
              <div className="h-4 w-4/5 rounded bg-slate-200" />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="h-24 rounded-xl bg-slate-200" />
              <div className="h-24 rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!service) {
    return (
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Service Not Found</p>
          <h1 className="mt-3 font-display text-3xl text-slate-900">This treatment could not be loaded.</h1>
          <p className="mt-3 text-slate-600">Please return to the services page and select a treatment again.</p>
          <Link to="/services" className="btn-secondary mt-6 inline-flex">View All Services</Link>
        </div>
      </section>
    )
  }

  const serviceImage = service.image || getServiceImage(service.slug, service.name)

  const schema = [
    serviceSchema(service, settings),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: `/services/${slug}` },
    ]),
  ]

  return (
    <>
      <SEO
        title={`${service.name} in Dhaka | ${settings.shortClinicName}`}
        description={service.meta_description || `${service.name} with advanced diagnostics and patient-friendly care at ${settings.clinicName}.`}
        path={`/services/${slug}`}
        schema={schema}
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Service Details</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-slate-900">{service.name}</h1>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            {!isImageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-linear-to-r from-slate-100 via-slate-200 to-slate-100" />
            )}
            <img
              src={serviceImage}
              alt={service.name}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setIsImageLoaded(true)}
              className={`h-72 w-full object-cover transition-opacity duration-500 md:h-96 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <p className="mt-5 leading-relaxed text-slate-600">{service.description}</p>

          <div className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-6 md:grid-cols-2">
            <div>
              <h2 className="font-semibold text-slate-900">Best for</h2>
              <p className="mt-2 text-sm text-slate-600">Patients looking for effective, evidence-based treatment with comfort and clarity.</p>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Location Focus</h2>
              <p className="mt-2 text-sm text-slate-600">Conveniently serving families across Dhanmondi, Banani, Gulshan, Mirpur, and all of Dhaka.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="btn-primary">Book This Treatment</Link>
            <Link to="/services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsPage
