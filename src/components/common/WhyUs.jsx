import React from "react";
import Heading from "../typography/Heading";
import LabelHeading from "../typography/labelHeading";
import Paragraph from "../typography/paragraph";
import { Link } from "react-router-dom";

const featuresData = [
  {
    icon: "🛠️",
    title: "Your own team",
    description:
      "Your dedicated team, working seamlessly under policies, salary guidelines, and cultural principles - defined by you",
  },
  {
    icon: "💰",
    title: "Cost-effective",
    description: "Build a skilled team in India at a fraction of the cost",
  },
  {
    icon: "🔍",
    title: "Transparency",
    description: "Direct communication with your team – no middlemen, no hidden costs",
  },
  {
    icon: "✅",
    title: "End-to-end management",
    description: "HR, finance, and admin – we handle everything, so you don't have to",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">{icon}</div>
    <LabelHeading color="text-gray-800">{title}</LabelHeading>
    <Paragraph>{description}</Paragraph>
  </div>
);

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto px-6 container">
        <div className="mx-auto text-center mb-16 max-w-3xl">
          <Heading>Why choose us?</Heading>
          <Paragraph>For exponential business growth and complete peace of mind</Paragraph>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-10">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <Link
          to="/why-us"
          className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:bg-indigo-700 hover:text-indigo-50 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 text-base font-medium text-indigo-900 shadow-md"
        >
          Know more
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;