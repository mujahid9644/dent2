import { Link } from 'react-router-dom'

import SEO from '../components/SEO'

function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you requested could not be found." path="/404" />
      <section className="px-4 py-24 text-center md:px-6">
        <h1 className="font-display text-5xl text-slate-900">404</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">Back to Home</Link>
      </section>
    </>
  )
}

export default NotFoundPage
