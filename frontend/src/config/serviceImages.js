const SERVICE_IMAGE_BY_SLUG = {
  'dental-checkup':
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
  'teeth-cleaning':
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
  'scaling-polishing':
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
  'root-canal-treatment':
    'https://tse1.explicit.bing.net/th/id/OIP.cSa80zWVpuqNhgJ7yxVR7gHaEv?w=875&h=561&rs=1&pid=ImgDetMain&o=7&rm=3',
  'tooth-extraction':
    'https://cdn.shortpixel.ai/spai/q_lossless+w_1082+to_webp+ret_img/storage.googleapis.com/local-dentist-nearby/850x650/Tooth-Extraction.webp',
  'dental-filling':
    'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80',
  'dental-crown-bridge':
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
  'dental-implant':
    'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1400&q=80',
  'orthodontics-braces':
    'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=80',
  'clear-aligners':
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80',
  'teeth-whitening':
    'https://tse1.explicit.bing.net/th/id/OIP.XQIoV89ge8MapP4WdlleoAHaE8?w=612&h=408&rs=1&pid=ImgDetMain&o=7&rm=3',
  'cosmetic-dentistry':
    'https://www.1300smiles.com.au/media/1kpk0ht0/istock-1279150144-768x512.jpg?rmode=max&width=408&height=272',
  'pediatric-dentistry':
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
  'gum-treatment':
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
  'wisdom-tooth-surgery':
    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80',
  'smile-makeover':
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
}

const FALLBACK_SERVICE_IMAGE =
  '/images/service-fallback.svg'

function normalizeServiceSlug(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getServiceImage(serviceSlug, serviceName) {
  const normalizedSlug = normalizeServiceSlug(serviceSlug)
  if (SERVICE_IMAGE_BY_SLUG[normalizedSlug]) return SERVICE_IMAGE_BY_SLUG[normalizedSlug]

  const normalizedName = normalizeServiceSlug(serviceName)
  if (SERVICE_IMAGE_BY_SLUG[normalizedName]) return SERVICE_IMAGE_BY_SLUG[normalizedName]

  return FALLBACK_SERVICE_IMAGE
}

export function resolveServiceImageSource(service) {
  if (!service) return FALLBACK_SERVICE_IMAGE
  if (typeof service.image === 'string' && service.image.trim()) return service.image
  return getServiceImage(service.slug, service.name)
}

export { SERVICE_IMAGE_BY_SLUG, FALLBACK_SERVICE_IMAGE }
