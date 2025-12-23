import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Activities from './pages/Activities';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Trekking from './pages/activities/Trekking';
import RiverRafting from './pages/activities/RiverRafting';
import Paragliding from './pages/activities/Paragliding';
import Skiing from './pages/activities/Skiing';
import ScubaDiving from './pages/activities/ScubaDiving';
import DesertSafari from './pages/activities/DesertSafari';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          {/* Auth Routes (No Header/Footer) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Main Routes (With Header/Footer) */}
          <Route path="/*" element={
            <>
              <Header />
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/activities/trekking" element={<Trekking />} />
                  <Route path="/activities/river-rafting" element={<RiverRafting />} />
                  <Route path="/activities/paragliding" element={<Paragliding />} />
                  <Route path="/activities/skiing" element={<Skiing />} />
                  <Route path="/activities/scuba-diving" element={<ScubaDiving />} />
                  <Route path="/activities/desert-safari" element={<DesertSafari />} />
                </Routes>
              </motion.main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;