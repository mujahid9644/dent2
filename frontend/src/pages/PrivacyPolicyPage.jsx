import SEO from '../components/SEO'

function PrivacyPolicyPage({ settings }) {
  return (
    <>
      <SEO title={`Privacy Policy | ${settings.shortClinicName}`} description="Privacy policy for patient communication and website data handling." path="/privacy-policy" />
      <section className="px-4 py-16 md:px-6">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-display text-4xl text-slate-900">Privacy Policy</h1>
          <p className="mt-4 text-slate-600">We collect contact details and appointment preferences only to deliver dental services, confirm bookings, and improve patient care. We do not sell personal data.</p>
          <p className="mt-4 text-slate-600">Appointment submissions may be used for phone, WhatsApp, and email follow-up. You can request data correction or deletion anytime by contacting our clinic team.</p>
        </article>
      </section>
    </>
  )
}

export default PrivacyPolicyPage
