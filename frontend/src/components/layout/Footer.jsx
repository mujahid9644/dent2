import { Link } from 'react-router-dom'

function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.78-3.88 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.62.76-1.62 1.55V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" />
      </svg>
    )
  }

  if (type === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M23 12s0-3.56-.45-5.28a2.8 2.8 0 0 0-1.97-1.98C18.86 4.3 12 4.3 12 4.3s-6.86 0-8.58.44a2.8 2.8 0 0 0-1.97 1.98C1 8.44 1 12 1 12s0 3.56.45 5.28a2.8 2.8 0 0 0 1.97 1.98c1.72.44 8.58.44 8.58.44s6.86 0 8.58-.44a2.8 2.8 0 0 0 1.97-1.98C23 15.56 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-8.4 7.6H8.2V18h2.4v-7.4zm-1.2-3.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zM18 13.8c0-2.3-1.2-3.4-2.9-3.4-1.3 0-1.9.7-2.2 1.2v-1h-2.3V18h2.4v-4c0-1 .2-2 1.5-2s1.5 1.4 1.5 2V18H18v-4.2z" />
    </svg>
  )
}

function Footer({ settings }) {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-display text-2xl">{settings.shortClinicName}</h3>
          <p className="mt-4 text-sm text-slate-300">{settings.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">{settings.address}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={settings.socialLinks?.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <SocialIcon type="facebook" />
            </a>
            <a
              href={settings.socialLinks?.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <SocialIcon type="instagram" />
            </a>
            <a
              href={settings.socialLinks?.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid size-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <SocialIcon type="youtube" />
            </a>
            <a
              href={settings.socialLinks?.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <SocialIcon type="linkedin" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Quick Links</h4>
          <div className="mt-4 space-y-2 text-sm">
            <Link to="/services" className="block hover:text-white">Services</Link>
            <Link to="/doctors" className="block hover:text-white">Doctors</Link>
            <Link to="/testimonials" className="block hover:text-white">Testimonials</Link>
            <Link to="/appointment" className="block hover:text-white">Book Appointment</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>{settings.phone}</p>
            <p>{settings.email}</p>
            <p>{settings.openingHours}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Legal</h4>
          <div className="mt-4 space-y-2 text-sm">
            <Link to="/privacy-policy" className="block hover:text-white">Privacy Policy</Link>
            <Link to="/terms-conditions" className="block hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400 md:px-6">
        Copyright {new Date().getFullYear()} {settings.clinicName}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
