import { Heading, Paragraph } from "../../components";
import joinusImage from "../../assets/images/joinus.jpeg";

const JoinUsHero = () => {
  
    return (
        <div className="bg-indigo-600 text-white relative">
  <div className="absolute inset-0 z-0">
    <img
     alt="Diverse professionals collaborating"
    src={joinusImage}
     className="object-cover opacity-30 w-full h-full" />
  </div>
  <div className="mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 container">
    <div className="mx-auto text-center max-w-3xl">
          <Heading styleCss={'text-white'}>Unlock your next career opportunity with top
          companies</Heading>
          <Paragraph styleCss={'text-white'}>We connect talented professionals like you with leading companies, giving you
          direct access, full transparency, and growth opportunities.</Paragraph>
     
    </div>
  </div>
</div>
    )
}

export default JoinUsHero;