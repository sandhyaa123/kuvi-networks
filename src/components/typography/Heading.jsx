


const Heading = ({
     children,
     color= 'text-gray-800',
     styleCss,
     }) => (
        
    <p className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight  ${styleCss} ${color}`}>
   {children}
  </p>
);

export default Heading;
