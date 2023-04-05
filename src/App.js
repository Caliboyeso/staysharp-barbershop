import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Barbers from './Components/Barbers/Barbers';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Barbers />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;