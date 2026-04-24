import SEO from '../components/SEO'

function TermsConditionsPage({ settings }) {
  return (
    <>
      <SEO title={`Terms & Conditions | ${settings.shortClinicName}`} description="Appointment, communication, and treatment policy terms." path="/terms-conditions" />
      <section className="px-4 py-16 md:px-6">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-display text-4xl text-slate-900">Terms & Conditions</h1>
          <p className="mt-4 text-slate-600">Booking requests are subject to schedule availability and clinical suitability. Final treatment planning is confirmed only after in-person evaluation.</p>
          <p className="mt-4 text-slate-600">Pricing can vary by diagnosis complexity and materials. Patients are encouraged to follow aftercare instructions and scheduled review visits for best outcomes.</p>
        </article>
      </section>
    </>
  )
}

export default TermsConditionsPage
