


const Heading = ({
     children,
     color= 'text-gray-800',
     styleCss,
     }) => (
        
    <p className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight  ${styleCss} ${color}`}>
   {children}
  </p>
);

export default Heading;
