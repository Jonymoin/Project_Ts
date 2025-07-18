import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AboutUs from './components/AboutUs'
import ScrollToTop from './ScroolToTop'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsnCon from './components/TermsnCon'
import HeaderTop from './layouts/HeaderTop'


import WashingMachine from './pages/washingmachine/WashingMachine';
import Dishwasher from './pages/dishwasher/Dishwasher';
import Painting from './pages/painting/Painting'
import ServicePage from './components/ServicePage'
import Hero3 from './pages/washingmachine/Hero3'
import CallButton from './components/CallButton'
import WhyChooseUs from './pages/washingmachine/WhyChooseUs'
import ContactUs from './components/ContactUs'



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <HeaderTop />
      <Header />
         
      <Routes>
        <Route path='/' element={
          <>
        <Hero3 />
        <WhyChooseUs />
        <ContactUs />
      
          </>
        }/>
        
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service/painting' element={<Painting />} />
        <Route path='/service/dishwasher-repair' element={<Dishwasher />} />
        
        <Route path='/service/washing-machine' element={<WashingMachine />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/terms&conditions' element={<TermsnCon />} />
        <Route path='/:slug' element={<ServicePage />} />

      </Routes>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </Router>
  )
}

export default App