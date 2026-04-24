import axios from 'axios'

import { brandConfig } from '../config/brandConfig'
import { blogPosts, doctorProfiles, faqs, galleryItems, serviceCatalog, testimonials } from '../data/siteContent'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api',
  timeout: 10000,
})

async function withFallback(request, fallback) {
  try {
    const response = await request()
    return response.data
  } catch {
    return fallback
  }
}

export const fetchSiteSettings = () =>
  withFallback(() => api.get('/settings/'), [{
    clinic_name: brandConfig.clinicName,
    short_clinic_name: brandConfig.shortClinicName,
    tagline: brandConfig.tagline,
    primary_color: brandConfig.primaryColor,
    secondary_color: brandConfig.secondaryColor,
    accent_color: brandConfig.accentColor,
    phone: brandConfig.contact.phone,
    whatsapp: brandConfig.contact.whatsapp,
    email: brandConfig.contact.email,
    address: brandConfig.contact.address,
    opening_hours: brandConfig.contact.openingHours,
    google_map_embed: brandConfig.contact.mapEmbedUrl,
    hero_title: brandConfig.hero.title,
    hero_subtitle: brandConfig.hero.subtitle,
    hero_cta_primary: brandConfig.ctaLabels.primary,
    hero_cta_secondary: brandConfig.ctaLabels.secondary,
    default_meta_title: brandConfig.seo.defaultTitle,
    default_meta_description: brandConfig.seo.defaultDescription,
  }])

export const fetchServices = () => withFallback(() => api.get('/services/'), serviceCatalog)
export const fetchServiceBySlug = (slug) => withFallback(() => api.get(`/services/${slug}/`), serviceCatalog.find((item) => item.slug === slug))
export const fetchDoctors = () => withFallback(() => api.get('/doctors/'), doctorProfiles)
export const fetchDoctorBySlug = (slug) => withFallback(() => api.get(`/doctors/${slug}/`), doctorProfiles.find((item) => item.slug === slug))
export const fetchTestimonials = () => withFallback(() => api.get('/testimonials/'), testimonials)
export const fetchGallery = () => withFallback(() => api.get('/gallery/'), galleryItems)
export const fetchFAQs = () => withFallback(() => api.get('/faqs/'), faqs)
export const fetchBlogs = () => withFallback(() => api.get('/blogs/'), blogPosts)
export const fetchBlogBySlug = (slug) => withFallback(() => api.get(`/blogs/${slug}/`), blogPosts.find((item) => item.slug === slug))

export const createAppointment = async (payload) => {
  const response = await api.post('/appointments/', payload)
  return response.data
}
