import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Certificate from './components/certification/Certificates';
import CatsPage from './components/cats/CatsPage';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <main className="main">
              <Home />
              <About />
              <Services />
              <Resume />
              <Portfolio />
              <Certificate />
              <Contact />
            </main>
          }
        />
        {/* Cats Page Route */}
        <Route path="/cats" element={<CatsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
