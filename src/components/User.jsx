import React from 'react'
import Sidebar from './Sidebar'

export default function User() {
    return (
        <>

            <div className="w-full h-auto">
                <div className="max-w-[1200px m-auto]">

                    <div className="w-full h-auto flex">



                        <div className="w-[20%] h-auto">

                            <Sidebar />


                        </div>

                        <div className="w-[80%] h-auto bg-red">
                            <h1>From 80%</h1>

                        </div>



                    </div>









                </div>

            </div>

        </>
    )
}

