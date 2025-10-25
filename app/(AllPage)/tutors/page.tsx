 
import Sidbar from "@/app/Components/Sidbar"
import TutorsCard from "@/app/Components/TutorsCard"
const page = () => {
  return (
    <div className="container mx-auto p-5">
        <div  className="flex justify-between ">
            <div className="md:w-1/4 hidden md:block">
            <Sidbar/>
            </div>
            <div className="md:w-3/4 w-full ">
            <TutorsCard/>
            </div>
        </div>
    </div>
  )
}

export default page