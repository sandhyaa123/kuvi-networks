

import React from 'react';
import Heading from "../typography/Heading";
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    rating: '⭐️⭐️⭐️⭐️⭐️',
    quote: "Building our development team in India was seamless thanks to their comprehensive support. The cost savings were significant without any compromise on talent quality.",
    name: 'Dylan Williams',
    title: 'Founder & CEO',
    company: 'WelcomeScreen Inc',
    image: 'https://placehold.co/100x100/indigo/white?text=CEO',
  },
  {
    rating: '⭐️⭐️⭐️⭐️⭐️',
    quote: "The level of control and transparency we have over our India team is phenomenal. They handled all the complexities while we maintained full oversight of our operations.",
    name: 'Ronak Savla',
    title: 'Founder & CEO',
    company: 'On The Record Inc',
    image: 'https://placehold.co/100x100/indigo/white?text=CEO',
  },
  {
    rating: '⭐️⭐️⭐️⭐️⭐️',
    quote: "Partnering with Kuvi Networks helped us scale our engineering team quickly and cost-effectively. Their transparency and management support allowed us to focus entirely on building our product.",
    name: 'Kailash Rathi',
    title: 'Founder & CEO',
    company: 'Ovik TechFin Pvt Ltd',
    image: 'https://placehold.co/100x100/indigo/white?text=CEO',
  },
];

const Testimonial = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="mx-auto px-4 container">
      <div className="text-center mb-16">
        <Heading>Trusted by founders</Heading>
        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8 ">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;