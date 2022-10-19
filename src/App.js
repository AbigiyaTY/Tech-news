import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import DetailContain from './Components/DetailContain/DetailContain';

function App() {
  return (
    <div className="App" id="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailContain />} />
      </Routes>
    </div>
  );
}

export default App;
