import React from 'react'
import Table from './Table'
import Sidebar from './Sidebar'

export default function Container() {
  return (

    
    <>

    <div className="w-full h-auto">

      <div className='max-w-[1200px] m-auto'>

        <div className="flex w-full h-auto">


          <div className="w-[20%] h-auto">

            <Sidebar />


          </div>



          <div className="w-[80%] h-auto">

          <Table />


          </div>


        </div>


      



      </div>


    </div>



   


    
    
    
    </>


      
   
  )
}
