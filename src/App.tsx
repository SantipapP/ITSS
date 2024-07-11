import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import NotFoundPage from './components/NotFoundPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
