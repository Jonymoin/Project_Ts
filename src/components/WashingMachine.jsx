import { Helmet } from "react-helmet";
// if you exported as named export
import WhyChooseUs from "./WhyChooseUs";
import ContactHero from "./ContactHero";
import WashHero1 from "./washHero1";
import OurServices from "./Oursevices";
import ReviewSection from "./ReviewSection";
import WashingMachineWorkGallery from "./WashingMachineWorkGallery ";


const WashingMachine = () => {
  return (
    <>
      <Helmet>
        <title>Washing Machine Repair</title>
        <link rel="icon" href="/washing-icon.png" />
      </Helmet>

      {/* Rest of your page content */}
      <WashHero1 />
      <ContactHero />
      <WhyChooseUs />
      <OurServices />
      <WashingMachineWorkGallery />
      <ReviewSection />
    </>
  );
};

export default WashingMachine;
