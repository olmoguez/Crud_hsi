import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App