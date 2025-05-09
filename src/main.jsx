import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import "animate.css";
import Navbar from './components/Navbar.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Start from './components/start.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-slate-900 '>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Start" element={<Start />} />
      </Routes>


      </BrowserRouter>
    </div>
      
  </StrictMode>,
)

