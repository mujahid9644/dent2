const SERVICE_IMAGE_BY_SLUG = {
  'dental-checkup':
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
  'teeth-cleaning':
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
  'scaling-polishing':
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
  'root-canal-treatment':
    'https://smileandmove.co.uk/wp-content/uploads/2022/03/root-canal-treatment-thumb.jpg',
  'tooth-extraction':
    'https://th.bing.com/th/id/OIP.rhEebSWOweL4zwkbZS5ZRAHaE8?w=226&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  'dental-filling':
    'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80',
  'dental-crown-bridge':
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
  'dental-implant':
    'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1400&q=80',
  'orthodontics-braces':
    'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=80',
  'clear-aligners':
    'https://res.cloudinary.com/dw8r48tmq/image/upload/v1774543165/cld-sample.jpg',
  'teeth-whitening':
    'https://images.apollo247.in/pd-cms/cms/2023-07/Shutterstock_1450907246.jpg',
  'cosmetic-dentistry':
    'https://th.bing.com/th/id/OIP.mB0gjK8TQKTU5KJuwi_VtAHaDF?w=347&h=145&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  'pediatric-dentistry':
    'https://th.bing.com/th/id/R.ce6c1080a71439b649bd45eaec4e88d4?rik=i7Z3geCquOJ0fw&pid=ImgRaw&r=0',
  'gum-treatment':
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
  'wisdom-tooth-surgery':
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80',
  'smile-makeover':
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
}

const FALLBACK_SERVICE_IMAGE =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80'

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

export { SERVICE_IMAGE_BY_SLUG, FALLBACK_SERVICE_IMAGE }
