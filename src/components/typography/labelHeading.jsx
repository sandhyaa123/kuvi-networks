

const LabelHeading = ({
     children,
     color= 'text-gray-600',
     styleCss,
     }) => (
        
   <p className={`text-xl font-bold mb-3 ${color} ${styleCss}`}>
    {children}
    </p>

);

export default LabelHeading;
