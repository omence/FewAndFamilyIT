import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PublicSector from './components/PublicSector'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <PublicSector />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
