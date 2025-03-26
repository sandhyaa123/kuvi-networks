import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Heading from '../typography/Heading';
import { usePostHog } from 'posthog-js/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const posthog = usePostHog();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, company, message } = formData;

    const templateParams = {
      title: 'Kuvi Networks',
      from_name: name,
      from_email: email,
      company: company,
      message: message,
    };

    emailjs.send('service_19aphcn', 'template_f6j719q', templateParams, 'SL8MHqyHZZfP6QhQA')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccessMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
        posthog?.capture('contact_form_submitted');
      })
      .catch((error) => {
        console.error('Failed to send email. Error:', error);
        setSuccessMessage("Failed to send your message. Please try again later.");
      });
  };

  return (
    <section className="py-16 md:py-24 bg-indigo-50">
      <div className="mx-auto px-4 container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heading>Experience the difference - Build your team with confidence</Heading>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8">
            {successMessage && (
              <div className="mb-4 text-green-600 text-center">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="md:grid-cols-2 mb-6 grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  className="text-black bg-gray-100 font-normal w-full h-32 text-xs rounded-md shadow-sm focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transition duration-300 justify-center rounded-md py-3 px-8 bg-indigo-600 text-sm font-medium text-white shadow-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;