import ScrollProgress from './components/ui/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'
import Showcase from './components/sections/Showcase'
import Categories from './components/sections/Categories'
import HowItWorks from './components/sections/HowItWorks'
import Comparison from './components/sections/Comparison'
import Testimonials from './components/sections/Testimonials'
import Download from './components/sections/Download'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <section id="features">
          <Features />
        </section>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="categories">
          <Categories />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="compare">
          <Comparison />
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        <section id="download">
          <Download />
        </section>
      </main>
      <Footer />
    </>
  )
}
