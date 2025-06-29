const PersonalInfo = () => {
  return (
    <div className=" mt-8">
      <div className="w-48">
        <h1 className=" font-DMSans font-semibold text-2xl  border-b-2 border-quaternary4">
          {" "}
          Personal Info
        </h1>
        <h2 className=" font-DMSans font-normal text-xl mt-1.5">
          Update your profile
        </h2>
      </div>
<div className="border border-quaternary4 px-10 py-5 mt-10">
      <div className=" flex justify-between ">
      
          <div className=" pr-5  w-1/2 ">
            <div className=" mt-10  mb-4">
              <p className=" font-DMSans font-normal text-xl ">Full Name</p>
              <input
                type="text"
                placeholder="Enter your full name "
                className=" border-2 border-dashed border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
              />
            </div>
            <div className="  mb-4">
              <p className=" font-DMSans font-normal text-xl ">Gander</p>
              <select
                defaultValue="Pick a color"
                className="select w-full outline-0"
              >
                <option disabled={true}>Select Gander</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="  mb-4">
              <p className=" font-DMSans font-normal text-xl ">
                Phone Numbe
              </p>
              <input
                type="number"
                placeholder="Enter your phone number "
                className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
              />
            </div>
            <div className="  mb-4">
              <p className=" font-DMSans font-normal text-xl ">
                Additional Phone Number
              </p>
              <input
                type="number"
                placeholder="Enter additional  number "
                className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
              />
            </div>
            <div className=" mb-4">
              <p className=" font-DMSans font-normal text-xl">
                Employ Status
              </p>
              <select
                defaultValue="Pick a color"
                className="select w-full outline-0"
              >
                <option disabled={true}>Select Status</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Other</option>
              </select>
            </div>
            <div className=" flex items-center mb-4">
              <div className="  mb-4">
                <p className=" font-DMSans font-normal text-xl w-52">
                  Add Identity
                </p>
               <div className=" flex gap-2">
                 <select
                  defaultValue="Pick a color"
                  className="select w-full outline-0"
                >
                  <option disabled={true}>Select Identity</option>
                  <option>NID</option>
                  <option>Passport</option>
                  <option>BIRTH</option>
                </select>
                     <input
                  type="file"
                  className="file-input file-input-neutral w-full border-quaternary4 rounded-sm outline-0"
                />
               </div>
              </div>
              
            </div>
          </div>
      

        <div className="  pl-5 w-1/2">
          <h2 className=" font-DMSans font-semibold text-xl  mb-4 border-b-1 border-quaternary4 w-34">
            Parental Info{" "}
          </h2>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl ">Father's Name </p>
            <input
              type="text"
              placeholder=" Enter your father's name "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
          <div className=" mb-4">
            <p className=" font-DMSans font-normal text-xl ">Father's Phone Number </p>
            <input
              type="text"
              placeholder="Enter your father's phone number "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
          <div className=" mb-4">
            <p className=" font-DMSans font-normal text-xl ">Mother's Name </p>
            <input
              type="text"
              placeholder="Enter your mother's name "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl ">Mother's Phone Number </p>
            <input
              type="text"
              placeholder="Enter your mother's phone number "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
          <div className="  mb-4">
            <p className=" font-DMSans font-normal text-xl ">Local Guardian Number (On Emergency)</p>
            <input
              type="text"
              placeholder="Enter local guardian number "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
        </div>
      
      </div>

      <div>

            <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-96"> Your Permanent Location</p>
            <input
              type="text"
              placeholder=" Enter your permanent location "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
          <div className=" flex  items-center mb-4">
            <p className=" font-DMSans font-normal text-xl w-96"> About Yourself </p>
            <input
              type="text"
              placeholder=" Enter about yourself "
              className=" border border-quaternary4 rounded-sm outline-0 w-full p-1.5 "
            />
          </div>
      </div>
      </div>
      <div className=" mt-5 text-center">
        <button className=" bg-primary1 text-white font-DMSans font-semibold text-lg px-10 py-2 rounded-md  hover:bg-tertiary3  transition-colors duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
