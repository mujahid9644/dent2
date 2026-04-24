import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { breadcrumbSchema } from '../utils/seo'

function ContactPage({ settings }) {
  return (
    <>
      <SEO
        title={`Contact ${settings.shortClinicName} | Dental Clinic in Dhaka`}
        description="Call, WhatsApp, or visit our dental clinic in Dhaka. Find location details, opening hours, and quick appointment options."
        path="/contact"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

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
            <iframe title="Google Map" src={settings.mapEmbedUrl} className="h-full min-h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </article>
        </div>
      </section>
    </>
  )
}

export default ContactPage
