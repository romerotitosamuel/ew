import React from 'react';
import './styles/styles.scss'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Lab from './components/Lab'
import Add from './components/Add'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <Link to='/add'>Hacia add</ Link> } /> 
          <Route path="/add" element={<Add/>} />
          <Route path="/lab" element={<Lab/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
