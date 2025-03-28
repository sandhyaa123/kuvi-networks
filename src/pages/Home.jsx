import { useEffect } from "react";
import { 
    Hero,
    HowItWorks,
    Services,
    Testimonal,
    // ContactUs,
    Faq,
    WhyUs,
    RefrensContactForm
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
      {/* <ContactUs /> */}
      <RefrensContactForm />
      <Faq />
    </div>
  );
};

export default Home;
