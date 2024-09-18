import React from 'react'
import Sidebar from './Sidebar'

export default function Newuser() {
    return (
        <>


            <div className="w-full h-auto  bg-[#F7F7F7]  py-10 ">

                <div className='max-w-[1200px] m-auto'>

                    <div className="flex w-full h-auto">


                        <div className="w-[20%] h-auto">

                            <Sidebar />

                        </div>



                        <div className="w-[80%] h-auto px-3 bg-[#fff9fe] rounded-lg">
                            <H1>From new user page</H1>

            
                        </div>


                    </div>

                </div>

            </div>


        </>
    )
}
