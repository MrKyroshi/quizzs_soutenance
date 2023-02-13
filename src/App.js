import React from 'react';
import Test from './Composants/Test';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Composants/Home';
import './App.css';
import NavBar from './Composants/NavBar';


export default function App() {

   
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Test/>} />      
       
      </Routes>
      </BrowserRouter>
  )
}