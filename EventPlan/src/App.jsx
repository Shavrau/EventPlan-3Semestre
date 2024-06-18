import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './fontawesome.jsx';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Event from './pages/Event/Event';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile/Profile';
import RecoverPass from './pages/RecoverPass/RecoverPass';
import FAQ from './pages/FAQ/FAQ';
import EventList from './pages/EventList/EventList.jsx';
import Admin from './pages/Admin/Admin';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </AuthProvider>
    );
}

function AppContent() {
    const { darkMode } = useTheme();

    return (
        <BrowserRouter>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
