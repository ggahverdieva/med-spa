import Hero from '../components/Hero'
import ValueStrip from '../components/ValueStrip'
import Welcome from '../components/Welcome'
import Services from '../components/Services'
import Spotlight from '../components/Spotlight'
import Results from '../components/Results'
import Membership from '../components/Membership'
import Journey from '../components/Journey'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'

export default function Home({ onBook }) {
  return (
    <>
      <Hero onBook={onBook} />
      <ValueStrip />
      <Welcome />
      <Services />
      <Spotlight />
      <Results />
      <Membership />
      <Journey />
      <Testimonials />
      <Gallery />
    </>
  )
}
