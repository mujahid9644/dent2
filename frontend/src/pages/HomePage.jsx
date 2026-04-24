import { ArrowRight, CalendarCheck2, CheckCircle2, MapPin, Phone, ShieldCheck, Star, Stethoscope, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'

import SEO from '../components/SEO'
import ClinicalSuccessSection from '../components/ClinicalSuccessSection'
import SmileComparisonSection from '../components/SmileComparisonSection'
import SectionHeader from '../components/ui/SectionHeader'
import { breadcrumbSchema, dentistSchema } from '../utils/seo'

function PhoneBadge() {
  return (
    <div className="grid size-9 place-items-center rounded-full bg-cyan-50">
      <Phone size={18} className="text-cyan-700" />
    </div>
  )
}

function ToothIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.8 3.5c1.2 0 1.8.5 2.4.9.5.4 1 .6 1.8.6s1.3-.2 1.8-.6c.6-.4 1.2-.9 2.4-.9 2.2 0 3.8 1.7 3.8 4.1 0 2.1-.8 4.2-1.9 6.1-1.1 1.9-1.7 4.3-1.9 5.5-.1.8-.7 1.3-1.3 1.3-.7 0-1.2-.5-1.4-1.3l-.8-3.1c-.2-.7-.6-1.1-1.2-1.1s-1 .4-1.2 1.1l-.8 3.1c-.2.8-.7 1.3-1.4 1.3-.6 0-1.2-.5-1.3-1.3-.2-1.2-.8-3.6-1.9-5.5C4.8 11.8 4 9.7 4 7.6 4 5.2 5.6 3.5 7.8 3.5z" />
    </svg>
  )
}

function HomePage({ settings, services, doctors, testimonials, blogs, gallery }) {
  const featuredServices = services.slice(0, 6)
  const featuredDoctors = doctors.slice(0, 2)
  const featuredBlogs = blogs.slice(0, 3)
  const trustItems = [
    {
      title: 'Expert Dentists',
      text: 'Experienced and patient-focused dental team',
      icon: Stethoscope,
    },
    {
      title: 'Advanced Technology',
      text: 'Modern diagnostics for precise treatment planning',
      icon: CalendarCheck2,
    },
    {
      title: 'Painless Treatment',
      text: 'Comfort-first care with gentle clinical workflow',
      icon: CheckCircle2,
    },
    {
      title: 'Affordable Pricing',
      text: 'Transparent plans with flexible treatment options',
      icon: WalletCards,
    },
  ]

  return (
    <>
      <SEO
        title={settings.defaultMetaTitle}
        description={settings.defaultMetaDescription}
        path="/"
        schema={[
          dentistSchema(settings),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />

      <section className="relative overflow-hidden px-4 pb-8 pt-10 md:px-6 md:pt-14">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              <ToothIcon />
              Dental Clinic In Dhaka
            </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] text-slate-900 md:text-6xl">
                Best Dental Clinic in Dhaka for Confident Smiles
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                {settings.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/appointment" className="btn-primary px-7">
                  {settings.ctaPrimary}
                </Link>
                <Link to="/services" className="btn-secondary px-7">
                  Our Services
                </Link>
              </div>

              <div className="mt-9 grid gap-5 border-t border-slate-200 pt-6 text-sm md:grid-cols-2">
                <div className="inline-flex items-start gap-3">
                  <PhoneBadge />
                  <div>
                    <p className="text-slate-500">Call Us</p>
                    <a href={`tel:${settings.phone}`} className="font-semibold text-slate-800">{settings.phone}</a>
                  </div>
                </div>
                <div className="inline-flex items-start gap-3">
                  <MapPin size={20} className="mt-1 text-cyan-700" />
                  <div>
                    <p className="text-slate-500">Location</p>
                    <p className="font-semibold text-slate-800">Dhanmondi, Dhaka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-[0_28px_70px_rgba(14,116,144,0.22)]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
                  alt="Smiling patient receiving dental treatment in modern clinic"
                  className="h-[420px] w-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Quick Appointment
              <div className="absolute bottom-4 left-4 right-4 hidden rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur md:block md:bottom-5 md:left-5 md:right-5 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">Quick Appointment</p>
                <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                  <a href={`tel:${settings.phone}`} className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-700">Call: {settings.phone}</a>
                  <p className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-700">Open: {settings.openingHours}</p>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-14 md:px-6 md:pb-16">
        <div className="mx-auto grid max-w-7xl divide-y divide-cyan-600/30 overflow-hidden rounded-3xl bg-cyan-700 text-white shadow-[0_18px_40px_rgba(14,116,144,0.35)] md:divide-x md:divide-y-0 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="p-6 md:p-7">
                <Icon size={23} className="text-cyan-100" />
                <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-cyan-100">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <SmileComparisonSection />
      <ClinicalSuccessSection />

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <SectionHeader eyebrow="Featured Services" title="High-demand dental treatments in Dhaka" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.slug} className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-display text-2xl text-slate-900">{service.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.short_description}</p>
                <Link to={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Learn More <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Meet Our Dentists" title="Experienced dentists for precise, painless care" />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredDoctors.map((doctor) => (
              <article key={doctor.slug} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold text-[var(--color-primary)]">{doctor.credentials}</p>
                <h3 className="mt-2 font-display text-3xl text-slate-900">{doctor.name}</h3>
                <p className="mt-1 text-slate-600">{doctor.title}</p>
                <p className="mt-4 text-sm text-slate-600">{doctor.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Before & After" title="Smile transformation confidence" description="Real treatment journeys, functional improvements, and aesthetic upgrades." />
          <div className="grid gap-5 md:grid-cols-3">
            {gallery.slice(0, 3).map((image) => (
              <img key={image.title} src={image.image} alt={image.alt_text} loading="lazy" className="h-72 w-full rounded-3xl object-cover shadow-md" />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-slate-900 p-8 text-white">
            <ShieldCheck className="text-cyan-300" />
            <h3 className="mt-4 font-display text-3xl">Sterilization and safety protocol</h3>
            <p className="mt-3 text-slate-300">Autoclave sterilization, infection-control routines, and carefully monitored treatment rooms to ensure patient safety.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-3xl text-slate-900">Why choose us</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Location-friendly clinic for patients across Dhaka</li>
              <li>Transparent consultation and treatment planning</li>
              <li>Personalized care with modern dental technology</li>
              <li>Comfort-driven, patient-friendly appointment flow</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Patient Stories" title="Trusted by families across Dhaka" />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.patient_name} className="rounded-3xl border border-slate-200 p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating || 5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{item.patient_name}, {item.patient_location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Latest Insights" title="Educational blog for better oral health decisions" />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)]">Read Article</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-14 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl bg-gradient-to-r from-cyan-700 to-teal-700 p-8 text-white md:grid-cols-2 md:items-center md:p-10">
          <div>
            <h2 className="font-display text-3xl">Ready to book your consultation?</h2>
            <p className="mt-3 text-cyan-100">Visit a trusted dental clinic in Dhaka for complete smile care.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/appointment" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-700">Book Appointment</Link>
            <Link to="/contact" className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white">Visit Contact Page</Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeader title="Get in touch" description="Our team responds quickly for appointment requests and emergency support." />
            <div className="space-y-3 text-slate-600">
              <p><strong>Phone:</strong> {settings.phone}</p>
              <p><strong>WhatsApp:</strong> {settings.whatsapp}</p>
              <p><strong>Email:</strong> {settings.email}</p>
              <p><strong>Address:</strong> {settings.address}</p>
              <p><strong>Opening Hours:</strong> {settings.openingHours}</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Google Map"
              src={settings.mapEmbedUrl}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </article>
        </div>
      </section>
    </>
  )
}

export default HomePage
