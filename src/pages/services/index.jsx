import ServiceBanner from "./Banner";
import OurServices from "./ourServices";
import { Paragraph, LabelHeading } from "../../components";
import { useEffect } from "react";
import { usePostHog } from 'posthog-js/react';


const Services = () => {
    const posthog = usePostHog();

     useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },[]);
    return (
    <div className="pb-16">
        <ServiceBanner />
        <OurServices />
        <div className="bg-indigo-50 rounded-2xl mb-6 text-center p-10 mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:py-24 max-w-7xl">
        <div className="mx-auto max-w-4xl">
            <LabelHeading styleCss={'text-gray-800'}> Experience the difference – Build your team with confidence</LabelHeading>
            {/* <Paragraph> Join hundreds of businesses that have transformed their operations
            with our innovative approach.</Paragraph> */}
            <a
              href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-indigo-50 shadow-sm"
              onClick={() =>  posthog?.capture('our_services_page_schedule_call_clicked')}

           >
              Schedule a Call
            </a>
          </div>
        </div>
    </div>)
}

export default  Services;