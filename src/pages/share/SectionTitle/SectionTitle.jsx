import { Fade } from "react-awesome-reveal";

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center  my-8">
            <div className="">
            <p className="text-purple-500 mb-2"> {subHeading}</p>
            <Fade className='text-gray-400 text-xl md:text-3xl font-bold uppercase border-y-4 py-4' delay={1e3} cascade damping={1e-1}>
            {heading}
    
 </Fade>
            </div>
        </div>
    );
};

export default SectionTitle;