import React, { useState } from "react";
import Heading from "../typography/Heading";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How are you different than outsourcing agencies?",
      answer:
        "You get your own team with your policies and control. We charge a fixed monthly service fee, while all other costs, including team salaries, are transparently passed on to you without any markup.",
    },
    {
      question: "Can you set up other teams as well?",
      answer:
        "Yes, we can assist you in setting up sales, marketing, customer success, operations, or any other team based on your specific requirements.",
    },
    {
      question: "How is your service fee structured?",
      answer:
        "Our monthly service fee is structured based on the size of your team.",
    },
    {
      question: "How do you ensure transparency and full control?",
      answer:
        "We include you in offer letter communications with candidates. Likewise, all other factors (e.g., laptop, office space) are discussed and agreed upon with you in advance.",
    },
    {
      question: "Can I choose my own team members?",
      answer: "Absolutely, you have the final say in team selection.",
    },
    {
      question: "Do you handle legal compliance and payroll?",
      answer:
        "Yes, we manage all legal, financial, and administrative aspects.",
    },
    {
      question: "How do I scale my team up or down?",
      answer:
        "Our flexible model allows you to expand or reduce your team easily based on your needs.",
    },
    {
      question: "Do I need to register my company in India?",
      answer:
        "If your company is already registered in India, we assist with the setup process. If not, we are here to help you with company registration and all necessary formalities.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-4 container w-full">
        <div className="text-center mb-16">
          <Heading> Frequently asked questions</Heading>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="group">
                  <div
                    className="items-center justify-between bg-white flex p-6 cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <p className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </p>
                    <span className="ml-6 text-indigo-600 flex-shrink-0">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="p-6 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
