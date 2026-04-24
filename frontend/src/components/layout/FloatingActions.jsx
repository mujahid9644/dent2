import { PhoneCall } from 'lucide-react'

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.11 17.53c-.27-.14-1.59-.78-1.83-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.46-.82-2-.22-.53-.45-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.25 0 1.33.96 2.61 1.09 2.79.14.18 1.88 2.87 4.56 4.03.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.59-.65 1.81-1.28.22-.63.22-1.17.15-1.28-.06-.11-.24-.18-.51-.31z" />
      <path d="M16.05 3.2c-6.99 0-12.67 5.68-12.67 12.66 0 2.23.58 4.41 1.68 6.33L3.2 28.8l6.77-1.78a12.63 12.63 0 0 0 6.08 1.55h.01c6.98 0 12.66-5.68 12.66-12.67 0-3.38-1.32-6.56-3.72-8.95A12.58 12.58 0 0 0 16.05 3.2zm0 23.22h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.22-4.02 1.05 1.07-3.92-.25-.4a10.53 10.53 0 0 1-1.62-5.58c0-5.82 4.74-10.56 10.58-10.56 2.82 0 5.47 1.09 7.46 3.09a10.5 10.5 0 0 1 3.09 7.48c0 5.84-4.74 10.58-10.56 10.58z" />
    </svg>
  )
}

function FloatingActions({ settings }) {
  return (
    <>
      <a
        href={`https://wa.me/${settings.whatsapp.replace(/[^\d]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-400/40 transition hover:-translate-y-1 hover:brightness-105 md:size-14"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="size-6 md:size-7" />
      </a>
      <a
        href={`tel:${settings.phone}`}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-400/40 md:hidden"
      >
        <PhoneCall size={18} />
        Quick Call
      </a>
    </>
  )
}

export default FloatingActions
