import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes you different from other team-building agencies?",
      answer:
        "We offer full transparency, control, and direct access to your team with no hidden costs.",
    },
    {
      question: "How do you ensure transparency and full control?",
      answer:
        "You manage policies, salary structures, and team dynamics while we handle operations.",
    },
    {
      question: "Can I choose my own team members?",
      answer: "Yes, you have the final say in team selection.",
    },
    {
      question: "Do you handle legal compliance and payroll?",
      answer:
        "Absolutely. We manage all legal, financial, and administrative aspects.",
    },
    {
      question: "How do I scale my team up or down?",
      answer:
        "Our flexible model allows you to expand or reduce your team easily based on your needs.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-4 container w-full">
        <div className="text-center mb-16">
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </p>
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
