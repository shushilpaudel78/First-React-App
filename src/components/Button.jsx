import React from 'react'

export default function Button(props) {
  return (
    <div>

        <button className='rounded px-4 py-2 font-poppins {props.color} text-white'>{props.name}</button>
      
    </div>
  )
}
