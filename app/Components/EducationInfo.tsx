"use client";
import { useState  } from "react";
type EducationForm ={
  examination: string;
  institute:string;
  group:string;
  passingYear: string;
  result:string;
  document?:File|null;
}
const EducationInfo = () => {
  const [form,setForm]=useState<EducationForm>({
 examination: "",
  institute:"",
  group:"",
  passingYear: "",
  result:"",
  document:null,

  })

  let change =()=>{
// const {name,value,type} = e.target;
  }

  const handelSubmit =()=>{

    console.log("Hello tutos")
  }

  return (
    <div className=" mt-8">
      <div className="w-48">
        <h1 className=" font-DMSans font-semibold text-2xl  border-b-2 border-quaternary4">
          {" "}
          Educational Info
        </h1>
        <h2 className=" font-DMSans font-normal text-xl mt-1.5">
          Update your profile
        </h2>
      </div>
      <div className=" mt-5 ">
        <div className=" border border-quaternary4 p-12 ">
          <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-52">Examination</p>
            <input
              type="text"
              name="examination"
               value={form.examination}
              onChange={change}
              placeholder="Secondary / SSC / O-level / Dakhil "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
               required
            />
          </div>
          <div className=" flex items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-52">Institute</p>
            <input
              type="text"
               name="institute"
                value={form.institute}
                onChange={change}
              placeholder="Write Institute "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
              required
            />
          </div>
          <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-52">Group</p>
            <input
              type="text"
              name="group"
                value={form.group}
                onChange={change}
              placeholder="Enter Department "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
              required
            />
          </div>
          <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-52">
              Passing Year
            </p>
            <select
             name="passingYear"
                value={form.passingYear}
                onChange={change}
              defaultValue="Pick a color"
              className="select w-full outline-0"
            >
              <option disabled={true}>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-52">Result</p>
            <input
              type="text"
               name="result"
                value={form.result}
                onChange={change}
              placeholder="Enter result "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
          <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-52">
              Add Document
            </p>
            <input
              type="file"
               name="document"
                onChange={change}
              className="file-input file-input-neutral w-full border-quaternary4 rounded-sm outline-0"
               accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>
          <div className=" mt-10">
            <button className=" bg-tertiary3 text-white font-DMSans font-semibold text-lg px-6 py-2 rounded-md  hover:bg-primary1  ">
              + Add Education (If Required)
            </button>
          </div>
        </div>
        <div className=" mt-5 text-center">
          <button onClick={handelSubmit} className=" bg-primary1 text-white font-DMSans font-semibold text-lg px-10 py-2 rounded-md  hover:bg-tertiary3  transition-colors duration-300">
            Next 
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
