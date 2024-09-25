import { FaPlus } from "react-icons/fa"
import pic from "../assets/whasapp business 2.webp"

const Choose = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#F1E9DE] flex justify-center items-center'>
    <div  className='w-[96%] h-[95%] flex items-center '>
       <div className="w-[50%] h-[100%] justify-center items-center flex">
        <div><img className="w-[500px] rounded-[40px]" src={pic} alt="" /></div>
       </div>
       <div className="w-[50%] h-[100%] items-center flex">
        <div className="w-[85%] h-[85%]">
        <h1 className="text-[45px] pt-10">Why choose WhatsApp?</h1>
        <div className="flex justify-center items-center gap-2 pt-6 pr-2 pl-10">
            <p className="text-[28px]">Meet customers where they already are</p>
            <FaPlus size={25} color="green" />
        </div>
       <div className="pt-5"> <div  className="h-[1px] bg-[#C6C8CC]"/></div>
       <div className="flex items-center gap-[163px] pt-6 pr-2 pl-10">
            <p className="text-[28px]">Drive business outcomes</p>
            <FaPlus size={25} color="green" />
        </div>
       <div className="pt-5"> <div  className="h-[1px] bg-[#C6C8CC]"/></div>

       <div className="flex justify-center items-center gap-2 pt-6 pr-2 pl-10">
            <p className="text-[28px]">Build long-lasting customer relationships</p>
            <FaPlus size={25} color="green" />
        </div>

        </div>
       </div>
    </div>
</div>

  )
}

export default Choose