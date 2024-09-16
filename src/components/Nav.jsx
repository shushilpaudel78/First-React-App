import React from 'react'
import logo from '../assets/img/logo.png'
import profile from '../assets/img/profile.jpg'


function Nav() {
  return (
    <>

      <div className="w-full h-auto m-2 p-2">
        <div className="max-w-[1200px] h-auto m-auto" >

          <div className="w-full h-auto flex  flex-wrap justify-between">


            {/* logo  */}

            <div className="w-6 h-6">
              <img src={logo} alt="logo image" className='w-full h-full  object-contain' />

            </div>




            {/* profile  */}
            <div className='flex flex-wrap'>

              <input type="text" class="border-none border-gray-300 rounded-md p-2  mx-2 px-2" placeholder="" />

              <div className="w-10 h-10" ><img src={profile} alt="profile image" className='w-full h-full object-contain rounded-2xl' /></div>

              <label htmlFor="" className='font-roboto mx-2'>Name</label>

              <div className="w-3 h-3"><i class="fa-solid fa-bell color-red"></i></div>

            </div>










          </div>





        </div>
      </div>





    </>

  )
}

export default Nav