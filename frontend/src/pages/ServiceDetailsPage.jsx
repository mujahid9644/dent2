import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

import SEO from '../components/SEO'
import { resolveServiceImageSource } from '../config/serviceImages'
import { breadcrumbSchema, serviceSchema } from '../utils/seo'

function ServiceDetailsPage({ settings, services = [] }) {
  const { slug } = useParams()
  const service = useMemo(() => services.find((s) => s.slug === slug), [services, slug])
  console.log('SERVICE:', service)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  if (!service) {
    return (
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Service Not Found</p>
          <h1 className="mt-3 font-display text-3xl text-slate-900">Service not found</h1>
          <p className="mt-3 text-slate-600">Please return to the services page and select a treatment again.</p>
          <Link to="/services" className="btn-secondary mt-6 inline-flex">View All Services</Link>
        </div>
      </section>
    )
  }

  const serviceTitle = service.title || service.name
  const serviceImage = service.image || resolveServiceImageSource(service)

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
        title={`${serviceTitle} in Dhaka | ${settings.shortClinicName}`}
        description={service.meta_description || `${serviceTitle} with advanced diagnostics and patient-friendly care at ${settings.clinicName}.`}
        path={`/services/${slug}`}
        schema={schema}
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Service Details</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-slate-900">{serviceTitle}</h1>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={serviceImage}
              alt={serviceTitle}
              loading="eager"
              className="w-full h-75 object-cover rounded-2xl md:h-96"
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
