import { useState } from 'react'
import { useReveal } from './hooks'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueStrip from './components/ValueStrip'
import Welcome from './components/Welcome'
import Services from './components/Services'
import Spotlight from './components/Spotlight'
import Results from './components/Results'
import Membership from './components/Membership'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import BookingModal from './components/BookingModal'
import LegalModal from './components/LegalModal'

export default function App() {
  const ref = useReveal()
  const [booking, setBooking] = useState(false)
  const [legal, setLegal] = useState(null)
  const openBooking = () => setBooking(true)

  return (
    <div ref={ref} style={{ overflowX: 'hidden' }}>
      <Header onBook={openBooking} />
      <Hero onBook={openBooking} />
      <ValueStrip />
      <Welcome />
      <Services />
      <Spotlight />
      <Results />
      <Membership />
      <Journey />
      <Testimonials />
      <Gallery />
      <Footer onBook={openBooking} onLegal={setLegal} />

      <BottomNav onBook={openBooking} />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
      <LegalModal doc={legal} onClose={() => setLegal(null)} onSwitch={setLegal} />
    </div>
  )
}
