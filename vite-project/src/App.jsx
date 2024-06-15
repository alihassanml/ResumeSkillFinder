import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import FileUpload from './components/fileupload';
import Model1 from './components/Model1'
import Model2 from './components/Model2'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar title="Todos" />

      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/Upload" element={<FileUpload/>} />
        </Routes>

        <Routes>
          <Route path="/spacy-model" element={<Model1/>} />
        </Routes>

        <Routes>
          <Route path="/job-dec" element={<Model2/>} />
        </Routes>

        </switch>
      </Router>
    </>
  );
}

export default App;

