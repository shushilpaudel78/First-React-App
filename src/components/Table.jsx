import React from 'react'
import Button from './Button'

export default function Table() {
    return (
        <div>
            <table className='w-full text-center bg-white py-4 font-poppins text-sm'>
                <tr className=''>
                    <th>Date </th>
                    <th>Transition ID </th>
                    <th>Type</th>
                    <th> Name</th>
                    <th>Value</th>
                    <th>Return</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>

                <tr>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>


                <tr>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>

                <tr>
                    <td>14/01/2019</td>
                    <td>12345678</td>
                    <td>Type</td>
                    <td>Amazon</td>
                    <td>$355</td>
                    <td>#18000</td>
                    <td>Abc</td>
                    <td><Button name="shushil" /></td>

                </tr>

                <tr>
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
