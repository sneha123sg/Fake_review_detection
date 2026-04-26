import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import AnimatedGrid from './components/AnimatedGrid';
import Home from './pages/Home';
import DetectReview from './pages/DetectReview';
import UploadFile from './pages/UploadFile';
// import About from './pages/About';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
        {/* Animated Grid Background */}
        <AnimatedGrid />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 via-black/50 to-black z-10" />
        
        {/* Navigation */}
        <div className="relative z-20">
          <Navbar />
        </div>
        
        {/* Main Content */}
        <main className="flex-grow relative z-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<DetectReview />} />
            <Route path="/upload" element={<UploadFile />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/result" element={<Result />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <div className="relative z-20">
          {/* <Footer /> */}
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </Router>
  );
}

export default App;