import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { resolveServiceImageSource } from '../config/serviceImages'
import { breadcrumbSchema } from '../utils/seo'

function ServicesPage({ settings, services }) {
  return (
    <>
      <SEO
        title={`Dental Services | ${settings.shortClinicName}`}
        description="Explore complete treatments including root canal, implants, braces, whitening, pediatric dentistry, and emergency dental care in Dhaka."
        path="/services"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Dental Treatments"
            title="Comprehensive services for every smile stage"
            description="From preventive care to advanced smile rehabilitation, every treatment is planned for precision, comfort, and long-term outcomes."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(14,116,144,0.16)]"
              >
                <div className="relative overflow-hidden border-b border-slate-100">
                  <img
                    src={resolveServiceImageSource(service)}
                    alt={service.name}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight text-slate-900">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.short_description}</p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-800"
                  >
                    View Treatment Details <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
