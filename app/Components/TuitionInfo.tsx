
import TimeSlotSelector from "./TimeSlotSelector";
import SelectTag from "./SelectTag";
import { MdAddBox } from "react-icons/md";

const TuitionInfo = () => {

  
  return (
    <div className=" mt-8">
     
      
      <div className="w-48">
        <h1 className=" font-DMSans font-semibold text-2xl  border-b-2 border-quaternary4">
          {" "}
          Tuition Info
        </h1>
        <h2 className=" font-DMSans font-normal text-xl mt-1.5">
          Update your profile
        </h2>
      </div>
      <div className=" mt-5 border border-quaternary4 p-12 flex justify-between ">
        <div className=" w-2/5 ">
        <div className="flex flex-col gap-2 mb-10">
            <TimeSlotSelector />
            <p className="text-xl mx-auto"><MdAddBox/></p>
          </div>
          <div className="  mb-16">
            <p className=" font-DMSans font-normal text-xl mb-5 border-b-2 border-quaternary4">
              Tuition Area
            </p>
            <div className="relative ">
              <input
                type="range"
                min={0}
                max={100}
                className="range  range-neutral"
              />
              <p className=" border-2 border-quaternary4 py-1 px-2 absolute top-8 left-0">5km</p>
            </div>

            {/* <input type="range" min={0} max="100" value="40" className="range range-neutral" /> */}
          </div>
          <div className="  mb-16">
            <p className=" font-DMSans font-normal text-xl  mb-5 border-b-2 border-quaternary4">
              Preferred Classes
            </p>
            <div className="relative ">
               <input
              type="range"
              min={1}
              max={100}
              className="range  range-neutral"
            />
            
              <p className=" border-2 border-quaternary4 py-1 px-2 absolute top-8 left-0">Class: 01</p>
              <p className=" border-2 border-quaternary4 py-1 px-2 absolute top-8 right-0">Class: 08</p>
            </div>
           
          </div>
          <div className="  mb-16">
            <p className=" font-DMSans font-normal text-xl  mb-5 border-b-2 border-quaternary4">
               Expected Salary:
            </p>
            <div className="relative ">
               <input
              type="range"
              min={1}
              max={100}
              className="range  range-neutral"
            />
            
              <p className=" border-2 border-quaternary4 py-1 px-5 absolute top-8 left-0">1000 tk</p>
              <p className=" border-2 border-quaternary4 py-1 px-5 absolute top-8 right-0">5000 tk</p>
            </div>
           
          </div>
        </div>
        <div className=" w-1/2 ">
        
         
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl  mb-1.5">
              Preferred Medium:
            </p>
         <SelectTag />
          </div>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl  mb-1.5">
              Preffered Tutoring Style
            </p>
           <SelectTag />
          </div>
           <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl mb-1.5">
              Preferred Subjects{" "}
            </p>
            <input
              type="text"
              placeholder="Enter your preferred subjects"
              className=" border border-quaternary4 rounded-sm  w-full p-1.5 "
            />
          </div>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl  mb-1.5">
              Tuition experience (In Year)
            </p>
               <input
              type="number"
              placeholder="Enter your experience"
              className=" border border-quaternary4 rounded-sm  w-full p-1.5 "
            />
          </div>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl  mb-1.5">
              Tuition Status:
            </p>
            <select
              defaultValue="Pick a color"
              className="select w-full outline-0"
            >
              <option disabled={true}>Select Status</option>
              <option>Avilabale</option>
              <option>English</option>
              <option>Urdo</option>
            </select>
          </div>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl  mb-1.5">
              Tutor Preference
            </p>
            <select
              defaultValue="Pick a color"
              className="select w-full outline-0"
            >
              <option disabled={true}>Select Preference</option>
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" mt-5 text-center">
        <button className=" bg-primary1 text-white font-DMSans font-semibold text-lg px-10 py-2 rounded-md  hover:bg-tertiary3  transition-colors duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default TuitionInfo;
