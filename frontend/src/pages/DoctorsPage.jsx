import { Link } from 'react-router-dom'

import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { doctorProfiles } from '../data/siteContent'
import { breadcrumbSchema } from '../utils/seo'

function DoctorsPage({ settings, doctors }) {
  const doctorImageBySlug = doctorProfiles.reduce((acc, profile) => {
    acc[profile.slug] = profile.image_url
    return acc
  }, {})

  const fallbackDoctorImage =
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80'

  return (
    <>
      <SEO
        title={`Dentists | ${settings.shortClinicName}`}
        description="Meet experienced dentists in Dhaka for implants, braces, smile makeovers, and family dental treatment."
        path="/doctors"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Doctors', path: '/doctors' },
        ])}
      />

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Meet Our Dentists" title="Skilled doctors with a compassionate approach" description="Each dentist follows patient-centered consultation and precision-first clinical standards." />

          <div className="grid gap-6 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article
                key={doctor.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(14,116,144,0.16)]"
              >
                <div className="aspect-3/2 overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image_url || doctor.image || doctorImageBySlug[doctor.slug] || fallbackDoctorImage}
                    alt={`${doctor.name}, ${doctor.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <p className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">
                    {doctor.title}
                  </p>

                  <h3 className="mt-3 font-display text-2xl leading-tight text-slate-900">{doctor.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-(--color-primary)">{doctor.credentials}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{doctor.bio}</p>

                  <Link
                    to={`/doctors/${doctor.slug}`}
                    className="mt-5 inline-flex items-center rounded-full border border-cyan-200 px-4 py-2 text-sm font-semibold text-cyan-800 transition-colors duration-300 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white"
                  >
                    View Profile
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

export default DoctorsPage
