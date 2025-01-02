import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Register from "./components/page/Register.jsx"

function App() {

  return (
    <div className="h-device-height w-full">

    <Router>
      <Routes>

        <Route path="/register" element={<Register/>} />

      </Routes>
    </Router>

    </div>
  )
}

export default App
