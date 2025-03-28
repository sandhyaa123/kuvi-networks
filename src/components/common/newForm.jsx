import React, { useEffect, useRef } from 'react';
import Heading from '../typography/Heading';

const RefrensContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Load the Refrens script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.refrens.com/venus/venera.1.4.3.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-indigo-50">
    <div className="mx-auto px-4 container">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Heading>Experience the difference - Build your team with confidence</Heading>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
           <div
          ref={formRef}
          className="refrens-contact-form refrens-contact-form--boxed"
          data-url-key="kuvi-networks"
          data-form-key="67e6418de973e00020596db0"
          data-render-type="inline"
        />
        
        </div>
      </div>
    </div>
    
    </section>
  );
};

export default RefrensContactForm;


