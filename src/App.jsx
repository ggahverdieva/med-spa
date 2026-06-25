import { useState } from 'react'
import { useReveal } from './hooks'
import { usePath } from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import BookingModal from './components/BookingModal'
import LegalModal from './components/LegalModal'
import Home from './pages/Home'
import WeightLoss from './pages/WeightLoss'

export default function App() {
  const path = usePath()
  const ref = useReveal(path)
  const [booking, setBooking] = useState(false)
  const [legal, setLegal] = useState(null)
  const openBooking = () => setBooking(true)

  // overflow-x: clip (not hidden) contains the decorative glows without
  // creating a scroll container — which would disable position: sticky
  return (
    <div ref={ref} style={{ overflowX: 'clip' }}>
      <Header onBook={openBooking} />

      {path === '/medical-weight-loss'
        ? <WeightLoss onBook={openBooking} />
        : <Home onBook={openBooking} />}

      <Footer onBook={openBooking} onLegal={setLegal} />

      <BottomNav onBook={openBooking} />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
      <LegalModal doc={legal} onClose={() => setLegal(null)} onSwitch={setLegal} />
    </div>
  )
}
