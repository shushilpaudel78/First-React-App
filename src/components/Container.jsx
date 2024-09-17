import React from 'react'
import Table from './Table'
import Sidebar from './Sidebar'

export default function Container() {
  return (


    <>

      <div className="w-full h-auto  bg-[#F7F7F7]  py-0">

        <div className='max-w-[1200px] m-auto'>

          <div className="flex w-full h-auto">


            <div className="w-[20%] h-auto">

              <Sidebar />


            </div>




            <div className="w-[80%] h-auto px-3 bg-[#fff9fe]">

              <div className="flex my-2 py-2 justify-between">
                <h3 className='font-poppins '>Agent Management Transaction</h3>


                <p>Account || Shushil Paudel</p>

              </div>

              <h1 className='font-poppins my-2 py-2 w-full'>Transaction</h1>

              <Table />



            </div>


          </div>






        </div>


      </div>









    </>




  )
}
