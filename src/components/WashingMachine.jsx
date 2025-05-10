import { Helmet } from "react-helmet";
// if you exported as named export
import WhyChooseUs from "./WhyChooseUs";
import ContactHero from "./ContactHero";
import OurServices from "./Oursevices";
import ReviewSection from "./ReviewSection";
import WashingMachineWorkGallery from "./WashingMachineWorkGallery ";

import Wm1 from "./Wm1";


const WashingMachine = () => {
  return (
    <>
      <Helmet>
        <title>Washing Machine Repair</title>
        <link rel="icon" href="/washing-icon1.png" />
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17068345803">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17068345803');
</script>
      </Helmet>

      {/* Rest of your page content */}
      <Wm1 />
      <ContactHero />
      <WhyChooseUs />
      <OurServices />
      <WashingMachineWorkGallery />
      <ReviewSection />
    </>
  );
};

export default WashingMachine;
