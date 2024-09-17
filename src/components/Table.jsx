import React from 'react'
import Button from './Button'
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0'

export default function Table() {

    const costumeStyle = {
        // backgroundColor:'red',
        height:'50px',

        
    }
    return (
        <div>
            <table className='w-full text-center bg-white py-4 font-poppins text-sm table_custo' >
                <tr className='' style={costumeStyle}>
                    <th >Date </th>
                    <th>Transition ID </th>
                    <th>Type</th>
                    <th> Name</th>
                    <th>Value</th>
                    <th>Return</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>

                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>


                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>

                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>

                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>


                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>
                <tr style={costumeStyle}>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>


            </table>

        </div>
    )
}
