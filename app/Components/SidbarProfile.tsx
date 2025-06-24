import Image from "next/image";

import { FaChalkboardTeacher ,FaEdit,FaCamera ,FaRegHandPaper } from "react-icons/fa";
import { TbCalendarUser } from "react-icons/tb";
import { IoMdNotifications,IoMdSettings ,IoMdLogOut } from "react-icons/io";
import { MdPayment ,MdVerified } from "react-icons/md";


const SidbarProfile = () => {
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
        <ul className="mt-10">
          <li className=" flex items-center  font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <FaChalkboardTeacher className=" text-2xl mr-5"/> <span>Dashboard</span> 
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
            <TbCalendarUser className=" text-2xl mr-5"/> Job Board
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <IoMdNotifications className=" text-2xl mr-5"/>  Notification
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <FaEdit className=" text-2xl mr-5"/>  Update Profile
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <FaRegHandPaper  className=" text-2xl mr-5"/>  My Apply Status
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <MdVerified  className=" text-2xl mr-5"/>  Verification Request
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <MdPayment className=" text-2xl mr-5"/>  Payment Section
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <IoMdSettings  className=" text-2xl mr-5"/>  Security
          </li>
          <li className="flex items-center font-DMSans font-normal text-primary1 text-lg px-5 py-2 hover:text-white hover:bg-tertiary3 transition-colors duration-300 cursor-pointer border-b border-quaternary4">
           <IoMdLogOut className=" text-2xl mr-5"/>  Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidbarProfile;
