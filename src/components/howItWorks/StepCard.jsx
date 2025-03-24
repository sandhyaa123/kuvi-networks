import LabelHeading from "../typography/labelHeading";
import Paragraph from "../typography/paragraph";

const StepCard = ({ step, title, content, isRight }) => (
  <div className="md:grid md:grid-cols-2 md:gap-8 relative">
      {isRight && <div className="md:block hidden"></div>}
      <div className={`${isRight ? 'md:pl-12' : 'md:text-right md:pr-12'}`}>
        <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform  -translate-x-2.5 top-5 z-10  md:block hidden"></div>
        <div className={`bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 max-w-lg ${isRight ? '' : 'md:ml-auto'} `}>
          <LabelHeading color="text-gray-800">
        <span className="md:hidden mr-2">{step}.</span>
        {title}
      </LabelHeading>
      <Paragraph>{content}</Paragraph>
        </div>
      </div>
      {!isRight &&  <div className="md:hidden"></div>}
  </div>
);

export default StepCard;
