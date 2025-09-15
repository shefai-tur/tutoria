"use client";
import Image from "next/image";
import { FaUserShield } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
 
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-primary1 text-secondary2">
        <div>
          <Image src="/logo.svg" alt="Logo" width={65} height={24} />
        </div>
        <div>
          <ul className="flex space-x-8 ">
            <Link href="/tutions">
            <li className="font-DMSans font-normal  text-sm text-quaternary4 hover:text-secondary2  hover:font-bold  hover:border-b-2 hover:border-tertiary3 transition-colors duration-300 cursor-pointer">
              TUITIONS{" "}
            </li>
            </Link>
            <Link href="/tutors">
            <li className="font-DMSans font-normal  text-sm text-quaternary4 hover:text-secondary2  hover:font-bold  hover:border-b-2 hover:border-tertiary3 transition-colors duration-300 cursor-pointer">
              TUTORS{" "}
            </li>
            </Link>
            <li className="font-DMSans font-normal  text-sm text-quaternary4 hover:text-secondary2  hover:font-bold  hover:border-b-2 hover:border-tertiary3 transition-colors duration-300 cursor-pointer">
              COURSES{" "}
            </li>
          </ul>
        </div>
        <div>
          <Link href="api/auth/signin">
            <FaUserShield
              className="text-quaternary4 hover:text-secondary2 transition-colors duration-300 cursor-pointer"
              size={25}
            />
             </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
