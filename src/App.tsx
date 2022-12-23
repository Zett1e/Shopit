import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import FailToast from './Components/Popup/FailToast';
import SuccessToast from './Components/Popup/SuccessToast';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <SuccessToast/>
      <FailToast/>
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;
