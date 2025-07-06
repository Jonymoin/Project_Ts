import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import ContactHero from "./ContactHero";
import OurServices from "./Oursevices";

import WashingMachineWorkGallery from "./WashingMachineWorkGallery ";
import Wm1 from "./Wm1";
import Experience from "./Experience";
import ReviewSection from "./ReviewCard";
import WashingMachineCleaning from "./WashingMachineCleaning";
import Hero3 from "./Hero3";
import ContactUs from "../../components/ContactUs";

const WashingMachine = () => {
  return (
    <>
      <Helmet>
        <title>Washing Machine Repair</title>
        <link rel="icon" href="/washing-icon1.png" />
        
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17068345803"></script>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17068345803');
            `
          }}
        ></script>
      </Helmet>

      {/* Rest of your page content */}
      <Wm1 />
      <Experience />
      <ContactHero />
      <WashingMachineCleaning />
      <WhyChooseUs />
      <OurServices />
      <Hero3 />

      <ContactUs />
      <ReviewSection />
      <WashingMachineWorkGallery />
      
    </>
  );
};

export default WashingMachine;
