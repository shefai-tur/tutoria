"use client";
import { FcGoogle } from "react-icons/fc";

const SignUpModel = () => {
  return (
    <div>
           {/* Open the modal using document.getElementById('ID').showModal() method */}
    

      <dialog id="gooogle_signup_modal_1" className="modal">
        <div className="modal-box text-primary1" >
          <h3 className="font-bold text-lg ">Hello! Sign up to Tutoria</h3>
          <div className="my-5 py-4 flex items-center justify-center border border-primary1 rounded-lg bg-primary1 text-secondary2 hover:bg-tertiary3  transition-colors duration-300 cursor-pointer">
            <FcGoogle />
            <span className="ml-4 block">Sign up with Google</span>
          </div>
          
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default SignUpModel