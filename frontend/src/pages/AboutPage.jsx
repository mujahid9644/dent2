import SectionHeader from '../components/ui/SectionHeader'
import SEO from '../components/SEO'
import { breadcrumbSchema, buildCanonical, dentistSchema } from '../utils/seo'

function AboutPage({ settings }) {
  const schema = [
    dentistSchema(settings),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About Clinic', path: '/about' },
    ]),
  ]

  return (
    <>
      <SEO
        title={`About ${settings.clinicName} | Dental Clinic in Dhaka`}
        description={`Learn why patients choose ${settings.clinicName} for safe, modern, and personalized dental treatment in Dhaka.`}
        path="/about"
        schema={schema}
      />
      <section className="bg-white px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="About Clinic"
            title="A patient-first dental clinic in Dhaka"
            description="We combine experienced dentists, strict sterilization standards, and digital technology to deliver predictable and comfortable outcomes."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-slate-900">Why patients choose us</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Experienced dentists with multidisciplinary care planning</li>
                <li>Advanced diagnostic tools for precise treatment</li>
                <li>Painless treatment methods and clear communication</li>
                <li>Transparent pricing with phased treatment options</li>
                <li>Personalized follow-up and preventive guidance</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-slate-900">Hygiene and safety commitment</h3>
              <p className="mt-4 text-slate-600">
                Every procedure follows medical-grade sterilization workflows, single-use consumables where applicable, and cross-infection control protocols. Our focus is simple: safe care, comfortable care, and long-term oral health for every patient.
              </p>
              <a href={buildCanonical('/appointment')} className="btn-primary mt-6 inline-flex">
                Book a Consultation
              </a>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-slate-900">🦷 Experienced Dental Experts</h3>
              <p className="mt-4 text-slate-600">
                Our team of highly skilled dentists and dental doctors in Dhaka is dedicated to delivering the highest standard of dental care. With years of experience and continuous training, we ensure every patient receives treatment from the best dentist team in Dhaka for safe, effective, and long-lasting results.
              </p>
              
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-slate-900">🦷 Affordable & Patient-Centered Care</h3>
              <p className="mt-4 text-slate-600">
As a best dental clinic in Dhaka, we believe quality dental care should be accessible to everyone. We offer affordable treatment options with a patient-first approach, ensuring comfort, transparency, and personalized care for every individual visiting our dental clinic in Dhaka.              </p>
              
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-slate-900">🦷 Advanced Dental Technology</h3>
              <p className="mt-4 text-slate-600">
               We use modern equipment and the latest dental technology to ensure accurate diagnosis and effective treatment. From digital imaging to painless procedures, we provide advanced dental care in Dhaka with precision, safety, and comfort. As a best dental clinic in Dhaka, we are committed to delivering high-quality results using the most advanced dental solutions for every patient.

              </p>
              
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-slate-900">🦷 Comprehensive Dental Services</h3>
              <p className="mt-4 text-slate-600">
                We offer a full range of dental care services in Dhaka, including dental implants, braces, root canal treatment, cosmetic dentistry, and general check-ups. Our experienced dentists and dental doctors in Dhaka provide complete dental solutions under one roof, making us a trusted choice for patients looking for the best dentist in Dhaka and reliable long-term oral health care.
              </p>
              
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
