
import Sidbar from "@/app/Components/Sidbar"
const page = () => {
  return (
    <div className="container mx-auto p-5">
        <div  className="flex justify-between ">
            <div className="w-1/4">
            <Sidbar/>
            </div>
            <div className="w-3/4"></div>
        </div>
    </div>
  )
}

export default page