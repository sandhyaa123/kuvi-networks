import { LabelHeading, Paragraph } from "../../components";

const differentiatorsData = [
  {
    id: 1,
    emoji: "🛠️",
    title: "Your own team",
    description: "You dictate policies, salary structures, and hikes.",
  },
  {
    id: 2,
    emoji: "🔍",
    title: "Transparency",
    description: "Direct access and communication with your team.",
  },
  {
    id: 3,
    emoji: "💰",
    title: "Cost-effectiveness",
    description: "Save on HR, finance, and admin costs.",
  },
  {
    id: 4,
    emoji: "🔥",
    title: "End-to-end management",
    description: "We handle everything beyond product building.",
  },
  {
    id: 5,
    emoji: "📈",
    title: "Scalable & flexible",
    description: "Expand or reduce your team with ease.",
  },
];

const DifferentiatorCard = ({ emoji, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-indigo-600">
    <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <span className="text-3xl">{emoji}</span>
    </div>
    <LabelHeading styleCss="text-gray-800 text-center">{title}</LabelHeading>
    <Paragraph styleCss="text-center">{description}</Paragraph>
  </div>
);

const KeyDifferentiator = () => {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <LabelHeading styleCss="text-gray-800 text-center">
          ⚡ Our key differentiators
        </LabelHeading>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-5 grid grid-cols-1 gap-8">
        {differentiatorsData.map(({ id, emoji, title, description }) => (
          <DifferentiatorCard
            key={id}
            emoji={emoji}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyDifferentiator;