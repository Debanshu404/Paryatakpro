import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Error from './pages/Error'
import Contact from './pages/Contact'

// Animations
import 'animate.css'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    // Dynamically import WOW to avoid require issues
    import('wow.js').then(({ default: WOW }) => {
      const wowInstance = new WOW({ live: false })
      setTimeout(() => {
        wowInstance.init()
      }, 100)
    })
  }, [location.pathname])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/error" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
