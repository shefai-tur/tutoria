"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { id } from "zod/locales";
import Image from "next/image";
const SignUpModel = () => {

  const {data: session} = useSession();
  return (
    <div>
    

      <dialog id="gooogle_signup_modal_1" className="modal">
        <div className="modal-box text-primary1" >
          {!session ? (
            <>
            <h3 className="font-bold text-lg ">Hello! Sign up to Tutoria</h3>
<div className="my-5 py-4 flex items-center justify-center border border-primary1 rounded-lg bg-primary1 text-secondary2 hover:bg-tertiary3  transition-colors duration-300 cursor-pointer">
            <button onClick={() => signIn('google')} className="flex items-center font-semibold text-md">
            <FcGoogle />
            <span className="ml-4 block">Sign up with Google</span>
            </button>

          </div>
          </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image src={session?.user?.image || ''} alt="User Image" width={80} height={80} className="rounded-full"/>
          <p className="text-center text-xl text-red-500">Hi! {session?.user?.name}</p>
          <button onClick={() => signOut()} className="btn">Sign out</button>
          </div>
          )}
          
          
          
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default SignUpModel