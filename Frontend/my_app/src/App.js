import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar.js';
import News from './component/News.js';
import Newspage from'./component/Newspage.js'; 
import Home from "./component/Home.js";
import Category from "./component/category.js";
import CatComp from "./component/CatComp.js";
import './App.css';
import './nav.css';
import './news.css';
import './newspg.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Newspage />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/categories" element={<div>Categories Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:Catcomp" element={<CatComp/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
