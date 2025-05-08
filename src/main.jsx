import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import "animate.css";
import Navbar from './components/Navbar.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-slate-800'>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>


      </BrowserRouter>
    </div>
      
  </StrictMode>,
)

