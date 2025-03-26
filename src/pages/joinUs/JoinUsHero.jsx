import { Heading, Paragraph } from "../../components";
import joinusImage from "../../assets/images/joinus.jpeg";
import { usePostHog } from 'posthog-js/react';

const JoinUsHero = () => {
      const posthog = usePostHog();
  
    return (
        <div className="bg-indigo-600 text-white relative">
  <div className="absolute inset-0 z-0">
    <img
     alt="Diverse professionals collaborating"
    src={joinusImage}
     className="object-cover opacity-30 w-full h-full" />
  </div>
  <div className="mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 container">
    <div className="mx-auto text-center max-w-3xl">
          <Heading styleCss={'text-white'}>Unlock your next career opportunity with top
          companies</Heading>
          <Paragraph styleCss={'text-white'}>We connect talented professionals like you with leading companies, giving you
          direct access, full transparency, and growth opportunities.</Paragraph>
      <a 
            href="https://forms.gle/sh68Te2Z5ZtoFsgt6" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
            focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-50 transition duration-300 justify-center
            rounded-md py-3 px-6 bg-white text-indigo-700 text-lg font-medium shadow-lg"
            onClick={() =>  posthog?.capture('join_us_page_apply_now_clicked')}
          
          >
           Apply Now
          </a>
    </div>
  </div>
</div>
    )
}

export default JoinUsHero;