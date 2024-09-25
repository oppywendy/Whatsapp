import { useState } from 'react'
import { BiStoreAlt } from 'react-icons/bi';

import { FaPaperPlane,  FaWhatsapp } from "react-icons/fa";
import { IoSearchOutline } from 'react-icons/io5';
import { PiToolboxLight } from 'react-icons/pi';

const Header = () => {

  const [dropdownOpen, showDropdownOpen] = useState (false)

  const toggleDropdown = () => {
    showDropdownOpen(!dropdownOpen)
  }

  return (
    <div className='w-[100%] h-[14vh] bg-[#103928] flex justify-center items-center text-white'>
        <div  className='w-[96%] h-[100%]  flex items-center justify-between'>
           <div className='flex text-[15px] items-center  w-[60%] justify-between cursor-pointer'>
            <p className='flex items-center'>
              <FaWhatsapp size={25}/>
              <div className=' ml-1'>
              <span className='font-bold'>WhatsApp</span> Business
              </div>
            </p>
            <p onClick={toggleDropdown}>Product</p>
            {dropdownOpen && (
              <div className='bg-white shadow-lg absolute flex justify-center items-center left-60 top-28 w-[70%] h-[60%] rounded-2xl'>
                <div className='w-[93%] h-[95%] text-black'>
                  <div>Products</div>
                  <div className='flex items-center justify-between'>
                    <div>
                    <div className='flex items-center gap-2 mr-3 border-b h-20'>
                      <PiToolboxLight size={30} color='green'/>
                      <p className='text-[17px]'>Business Platform</p>
                    </div>
                    <div className='mt-4'>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                    </div>
                    </div>
                    <div>
                    <div className='flex items-center gap-2 mr-3 border-b h-20'>
                      <BiStoreAlt size={30} color='green'/>
                      <p className='text-[17px]'>Business App</p>
                    </div>
                    <div className='mt-4'>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                    </div>
                    </div>
                   <div>
                   <div className='flex items-center gap-2 mr-3 border-b h-20'>
                      <FaPaperPlane size={30} color='green'/>
                      <p className='text-[17px]'>Ads that click to Whatsapp</p>
                    </div>
                    <div className='mt-4'>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                      <p>Overview</p>
                    </div>
                   </div>
                  </div>
                 
                </div>
              </div>
            )}
            <p>Resources</p>
            <p>Developers</p>
            <p>Partners</p>
           </div>
           <div className='w-[36%] flex items-center gap-10 text-black'>
            <div className='w-[50px] h-[50px] bg-green-600 flex justify-center items-center rounded-full'>
            <IoSearchOutline size={20}/>
            </div>
            <button className='w-[180px] h-[50px] flex justify-center items-center rounded-r-full rounded-l-full bg-green-600 '>Get Started</button>
            <button className='w-[180px] h-[50px] flex justify-center items-center rounded-r-full rounded-l-full bg-white'>Download App</button>
            
           </div>
        </div>
    </div>
  )
}

export default Header