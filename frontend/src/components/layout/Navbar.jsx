import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar({ settings }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:py-4">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl bg-(--color-primary) text-sm font-bold text-white shadow-lg shadow-cyan-300/30">
            {settings.shortClinicName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="font-display text-2xl leading-none tracking-tight text-slate-900">{settings.shortClinicName}</p>
            <p className="text-xs font-medium text-slate-500">Dentist in Dhaka</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? 'text-(--color-primary)' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${settings.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            <Phone size={16} />
            {settings.phone}
          </a>
          <Link to="/appointment" className="btn-primary px-6">
            {settings.ctaPrimary}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle Menu"
          className="grid size-10 place-items-center rounded-xl border border-slate-300 text-slate-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={18} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">
                {item.label}
              </NavLink>
            ))}
            <p className="px-3 pt-2 text-xs text-slate-500">{settings.openingHours}</p>
            <Link to="/appointment" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">
              {settings.ctaPrimary}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
