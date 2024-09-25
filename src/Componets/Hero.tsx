
import pic from "../assets/whatsBuimg.webp"

const Hero = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#103928] flex justify-center items-center'>
    <div  className='w-[96%] h-[95%] bg-blue-600 flex items-center '>
       <div className="w-[50%] h-[100%] bg-[#103928] justify-center items-center pl-10">
        <h1 className="font-bold text-left text-5xl pt-40 text-[#43CD66]">Do more with conversations</h1>
        <p className=" text-left text-xl pt-10 text-white">Engage audiences, accelerate sales and drive better customer support outcomes on the platform with more than 2 billion users around the world.</p>
        <div className="pt-12">
        <button className="bg-[#36A856] w-[250px] h-[70px] rounded-l-full rounded-r-full justify-center items-center">Choose your product</button>
        </div>
       </div>
       <div className="justify-center items-center flex w-[50%] h-[100%] bg-[#103928]"><img className="w-[60%] h-[70%]" src={pic} alt="" /></div>
    </div>
</div>
  )
}

export default Hero


{/* <a href="https://business.whatsapp.com/products/business-app">
<div className='w-[50px] h-[50px] border border-green-600 flex justify-center items-center rounded-full'>
    <BiArrowFromRight/>
</div>
</a> */}


{/* <div className="flex items-center w-[129px] h-[50px] bg-black text-white rounded-md justify-center">
      <div>
      <FaGooglePlay size={25}/>
      </div>
       <div className="ml-2">
        <p className="text-[12px]">GET IT ON</p> 
       <div>
       Google Play
       </div>
       </div>
       </div> */}