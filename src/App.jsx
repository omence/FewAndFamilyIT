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

function App() {
  const path = currentPath()
  const isCapability = path === '/capability-statement'

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
