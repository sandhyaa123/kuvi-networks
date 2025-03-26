import { useEffect } from 'react';
import HowItWorksHero from './HowItWorksHero';
import ProessSteps from './ProcessSteps';
import ProcessStandOut from './PocessStandOut';
import { LabelHeading, Paragraph } from '../../components';

const HowItWorksPage = () => {
    
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
   },[]);
    return (
        <div>
            <HowItWorksHero />
            <ProessSteps />
            <ProcessStandOut />
           <div className="mx-auto px-4 sm:px-6 lg:px-0 py-16 max-w-7xl">
           <div className="bg-indigo-50 rounded-2xl  text-center p-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-0 py-16 max-w-7xl">
            <LabelHeading styleCss={'text-gray-800'}> Experience the difference – Build your team with confidence</LabelHeading>
            <Paragraph> Join hundreds of businesses that have transformed their operations
            with our innovative approach.</Paragraph>
            <a
              href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-indigo-50 shadow-sm"
            >
              Schedule a call
            </a>
          </div>
        </div>
           </div>
        </div>
    )
}

export default HowItWorksPage;