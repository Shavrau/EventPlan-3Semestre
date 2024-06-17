import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fontawesome.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'  

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Event from './pages/Event/Event'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './pages/Profile/Profile'
import RecoverPass from './pages/RecoverPass/RecoverPass'
import FAQ from './pages/FAQ/FAQ'
import EventList from './pages/EventList/EventList.jsx'
import Admin from './pages/Admin/Admin'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container-flui">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/recoverpass" element={<RecoverPass />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
