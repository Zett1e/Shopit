import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;
