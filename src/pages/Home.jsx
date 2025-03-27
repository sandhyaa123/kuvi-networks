import { useEffect } from "react";
import { 
    Hero,
    HowItWorks,
    Services,
    Testimonal,
    ContactUs,
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
      <ContactUs />
      <Faq />
    </div>
  );
};

export default Home;
