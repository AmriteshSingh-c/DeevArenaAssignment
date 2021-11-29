import React from 'react';
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import Home from "./pages/Home.js";
import Add from "./pages/Add.js";
import View from "./pages/View.js";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.js';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <ToastContainer position="top-center" />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/add" element={<Add/>} />
      <Route exact path=  "/update/:id" element={<Add/>} />
      <Route exact path="/view/:id" element={<View/>} />
    </Routes>
  </div>
  </BrowserRouter>
    
  );
}

export default App;
