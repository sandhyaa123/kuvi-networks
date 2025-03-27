import { useEffect } from "react";
import { 
    Hero,
    HowItWorks,
    Services,
    Testimonal,
    ContactUs,
    // ZohoContactForm,
    Faq,
    WhyUs
 } from "../components";
const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },[]);
  return (
    <div className="bg-white">
      <Hero />
      <HowItWorks />
      <Services />
      <WhyUs />
      <Testimonal />
      {/* <ZohoContactForm /> */}
      <ContactUs />
      <Faq />
    </div>
  );
};

export default Home;
