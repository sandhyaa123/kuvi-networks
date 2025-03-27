import React, { useState } from 'react';
import Heading from '../typography/Heading';
import { usePostHog } from 'posthog-js/react';
import { createContact } from '../../apis/contactUsApi';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
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

  const handleSubmit = async(e) => {
   try {
    e.preventDefault();
    await createContact(formData);

    // emailjs.send('service_19aphcn', 'template_f6j719q', templateParams, 'SL8MHqyHZZfP6QhQA')
    //   .then((response) => {
    //     console.log('Email sent successfully!', response.status, response.text);
    //     setSuccessMessage("Thank you! Your message has been sent successfully.");
    //     setFormData({
    //       name: '',
    //       email: '',
    //       company: '',
    //       message: '',
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Failed to send email. Error:', error);
    //     setSuccessMessage("Failed to send your message. Please try again later.");
    //   });
    posthog?.capture('contact_form_submitted');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      website: '',
      message: '',
          });
    setSuccessMessage("Thank you! Your message has been sent successfully.");

   }
   catch (error) {
    console.error('Error:', error);
  }
  };

  return (
    <section className="py-16 md:py-24 bg-indigo-50">
      test
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
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="firstName"
                    value={formData?.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="lastName"
                    value={formData?.lastName}
                    onChange={handleChange}
                  />
                  {/* <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  /> */}
                </div>
              </div>
            
              <div className="mb-6">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email
                </label>
                {/* <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                /> */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="email"
                    value={formData?.email}
                    onChange={handleChange}
                    required
                  /> 
              </div>
              <div className="md:grid-cols-2 mb-6 grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                    Company
                  </label>
                  <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                  id="company"
                  value={formData?.company}
                  onChange={handleChange}
                />
                </div>
                <div>
                  <label htmlFor="website" className="text-sm font-medium text-gray-700 mb-2 block">
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder="Enter your compnay website"
                    className="focus:border-indigo-700 focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                    id="website"
                    value={formData?.website}
                    onChange={handleChange}
                  />
                </div>
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
                  value={formData?.message}
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