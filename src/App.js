import React from 'react';
import './styles/styles.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lab from './components/Lab'
import Add from './components/Add'
import Home from './components/Home'
import Content from './components/Content'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <Home /> } /> 
          <Route path="/add" element={<Add/>} />
          <Route path="/lab" element={<Lab/>} />
          <Route path="/content" element={<Content/>} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
