
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { MdContentPasteSearch } from 'react-icons/md'
import { PiHandbagSimpleThin } from 'react-icons/pi'

const Product = () => {
  return (
    <div className='w-[100%] h-[130vh] bg-[#FFFFFF] flex justify-center items-center'>
    <div  className='w-[96%] h-[95%] bg-[#FFFFFF]'>
        <div className='pt-16'>
            <p className='justify-center items-center flex'>WhatsApp Business for any company size</p>
            <h1 className='justify-center items-center flex text-[43px] text-center w-[90%] pl-20 pt-5'>WhatsApp Business products support businesses from large to small, see which product best fits your needs.</h1>
        </div>
        <div className='justify-center items-center flex'>
        <div className='h-[85vh] w-[90%] bg-[#FFFFFF] flex gap-10 justify-center pt-20'>
            <div className='w-[45%] h-[70vh] bg-[#FFFFFF] rounded-3xl border border-[#EBEBEB] shadow-2xl pt-20 pl-12'>
                <div className=''>
                <PiHandbagSimpleThin size={50} color='green' />
                </div>
            <h1 className='pt-10 text-2xl'>Whatsapp Business Platform</h1>
            <p className='pt-7 text-[#526571] text-lg'>For medium to large businesses communicating with customers at scale through programmatic access</p>
            <div className='flex pt-5 gap-3 justify-start items-center'>
            <FaRegArrowAltCircleRight size={20} color='green' />
            <p>Get started</p>
            </div>
            </div>
            <div className='w-[45%] h-[70vh] bg-[#FFFFFF] rounded-3xl border border-[#EBEBEB] shadow-2xl pt-20 pl-12'>
            <div className=''>
                <MdContentPasteSearch size={60} color='green' />
                </div>
            <h1 className='pt-10 text-2xl'>Whatsapp Business App</h1>
            <p className='pt-7 text-[#526571] text-lg'>For small businesses who personally manage conversations with customers</p>
            <div className='flex pt-5 gap-3 justify-start items-center'>
            <FaRegArrowAltCircleRight size={20} color='green' />
            <p>Download App</p>
            </div>

            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Product