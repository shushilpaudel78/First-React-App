import React from 'react'

export default function Button(props) {
  return (
    <div>

        <button className='bg-blue-200 rounded px-4 py-2 font-poppins'>{props.name}</button>
      
    </div>
  )
}
