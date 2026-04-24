import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { breadcrumbSchema, faqSchema } from '../utils/seo'

function FAQPage({ faqs }) {
  return (
    <>
      <SEO
        title="Dental FAQs | Dentist in Dhaka"
        description="Common questions about dental checkups, braces, root canal, implants, and emergency treatments in Dhaka."
        path="/faq"
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" open={idx === 0}>
                <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQPage
