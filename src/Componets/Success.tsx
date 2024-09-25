import pic from "../assets/whatsapp business 3.webp"
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5'

const Success = () => {
  return (
    <div className='w-[100%] h-[250vh] bg-[#FFFFFF] flex justify-center items-center'>
    <div  className='w-[96%] h-[95%]'>
        <div className='bg-gray-100 pl-24 pr-40 pt-16'>
        <p className='text-xl text-[#526571] font-bold'>Success Stories</p>
        <h1 className='text-[45px] text-[#103928]'>From banking, e-commerce, and more, WhatsApp helps businesses drive results</h1>
        </div>
        <div>
        <div className='flex gap-3 pt-5 justify-end pr-14'>
        <IoArrowBackCircleOutline size={35} />
        <IoArrowForwardCircleOutline size={35} />
        </div>
        <div className='justify-center flex pt-5'>
        <div className='w-[90%] h-[70vh] bg-[#D8F4CC] rounded-3xl flex justify-center items-center'>
            <div className='w-[48%] h-[100%] justify-center items-center flex'>
                <img className="w-[450px] h-[400px] rounded-3xl" src={pic} alt="" />
            </div>
            <div className='w-[48%] h-[100%]'>
                <h1 className="pt-24 text-4xl">Bank Mandiri</h1>
                <p className="pt-5 text-2xl">Driving conversions for business growth to engage customers for installment payment schedules and enable credit card application verifications via WhatsApp Business Platform</p>
                <div className="flex pt-5 gap-2">
                <IoArrowForwardCircleOutline size={30} color="green" />
                <p>See success story</p>

                </div>
            </div>
        </div>

        </div>
    </div>

    <div className="justify-center items-center flex h-[65vh] mt-40">
    <div className="w-[90%] h-[55vh] bg-[#103928] rounded-3xl">
            <h1 className="text-center text-4xl pt-20 text-[#43CD66]">Take the next step</h1>
            <p className="text-center text-xl pt-7 text-white">Start transforming your customer experience on WhatsApp Business Platform.</p>
            <div className="justify-center items-center flex pt-10">
            <div className="w-[150px] h-[60px] justify-center items-center flex rounded-r-full rounded-l-full bg-[#36A856]">
            <button className="text-center">Learn More</button>
            </div>

            </div>
        </div>
    </div>


    </div>
</div>

  )
}

export default Success