import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PublicSector from './components/PublicSector'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CapabilityStatement from './components/CapabilityStatement'

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path || '/'
}

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
  if (!id) return
  document.getElementById(id)?.scrollIntoView()
}

function App() {
  const path = currentPath()
  const isCapability = path === '/capability-statement'

  useEffect(() => {
    if (isCapability || !window.location.hash) return undefined

    // The hash targets are rendered after this document loads, so the browser
    // scrolls before they exist. Scroll once they are in the page.
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    scrollToHash()
    const frame = window.requestAnimationFrame(scrollToHash)
    window.addEventListener('load', scrollToHash)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('load', scrollToHash)
      window.history.scrollRestoration = previous
    }
  }, [isCapability])

  return (
    <>
      <Navbar path={path} />
      <main id="main-content">
        {isCapability ? (
          <CapabilityStatement />
        ) : (
          <>
            <Hero />
            <Services />
            <PublicSector />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer path={path} />
    </>
  )
}

export default App
