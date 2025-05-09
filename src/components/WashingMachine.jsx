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
