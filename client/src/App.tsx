import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Spacer } from '@nextui-org/react'
// pages
import Home from './components/pages/Home'

// components
import Header from "./components/Header"


const itemStyles = {
  title: 'text-blue-800 text-xl pl-10 font-semibold',
  base: 'text-red-800 text-xl font-bold',
}


function App() {


  return (
    <div className='h-[100vh]'>
      <Header/>


      <Router>
        <Routes>
          

          <Route path="/home" element={<Home/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App