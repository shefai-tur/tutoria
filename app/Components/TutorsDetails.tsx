import { IoMdClose } from "react-icons/io";

import ViewSidebarProfile from "./ViewSidebarProfile";
import ViewTutorProfile from "./ViewTutorProfile";

const TutorsDetails = () => {
  return (
    <div className="container mx-auto ">
      <dialog id="ViewProfileModal" className="modal">
        <div className="modal-box  w-11/12 max-w-5xl text-primary1">
          <div className="modal-action mt-1">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-md hover:bg-primary1 hover:text-secondary2">
                <IoMdClose />
              </button>
            </form>
          </div>

         
            <div className="flex gap-10">
              <div className="w-1/4">
                <ViewSidebarProfile />
              </div>

              <div className="w-3/4">
                <ViewTutorProfile />
                
              </div>
          
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TutorsDetails;
