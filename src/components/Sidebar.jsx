import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React from 'react'

export default function sidebar() {
  return (
    <Router>

    <div className='w-full h-auto -8 bg-[#F7F7F7] '>

      <ul className='flex flex-wrap  flex-col gap-5 font-poppins text-sm'>
        <li> <Link to="/overview">Overview</Link></li>
        <li> <Link to="/user">User</Link></li>
        <li> <Link to="/newuser"> New User</Link></li>
        <li> <Link to="/messages">Messages</Link></li>
        <li> <Link to="/transition">Transition</Link></li>
        <li> <Link to="/statistics">Statistics</Link></li>
        <li> <Link to="/setting">Setting</Link></li>



      </ul>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}


    
      
    </div>

    </Router>
  )
}
