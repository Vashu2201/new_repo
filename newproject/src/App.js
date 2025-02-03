import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';

function App() {
  return (
    <div className='background'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/services' Component={ServicePage} />
          <Route path='/contact' Component={ContactPage} />
          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
