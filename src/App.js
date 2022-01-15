import React from 'react';
import './styles/styles.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lab from './components/Lab'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<h2>Ministerio Emanuel Home</h2>} /> 
          <Route path="/lab" element={<Lab/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
