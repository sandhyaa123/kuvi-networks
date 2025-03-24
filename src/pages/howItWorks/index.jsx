import { useEffect } from 'react';
import HowItWorksHero from './HowItWorksHero';
import ProessSteps from './ProcessSteps';
import ProcessStandOut from './PocessStandOut';

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
    
        </div>
    )
}

export default HowItWorksPage;