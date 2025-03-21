import React from 'react';

const Paragraph = ({ children, color = 'text-gray-600', styleCss }) => (
    <p className={`text-lg mb-8 ${color} ${styleCss}`}>
        {children}
    </p>
);

export default Paragraph;
