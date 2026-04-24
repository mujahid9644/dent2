import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import SEO from '../components/SEO'
import { doctorProfiles } from '../data/siteContent'
import { fetchDoctorBySlug } from '../lib/api'
import { breadcrumbSchema } from '../utils/seo'

const doctorImageBySlug = doctorProfiles.reduce((acc, profile) => {
  acc[profile.slug] = profile.image_url
  return acc
}, {})

const fallbackDoctorImage =
  'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80'

const mediaBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api').replace(/\/api\/?$/, '')

function resolveDoctorImage(doctor) {
  if (!doctor) return fallbackDoctorImage
  if (doctor.image_url) return doctor.image_url
  if (doctor.image) return doctor.image

  if (doctor.photo) {
    if (/^https?:\/\//.test(doctor.photo)) return doctor.photo
    return `${mediaBaseUrl}${doctor.photo.startsWith('/') ? '' : '/'}${doctor.photo}`
  }

  return doctorImageBySlug[doctor.slug] || fallbackDoctorImage
}

function DoctorDetailsPage() {
  const { slug } = useParams()
  const [doctor, setDoctor] = useState(() => doctorProfiles.find((item) => item.slug === slug) || null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const localDoctor = doctorProfiles.find((item) => item.slug === slug) || null

    if (localDoctor) {
      setDoctor(localDoctor)
      fetchDoctorBySlug(slug).then((remoteDoctor) => {
        if (!remoteDoctor) return
        setDoctor((prev) => ({ ...prev, ...remoteDoctor }))
      })
      return
    }

    setIsLoading(true)
    fetchDoctorBySlug(slug)
      .then(setDoctor)
      .finally(() => setIsLoading(false))
  }, [slug])

  if (!doctor && isLoading) {
    return <section className="px-4 py-16 text-center">Loading doctor profile...</section>
  }

  if (!doctor) {
    return (
      <section className="px-4 py-16 text-center md:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-display text-3xl text-slate-900">Doctor profile not found</h1>
          <p className="mt-3 text-slate-600">Please return to the doctors page and try again.</p>
          <Link to="/doctors" className="btn-secondary mt-6 inline-flex">Back to Doctors</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO
        title={`${doctor.name} | Best Dentist Doctor in Dhaka`}
        description={`${doctor.name}, ${doctor.credentials}. Trusted dentist doctor in Dhaka for comfortable and evidence-based dental care.`}
        path={`/doctors/${slug}`}
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Doctors', path: '/doctors' },
          { name: doctor.name, path: `/doctors/${slug}` },
        ])}
      />

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-60 w-full bg-slate-100 md:h-72">
            <img
              src={resolveDoctorImage(doctor)}
              alt={`${doctor.name}, ${doctor.title}`}
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>

          <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary)">Doctor Profile</p>
          <h1 className="mt-2 font-display text-4xl text-slate-900">{doctor.name}</h1>
          <p className="mt-2 text-lg text-slate-600">{doctor.title}</p>
          <p className="mt-1 text-sm text-slate-500">{doctor.credentials}</p>
          <p className="mt-6 leading-relaxed text-slate-600">{doctor.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="btn-primary">Book with this Doctor</Link>
            <Link to="/doctors" className="btn-secondary">Back to Doctors</Link>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DoctorDetailsPage
