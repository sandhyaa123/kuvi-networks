import React from 'react';

const TestimonialCard = ({ rating, quote, name, title, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
      <div className="text-yellow-400 mb-4">{rating}</div>
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      <div className="items-center flex">
        <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
          <img alt={name} src={image} />
        </div>
        <div>
          <p className="text-gray-800 font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{title} - {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;