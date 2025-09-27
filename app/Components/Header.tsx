"use client";
import Image from "next/image";
import { FaUserShield } from "react-icons/fa";
import SignUpModel from "./SignUpModel";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";

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
        
          <button
            onClick={() => {
              const modal = document.getElementById(
                "gooogle_signup_modal_1"
              ) as HTMLDialogElement | null;
              if (modal) modal.showModal();
            }}
          >
            <FaUserShield
              className="text-quaternary4 hover:text-secondary2 transition-colors duration-300 cursor-pointer"
              size={25}
            />
          </button>
          <SessionProvider>
          <SignUpModel />
          </SessionProvider>
        </div>
      </div>
    </div>
  );
};

export default Header;
