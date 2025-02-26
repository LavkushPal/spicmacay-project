import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Activity from './pages/Activity';
import Feedback from './pages/feedback';
import Gallery from './pages/gallary';
import Team from './pages/team';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/activities' element={<Activity />} />
             <Route path='/team' element={<Team />} />  
            <Route path='/feedback' element={<Feedback />} />     
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;