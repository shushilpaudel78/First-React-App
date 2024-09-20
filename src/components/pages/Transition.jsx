import React from 'react'
import Sidebar from '../Sidebar'

export default function Transition() {
    return (
        <>

            <div className="w-full h-auto  bg-[#F7F7F7]  py-10">
                <div className="max-w-[1200px] m-auto">
                    <div className="w-full  h-auto  flex">


                        <div className="w-[20%]">
                            <Sidebar />
                        </div>
                        <div className="w-[80%]">

                        <h1>From transition Page</h1>
                        </div>


                    </div>



                </div>


            </div>

           

        </>
    )
}
