import logo from "../assets/meta.png" 

const LittleHeader = () => {
  return (
    <div className='w-[100%] h-[7vh] bg-white flex justify-center items-center'>
        <div  className='w-[96%] h-[100%]  flex items-center'>
            <img src={logo} alt=""  className="w-[80px] h-[40px]"/>
        </div>
    </div>
  )
}

export default LittleHeader