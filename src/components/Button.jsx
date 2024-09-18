import React from 'react'

export default function Button(props) {
  return (
    <div>

        <button className='rounded px-4 py-2 font-poppins text-white border-customPurple bg-[#e168a1]'>{props.name}</button>
      
    </div>
  )
}
