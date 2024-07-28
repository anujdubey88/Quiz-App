import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Thankyou from './components/Thankyou';
import Time from './components/Time';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Time />
              <Question />
            </>
          } 
        />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
