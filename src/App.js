import React from 'react';
import './styles/styles.scss'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Lab from './components/Lab'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <Home /> } /> 
          <Route path="/add" element={<Add/>} />
          <Route path="/lab" element={<Lab/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
