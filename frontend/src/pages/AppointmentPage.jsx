import { useState } from 'react'

import SEO from '../components/SEO'
import { createAppointment } from '../lib/api'

function AppointmentPage({ settings, services, doctors }) {
  const [form, setForm] = useState({
    patient_name: '',
    phone: '',
    email: '',
    preferred_date: '',
    preferred_time: '',
    service: '',
    doctor: '',
    message: '',
    honeypot: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    try {
      await createAppointment({
        ...form,
        service: form.service || null,
        doctor: form.doctor || null,
      })
      setStatus({ type: 'success', message: 'Your appointment request has been submitted successfully.' })
      setForm({
        patient_name: '',
        phone: '',
        email: '',
        preferred_date: '',
        preferred_time: '',
        service: '',
        doctor: '',
        message: '',
        honeypot: '',
      })
    } catch {
      setStatus({ type: 'error', message: 'Submission failed. Please verify your information and try again.' })
    }
  }

  return (
    <>
      <SEO
        title={`Book Appointment | ${settings.shortClinicName}`}
        description="Book your consultation with an experienced dentist in Dhaka. Fast response for routine and emergency dental concerns."
        path="/appointment"
      />

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">Appointment Booking</p>
          <h1 className="mt-3 font-display text-4xl text-slate-900">Book your visit in under 1 minute</h1>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
            <input name="patient_name" value={form.patient_name} onChange={onChange} placeholder="Patient name" required className="input" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" required className="input" />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="input" />
            <input name="preferred_date" type="date" value={form.preferred_date} onChange={onChange} required className="input" />
            <input name="preferred_time" type="time" value={form.preferred_time} onChange={onChange} required className="input" />

            <select name="service" value={form.service} onChange={onChange} className="input">
              <option value="">Service interest</option>
              {services.map((service) => (
                <option key={service.slug} value={service.id || service.slug}>{service.name}</option>
              ))}
            </select>

            <select name="doctor" value={form.doctor} onChange={onChange} className="input">
              <option value="">Doctor preference</option>
              {doctors.map((doctor) => (
                <option key={doctor.slug} value={doctor.id || doctor.slug}>{doctor.name}</option>
              ))}
            </select>

            <textarea name="message" value={form.message} onChange={onChange} placeholder="Message / symptoms" rows={5} className="input md:col-span-2" />
            <input name="honeypot" value={form.honeypot} onChange={onChange} className="hidden" tabIndex="-1" autoComplete="off" />

            <button type="submit" className="btn-primary md:col-span-2">Submit Appointment Request</button>
          </form>

          {status.message ? (
            <p className={`mt-4 rounded-xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
              {status.message}
            </p>
          ) : null}
        </div>
      </section>
    </>
  )
}

export default AppointmentPage
