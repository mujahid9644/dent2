import { Link } from 'react-router-dom'

import SEO from '../components/SEO'
import SectionHeader from '../components/ui/SectionHeader'
import { breadcrumbSchema } from '../utils/seo'

function BlogPage({ blogs }) {
  return (
    <>
      <SEO
        title="Dental Blog | Oral Health Tips in Dhaka"
        description="Expert blog guides on braces, implants, root canal treatment, emergency care, and preventive oral health for Dhaka patients."
        path="/blog"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Dental Blog" title="Actionable oral health insights" />
          <div className="space-y-5">
            {blogs.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-display text-3xl text-slate-900">{post.title}</h2>
                <p className="mt-3 text-slate-600">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)] hover:underline">
                  Read Full Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
