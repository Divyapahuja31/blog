import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import First from './Blogs/First';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPost/>} />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/first" element={ <First/> } />

        <Route path="*" element={<div className="text-center text-2xl text-red-500 mt-10">404 Error</div>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
