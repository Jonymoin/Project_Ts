import React from 'react'
import { Helmet } from "react-helmet";

import Hero from './Hero'
import HeroTop from './HeroTop'
import Hero2 from './Hero2'
import Service from './Service'
import Difference from './Difference'
import Accordion from './Accordion'
import OurProcess from './OurProcess'
import Hero4 from './Hero4'
import ContactUs from './ContactUs'
import Landing from './Landing'


const Painting = () => {
  return (
    <>
    <Helmet>
        <title>Proffesional Painting service</title>
        <link rel="icon" href="/washing-icon1.png" />
    </Helmet>

              <Hero />
              <HeroTop />
              <Hero2 />
              <Service />
              <Difference />
              <Accordion />
              <OurProcess />
              <Landing />
              <Hero4 />
              
              <ContactUs />

    </>
  )
}

export default Painting