import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Nav />
    <Container  />
    
      
    </>
  )
}

export default App
