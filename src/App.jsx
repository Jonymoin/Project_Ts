import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Hero3 from './components/Hero3'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero4 from './components/Hero4'
import ServicePage from './components/ServicePage'
import HeroTop from './components/HeroTop'
import ContactUs from './components/ContactUs'
import Footer from './layouts/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AboutUs from './components/AboutUs'
import ScrollToTop from './ScroolToTop'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsnCon from './components/TermsnCon'
import HeaderTop from './layouts/HeaderTop'
import ReviewSection from './components/ReviewSection'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <HeaderTop />
      <Header />
         
      <Routes>
        <Route path='/' element={
          <>
          
      <Hero />
      <HeroTop />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <ReviewSection />
      <ContactUs />
     
          </>
        }/>
        
        <Route path='/about' element={<AboutUs />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/terms&conditions' element={<TermsnCon />} />
        
      </Routes>
      <Footer />

      <WhatsAppButton />
    </Router>
  )
}

export default App