import Footer from './Footer'
import FloatingActions from './FloatingActions'
import Navbar from './Navbar'

function PageLayout({ settings, children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
      <FloatingActions settings={settings} />
    </div>
  )
}

export default PageLayout
