import Image from "next/image";
import { FaCamera } from "react-icons/fa";

const TutorData = [
  {
    id: "3456",
    qualification: "HSC/BSC",
    expertise: "02 years",
    gendar: "Male",
    distance: "05 km",
  },
];

const ViewSidebarProfile = () => {
  return (
    <div className=" w-64  border border-quaternary4 bg-white rounded-lg shadow-md ">
      <div className=" w-34 h-34 mx-auto mt-5 border rounded-full relative ">
        <Image
          className="w-34 h-34 rounded-full"
          src="/MyImg.jpg"
          width={136}
          height={136}
          alt="Picture of the author"
        />
        <FaCamera className=" mx-auto text-3xl absolute bottom-0 left-14 " />
      </div>
      <div className="font-DMSans font-bold text-primary1 text-2xl text-center mt-5 px-2">
        <h2>Shefaitur Rahman</h2>
        <h2> (TS-126841)</h2>
      </div>
      <div>
        {TutorData.map((tutor, index) => (
          <div className="mt-10" key={tutor.id}>
            <div className="flex font-DMSans font-normal text-primary1 text-lg px-5 py-2  border-b border-quaternary4">
              <p className="w-34 font-semibold">ID</p>
              <p>{tutor.id}</p>
            </div>
            <div className=" flex items-center  font-DMSans font-normal text-primary1 text-lg px-5 py-2  border-b border-quaternary4">
              <p className=" w-34 font-semibold">Qualification</p>{" "}
              <p> {tutor.qualification}</p>
             
            </div>
            <div className=" flex items-center  font-DMSans font-normal text-primary1 text-lg px-5 py-2  border-b border-quaternary4">
              <p className="w-34 font-semibold">Expertise</p>{" "}
            <p>  {tutor.expertise}</p>
            </div>
            <div className=" flex items-center  font-DMSans font-normal text-primary1 text-lg px-5 py-2  border-b border-quaternary4">
              <p className="w-34 font-semibold">Gendar</p> 
              <p>{tutor.gendar}</p>
            </div>
            <div className=" flex items-center  font-DMSans font-normal text-primary1 text-lg px-5 py-2  border-b border-quaternary4">
              <p className="w-34 font-semibold">Distance</p>{" "}
           <p>   {tutor.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSidebarProfile;
