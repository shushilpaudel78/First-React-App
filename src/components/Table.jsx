import React from 'react'
import Button from './Button'
import Bitcoin from '../assets/img/bitcoin.png'
import Group from '../assets/img/Group.png'
import { SlOptions } from "react-icons/sl";

export default function Table() {

    const costumeStyle = {
        height: '50px',
        // background: 'red',
        // border: '2px solid black'

    }
    return (
        <div>
            <table className='w-full text-center bg-white py-4 font-poppins text-sm  min-w-full divide-y divide-gray-200' >
                <tr className='' style={costumeStyle}>
                    <th >Date </th>
                    <th>Transition ID </th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Return</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>

                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>

                        <div className="w-[20px] h-[20px] flex">
                            <img src={Bitcoin} alt="bitcoin img" className='w-full h-full' />
                        </div>

                    </td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td><Button name="Abc" /></td>
                    <td className='flex gap-4 justify-center my-2'><Button name="shushil" /> <SlOptions  className="float-right"/> </td>

                </tr>


                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>
                        <div className="w-[20px] h-[20px] flex">

                            <img src={Group} alt="group img" className='w-full h-full' />

                        </div>

                    </td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td><Button name="Abc" /></td>
                    <td className='flex gap-4 justify-center my-2' ><Button name="shushil" /> <SlOptions className="float-right" /></td>

                </tr>


                
                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>

                        <div className="w-[20px] h-[20px] flex">
                            <img src={Bitcoin} alt="bitcoin img" className='w-full h-full' />
                        </div>

                    </td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td><Button name="Abc" /></td>
                    <td className='flex gap-4 justify-center my-2'><Button name="shushil" /> <SlOptions className="float-right" /></td>

                </tr>


                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>
                        <div className="w-[20px] h-[20px] flex">
                            <img src={Group} alt="group img" className='w-full h-full' />
                        </div>

                    </td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td><Button name="Abc" /></td>
                    <td className='flex gap-4 justify-center my-2' ><Button name="shushil" /> <SlOptions className="float-right" /></td>

                </tr>


                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>

                        <div className="w-[20px] h-[20px] flex">
                            <img src={Bitcoin} alt="bitcoin img" className='w-full h-full' />
                        </div>

                    </td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td><Button name="Abc" /></td>
                    <td className='flex gap-4 justify-center my-2'> <Button name="shushil" /> <SlOptions className="float-right" /> </td>

                </tr>


                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>
                        <div className="w-[20px] h-[20px] flex">
                            <img src={Group} alt="group img" className='w-full h-full' />
                        </div>

                    </td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td><Button name="Abc" /></td>
                    <td className='flex gap-4 justify-center my-2'><Button name="shushil" /> <SlOptions className="float-right" /></td>

                </tr>


             


            </table>

        </div>
    )
}
