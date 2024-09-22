import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from  './components/pages/Home'
import Messages from './components/pages/Messages'
import Newuser from './components/pages/Newuser'
import Overview from './components/pages/overview'
import Setting from './components/pages/Setting'
import Statistics from './components/pages/Statistics'
import Transition from './components/pages/Transition'

export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route  index element={<Home />}/>
      <Route  path="/message" element={<Messages />}/>
      <Route  path="/newuser" element={<Newuser />}/>
      <Route  path="/overview" element={<Overview />}/>
      <Route  path="/setting" element={<Setting />}/>
      <Route  path="statistics/" element={<Statistics />}/>
      <Route  path="/transition" element={<Transition />}/>

    </Routes>
    </BrowserRouter>



    

    </>
  )
}
