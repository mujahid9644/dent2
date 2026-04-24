import { Star } from 'lucide-react'

import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { breadcrumbSchema } from '../utils/seo'

function TestimonialsPage({ testimonials }) {
  return (
    <>
      <SEO
        title="Patient Testimonials | Dental Clinic in Dhaka"
        description="Read real patient experiences and reviews of treatments at our trusted dental clinic in Dhaka."
        path="/testimonials"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials' },
        ])}
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Testimonials" title="What our patients say" />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.patient_name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-3 flex gap-1 text-amber-500">
                  {[...Array(item.rating || 5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{item.patient_name} - {item.patient_location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsPage
