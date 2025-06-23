"use client"
import { FaGraduationCap } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
type HeadProfileProps = {
  activeSection: string;
  onSectionChange: (section: string) => void;
};
const sections = [
  { key: "education", icon: <FaGraduationCap className="text-5xl mx-auto" />, label: "Educational info" },
  { key: "tuition", icon: <GiTeacher className="text-5xl mx-auto" />, label: "Tuition-info" },
  { key: "personal", icon: <BsFillPersonVcardFill className="text-5xl mx-auto" />, label: "Personal-info" },
];
const HeadProfile = ({ activeSection, onSectionChange }: HeadProfileProps) => {
  return (
        <div>
      <div className="grid grid-cols-3 gap-4">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => onSectionChange(section.key)}
            className={`border border-primary1 py-2.5 px-20 rounded-lg shadow-md transition-colors duration-200
              ${activeSection === section.key ? "bg-primary1 text-white" : "bg-quaternary4"}
            `}
          >
            {section.icon}
            <p className="font-DMSans font-medium text-base text-center mt-1.5">
              {section.label}
            </p>
          </button>
        ))}
      </div>
    </div>

//    <div>
//      <div className="grid grid-cols-3 gap-4 ">
//         <div className='border border-primary1 bg-quaternary4  py-2.5  px-20 rounded-lg shadow-md'>
//             <FaGraduationCap className=" text-5xl  mx-auto"/>
//             <p className="font-DMSans font-medium text-base text-center mt-1.5">Educational info</p>
//         </div>
//         <div className='border border-primary1 bg-quaternary4  py-2.5  px-20 rounded-lg shadow-md'>
//             <GiTeacher className=" text-5xl  mx-auto"/>
//             <p className="font-DMSans font-medium text-base text-center mt-1.5">Tuition-info</p>
//         </div>
//         <div className='border border-primary1 bg-quaternary4  py-2.5  px-20 rounded-lg shadow-md'>
//             <BsFillPersonVcardFill className=" text-5xl  mx-auto"/>
//             <p className="font-DMSans font-medium text-base text-center mt-1.5">Personal-info</p>
//         </div>
//     </div>
//    </div>
  )
}

export default HeadProfile