import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import SEO from '../components/SEO'
import { fetchBlogBySlug } from '../lib/api'
import { breadcrumbSchema } from '../utils/seo'

function BlogDetailsPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchBlogBySlug(slug).then(setPost)
  }, [slug])

  if (!post) {
    return <section className="px-4 py-16 text-center">Loading article...</section>
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${slug}`} schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${slug}` },
      ])} />

      <section className="px-4 py-16 md:px-6">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-display text-4xl text-slate-900">{post.title}</h1>
          <p className="mt-4 text-slate-700">{post.content}</p>
          <Link to="/blog" className="mt-8 inline-flex text-sm font-semibold text-[var(--color-primary)]">Back to Blog</Link>
        </article>
      </section>
    </>
  )
}

export default BlogDetailsPage
