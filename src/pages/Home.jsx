import { useEffect } from "react";
import { 
    Hero,
    HowItWorks,
    Services,
    Testimonal,
    ContactUs,
    Faq,
    Heading,
    LabelHeading,
    Paragraph
 } from "../components";

import { Link } from "react-router-dom";
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
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-6 container">
          <div className="mx-auto text-center mb-16 max-w-3xl">
            {/* <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </p> */}
            <Heading>Why choose us?</Heading>
            <Paragraph>For exponential business growth and complete peace of mind</Paragraph>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-10">
  
  {/* Full Control */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
   {/* change this icon */}
    <div className="text-5xl text-indigo-600 mb-4">🛠️</div> 
    <LabelHeading color="text-gray-800">Your own team</LabelHeading>
    <Paragraph>Your dedicated team, working seamlessly under policies, salary guidelines, and cultural principles - defined by you</Paragraph>
  </div>

  {/* Cost-Effective */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">💰</div>
    <LabelHeading color="text-gray-800">Cost-effective</LabelHeading>
    <Paragraph>Build a skilled team in India at a fraction of the cost</Paragraph>
  </div>

  {/* Transparency */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">🔍</div>
    <LabelHeading color="text-gray-800">Transparency</LabelHeading>
    <Paragraph>Direct communication with your team – no middlemen, no hidden costs.</Paragraph>
  </div>

  {/* End-to-End Management */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">✅</div>
    <LabelHeading color="text-gray-800">End-to-end management</LabelHeading>
    <Paragraph>HR, finance, and admin – we handle everything, so you don't have to.</Paragraph>
  </div>

</div>

        </div>
        <div className="w-full flex items-center justify-center mt-8">
        <Link 
            to="/why-us" 
            className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:bg-indigo-700 hover:text-indigo-50 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8  text-base font-medium text-indigo-900 shadow-md"
            >
            Know more
          </Link>
        </div>
      </section>
      <Testimonal />
      <ContactUs />
      <Faq />
    </div>
  );
};

export default Home;
