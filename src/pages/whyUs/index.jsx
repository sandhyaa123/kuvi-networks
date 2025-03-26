import { useEffect } from "react";
import { LabelHeading, Paragraph } from "../../components";
import WhyUsHero from "./WhyUsHero";
import KeyDifferentiator from "./KeyDifferentiator";
import WhyUsTable from "./WhyUsTable";
import { usePostHog } from 'posthog-js/react';

const WhyChooseUs = () => {
  const posthog = usePostHog();


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="bg-white min-h-screen w-screen">
      <section className="mx-auto px-4 sm:px-6 lg:px-0 py-16 max-w-7xl">
        <WhyUsHero />
       <KeyDifferentiator />
        <WhyUsTable />
        <div className="bg-indigo-50 rounded-2xl mb-24 text-center p-10">
          <div className="mx-auto max-w-4xl">
            <LabelHeading styleCss={'text-gray-800'}> Experience the difference – Build your team with confidence</LabelHeading>
            <Paragraph> Join hundreds of businesses that have transformed their operations
            with our innovative approach.</Paragraph>
            <a
              href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-indigo-50 shadow-sm"
              onClick={() =>  posthog?.capture('why_us_page_schedule_call_clicked')}
          
            >
              Schedule a call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
