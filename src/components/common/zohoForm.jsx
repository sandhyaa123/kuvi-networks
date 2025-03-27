import React, { useEffect, useRef } from 'react';
import Heading from '../typography/Heading';

const ZohoContactForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    console.log('iframeRef useeffect', iframeRef, iframeRef.current);
    const handleResize = (event) => {
        
      if (event.data && typeof event.data === 'string') {
        const iframeData = event.data.split('|');

        if (iframeData.length >= 2) {
          const formId = iframeData[0];
          const newHeight = `${parseInt(iframeData[1], 10) + 15}px`;

          if (iframeRef.current && iframeRef.current.src.includes(formId)) {
            iframeRef.current.style.height = newHeight;

            // Scroll into view for better UX
            if (iframeData.length === 3) {
              iframeRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }
    };

    window.addEventListener('message', handleResize);
    

    return () => {
      window.removeEventListener('message', handleResize);
    };
  }, []);

  console.log('iframeRef', iframeRef, iframeRef.current);

  return (
<section className="py-16 md:py-12 bg-indigo-50">
<div className="mx-auto px-4 container">
  <div className="mx-auto max-w-4xl">
    <div className="text-center mb-12">
      <Heading>Experience the difference - Build your team with confidence</Heading>
      <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
    </div>
    <iframe
    ref={iframeRef}
  src="https://forms.zohopublic.in/sandhyakumari3122003gm1/form/contactus/formperma/YkDa60_071_GEk7KQ4ebHzJujkpQFjxiH2-uVMcrP0A"
  title="Contact Us"
  frameBorder="0"
  style={{ width: '100%', height: '1112px', border: 'none', transition: 'all 0.5s ease' }}
  aria-label="Contact Us"
/>
<iframe

       src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__5PbB1xUNVJJNVExWVRJODFETFA2VUhQVUVQNDdIVy4u&embed=true" 
       title="Contact Us"
       frameBorder="0"
       style={{ width: '100%', height: '93rem', border: 'none', transition: 'all 0.5s ease' }}
       aria-label="Contact Us"
          > </iframe>
  </div>
</div>

</section>
  );
};

export default ZohoContactForm;
