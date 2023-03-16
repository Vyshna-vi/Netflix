import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignUp />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
