import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './components/pages/Home'
import Register from './components/pages/Register'



const itemStyles = {
  title: 'text-blue-800 text-xl pl-10 font-semibold',
  base: 'text-red-800 text-xl font-bold',
}


function App() {


  return (
    <div className='h-[100vh]'>

      <Router>
        <Routes>

          <Route path="/register" element={<Register/>}/>

          <Route path="/home" element={<Home/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App