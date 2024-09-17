import React from 'react'
import logo from '../assets/img/logo.png'
import profile from '../assets/img/profile.jpg'
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



function Nav() {
  return (
    <>

      <div className="w-full h-auto  py-3 bg-[#F7F7F7]">
        <div className="max-w-[1200px] h-auto m-auto" >

          <div className="w-full h-auto flex  flex-wrap justify-between">


            {/* logo  */}
            <div className="flex">
            <div className="w-6 h-6"><img src={logo} alt="logo image" className='w-full h-full  object-contain' /> </div>
            <label htmlFor="" className='font-poppins px-2 text-[#4337cf]'>Margin Top</label>


            </div>




            {/* profile  */}
            <div className='flex flex-wrap  gap-x-4'>


              <div className="relative w-[500px] h-[40px]">
                <input type="text"  placeholder='search e. g card' className='w-full h-full rounded-lg pl-[30px] border-2 border-[#df67a2]-500'/>
              <FaSearch className="absolute top-4 left-3" />
              </div>

             

              <div className="flex mx-4">

                <div className="w-8 h-8" ><img src={profile} alt="profile image" className='w-full h-full object-contain rounded-2xl' /></div>
                <label htmlFor="" className='font-poppins mx-2 font-medium not-italic mx-2 border-black'>Shushil Paudel</label>

              </div>



              <div className="w-6 h-6 text-base my-1.5"> <FaBell /> </div>

            </div>



          </div>


        </div>
      </div>





    </>

  )
}

export default Nav