import React, { useState } from 'react'
// import Button from './Button'
// import Bitcoin from '../assets/img/bitcoin.png'
// import Group from '../assets/img/Group.png'
// import { SlOptions } from "react-icons/sl";

export default function Table() {

    const costumeStyle = {
        height: '50px',
        // background: 'red',
        // border: '2px solid black'

    }

    const users = [
        {
            date: "34/45/65",
            transid: 1,
            type: "abc",
            name: "value",
            return: "return",
            status: "active",
            action: "active",
            value:877899,

        },
        {
            date: "34/45/65",
            transid: 2,
            type: "abc",
            name: "value",
            return: "return",
            status: "active",
            action: "active",
            value:454

        },
        {
            date: "34/45/65",
            transid: 3,
            type: "abc",
            name: "value",
            return: "return",
            status: "active",
            action: "active",
            value:7874858
        },

        {
            date: "34/45/65",
            transid: 4,
            value:54464,
            type: "abc",
            name: "value",
            return: "return",
            status: "active",
            action: "active"
        }

    ]




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

                {users.map((user) => (

                    <tr key={user.transid} style={costumeStyle} className='text-[14px] color-red text'>

                        <td>{user.date}</td>
                        <td>{user.transid}</td>
                        <td>{user.type}</td>
                        <td>{user.name}</td>
                        <td>{user.value}</td>
                        <td>{user.return}</td>
                        <td>{user.status}</td>
                        <td>{user.action}</td>
                    </tr>

                ))}



            </table>

        </div>
    )
}
