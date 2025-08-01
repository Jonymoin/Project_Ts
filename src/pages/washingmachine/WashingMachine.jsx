import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import ContactHero from "./ContactHero";
import OurServices from "./Oursevices";

import Wm1 from "./Wm1";
import ReviewSection from "./ReviewCard";
import ContactUs from "../../components/ContactUs";

const WashingMachine = () => {
  return (
    <>
      <Helmet>
        <title>Washing Machine Repair</title>
        <link rel="icon" href="/washing-icon1.png" />
        <link rel="canonical" href="https://homerepairsg.com.sg/service/washing-machine" />
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
      <ContactHero />
      
      <WhyChooseUs />
      <OurServices />

      <ContactUs />
      <ReviewSection />
      
    </>
  );
};

export default WashingMachine;
