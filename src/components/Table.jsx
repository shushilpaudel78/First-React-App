import React, { useState } from 'react'
// import Button from './Button'
// import Bitcoin from '../assets/img/bitcoin.png'
// import Group from '../assets/img/Group.png'
// import { SlOptions } from "react-icons/sl";


export default function Table() {

    const [search, setSearch] = useState()
    console.log(search)

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
            name: "Shushil",
            return: "return",
            status: "active",
            action: "active",
            value: 877899,

        },
        {
            date: "34/45/65",
            transid: 2,
            type: "Nabin",
            name: "Krishna",
            return: "return",
            status: "active",
            action: "active",
            value: 454

        },
        {
            date: "34/45/65",
            transid: 3,
            type: "abc",
            name: "Amrit",
            return: "return",
            status: "active",
            action: "active",
            value: 7874858
        },

        {
            date: "34/45/65",
            transid: 4,
            value: 54464,
            type: "abc",
            name: "Razz",
            return: "return",
            status: "active",
            action: "active"
        }

    ]




    return (
        <div className='w-full h-auto'>

            <div className="flex my-2 py-4 justify-between">
                <h3 className='font-poppins mt-3 '>Agent Management Transaction</h3>


                <p className='font-poppins py-3 text-sm'>Account || Shushil Paudel</p>

            </div>


            <div className="flex gap-[10px] my-[10px]">

                <h1 className='font-poppins my-2 py-2 w-full text-lg'>Transaction</h1>

                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='' className='border-[2px] h-[40px]  w-[170px] px-[10px] rounded-[30px] border-customPurple font-poppins' />


            </div>



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

                {users?.filter((user) => {
                    return search?.toLowerCase() ==='' 
                    ? user 
                    : user.name.toLowerCase().includes(search);
                }).map((user) => (

                    <tr key={user.id} style={costumeStyle} className='text-[14px] color-red text'>

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
