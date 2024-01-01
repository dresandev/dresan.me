import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from '~/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
