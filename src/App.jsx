import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AboutUs from './components/AboutUs'
import HeroLinks from './components/HeroLinks'
import ScrollToTop from './ScroolToTop'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsnCon from './components/TermsnCon'
import Landing from './pages/painting/Landing'
import HeaderTop from './layouts/HeaderTop'


import WashingMachine from './pages/washingmachine/WashingMachine';
import Painting from './pages/painting/Painting'



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <HeaderTop />
      <Header />
         
      <Routes>
        <Route path='/' element={
          <>
      <HeroLinks />
      <Landing />
     
          </>
        }/>
        
        <Route path='/about' element={<AboutUs />} />
        <Route path='/painting' element={<Painting />} />
        <Route path='/washing-machine' element={<WashingMachine />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/terms&conditions' element={<TermsnCon />} />
        
      </Routes>
      <Footer />

      <WhatsAppButton />
    </Router>
  )
}

export default App