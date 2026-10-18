import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
