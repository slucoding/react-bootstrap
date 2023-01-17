import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NaviBar from './Components/Navibar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;