import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';

function App() {

  

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<> <Home />  </>} />
        </Routes>
      </Router> */}
      <Home />


    </>
  )
}

export default App
