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

            <div className="w-6 h-6">
              <img src={logo} alt="logo image" className='w-full h-full  object-contain' />

            </div>



            {/* profile  */}
            <div className='flex flex-wrap  gap-x-4'>


              <div className="relative  w-[200px] h-">
                <input type="w-full h-full"  placeholder='search e. g card' />
              <FaSearch className="absolute top-1 left-1" />
              </div>

             

              <div className="flex mx-4">

                <div className="w-8 h-8" ><img src={profile} alt="profile image" className='w-full h-full object-contain rounded-2xl' /></div>
                <label htmlFor="" className='font-poppins mx-2 font-medium not-italic mx-2'>Shushil Paudel</label>

              </div>



              <div className="w-4 h-4 text-base my-1.5"> <FaBell /> </div>

            </div>



          </div>


        </div>
      </div>





    </>

  )
}

export default Nav