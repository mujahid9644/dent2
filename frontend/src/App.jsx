import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import PageLayout from './components/layout/PageLayout'
import { brandConfig } from './config/brandConfig'
import { resolveServiceImageSource } from './config/serviceImages'
import { blogPosts, doctorProfiles, faqs, galleryItems, serviceCatalog, testimonials as fallbackTestimonials } from './data/siteContent'
import { fetchBlogs, fetchDoctors, fetchFAQs, fetchGallery, fetchServices, fetchSiteSettings, fetchTestimonials } from './lib/api'
import AboutPage from './pages/AboutPage'
import AppointmentPage from './pages/AppointmentPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import DoctorDetailsPage from './pages/DoctorDetailsPage'
import DoctorsPage from './pages/DoctorsPage'
import FAQPage from './pages/FAQPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import ServicesPage from './pages/ServicesPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import TestimonialsPage from './pages/TestimonialsPage'

const defaultSettings = {
  clinicName: brandConfig.clinicName,
  shortClinicName: brandConfig.shortClinicName,
  tagline: brandConfig.tagline,
  phone: brandConfig.contact.phone,
  whatsapp: brandConfig.contact.whatsapp,
  email: brandConfig.contact.email,
  address: brandConfig.contact.address,
  openingHours: brandConfig.contact.openingHours,
  mapEmbedUrl: brandConfig.contact.mapEmbedUrl,
  socialLinks: brandConfig.socialLinks,
  heroTitle: brandConfig.hero.title,
  heroSubtitle: brandConfig.hero.subtitle,
  ctaPrimary: brandConfig.ctaLabels.primary,
  ctaSecondary: brandConfig.ctaLabels.secondary,
  defaultMetaTitle: brandConfig.seo.defaultTitle,
  defaultMetaDescription: brandConfig.seo.defaultDescription,
  primaryColor: brandConfig.primaryColor,
  secondaryColor: brandConfig.secondaryColor,
  accentColor: brandConfig.accentColor,
}

function normalizeServiceRecord(service) {
  const title = service?.title || service?.name || ''
  const slug = service?.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const normalized = {
    ...service,
    title,
    name: service?.name || title,
    slug,
  }

  return {
    ...normalized,
    image: service?.image || resolveServiceImageSource(normalized),
  }
}

function App() {
  const [settings, setSettings] = useState(defaultSettings)
  const [services, setServices] = useState(serviceCatalog)
  const [doctors, setDoctors] = useState(doctorProfiles)
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [gallery, setGallery] = useState(galleryItems)
  const [faqItems, setFaqItems] = useState(faqs)
  const [blogs, setBlogs] = useState(blogPosts)

  useEffect(() => {
    fetchSiteSettings().then((records) => {
      if (!records?.length) {
        return
      }
      const first = records[0]
      setSettings((prev) => ({
        ...prev,
        clinicName: first.clinic_name || prev.clinicName,
        shortClinicName: first.short_clinic_name || prev.shortClinicName,
        tagline: first.tagline || prev.tagline,
        phone: first.phone || prev.phone,
        whatsapp: first.whatsapp || prev.whatsapp,
        email: first.email || prev.email,
        address: first.address || prev.address,
        openingHours: first.opening_hours || prev.openingHours,
        mapEmbedUrl: first.google_map_embed || prev.mapEmbedUrl,
        socialLinks: prev.socialLinks,
        heroTitle: first.hero_title || prev.heroTitle,
        heroSubtitle: first.hero_subtitle || prev.heroSubtitle,
        ctaPrimary: first.hero_cta_primary || prev.ctaPrimary,
        ctaSecondary: first.hero_cta_secondary || prev.ctaSecondary,
        defaultMetaTitle: first.default_meta_title || prev.defaultMetaTitle,
        defaultMetaDescription: first.default_meta_description || prev.defaultMetaDescription,
        primaryColor: first.primary_color || prev.primaryColor,
        secondaryColor: first.secondary_color || prev.secondaryColor,
        accentColor: first.accent_color || prev.accentColor,
      }))
    })

    fetchServices().then((items) => setServices((items || []).map(normalizeServiceRecord)))
    fetchDoctors().then(setDoctors)
    fetchTestimonials().then(setTestimonials)
    fetchGallery().then(setGallery)
    fetchFAQs().then(setFaqItems)
    fetchBlogs().then(setBlogs)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', settings.primaryColor)
    document.documentElement.style.setProperty('--color-secondary', settings.secondaryColor)
    document.documentElement.style.setProperty('--color-accent', settings.accentColor)
  }, [settings.primaryColor, settings.secondaryColor, settings.accentColor])

  const sharedProps = useMemo(
    () => ({ settings, services, doctors, testimonials, gallery, blogs, faqs: faqItems }),
    [settings, services, doctors, testimonials, gallery, blogs, faqItems],
  )

  return (
    <PageLayout settings={settings}>
      <Routes>
        <Route path="/" element={<HomePage {...sharedProps} />} />
        <Route path="/about" element={<AboutPage settings={settings} />} />
        <Route path="/services" element={<ServicesPage settings={settings} services={services} />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage settings={settings} services={services} />} />
        <Route path="/doctors" element={<DoctorsPage settings={settings} doctors={doctors} />} />
        <Route path="/doctors/:slug" element={<DoctorDetailsPage settings={settings} />} />
        <Route path="/gallery" element={<GalleryPage gallery={gallery} />} />
        <Route path="/testimonials" element={<TestimonialsPage testimonials={testimonials} />} />
        <Route path="/blog" element={<BlogPage blogs={blogs} />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/faq" element={<FAQPage faqs={faqItems} />} />
        <Route path="/contact" element={<ContactPage settings={settings} />} />
        <Route path="/appointment" element={<AppointmentPage settings={settings} services={services} doctors={doctors} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage settings={settings} />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage settings={settings} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
