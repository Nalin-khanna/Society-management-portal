import './App.css'
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to={<AdminDashboard/>} />} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/AdminDashboard' element={<AdminDashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
