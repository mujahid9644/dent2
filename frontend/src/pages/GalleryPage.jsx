import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { breadcrumbSchema } from '../utils/seo'

function GalleryPage({ gallery }) {
  return (
    <>
      <SEO
        title="Dental Clinic Gallery in Dhaka"
        description="Explore clinic interiors, treatment facilities, and patient-centered spaces from our premium dental setup in Dhaka."
        path="/gallery"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ])}
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Gallery" title="Inside our modern dental clinic" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((image) => (
              <figure key={image.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={image.image} alt={image.alt_text} loading="lazy" className="h-72 w-full object-cover" />
                <figcaption className="p-4 text-sm text-slate-600">{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPage
