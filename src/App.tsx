import React from 'react';
import './App.css';
import AddNewCard from './components/AddNewCard';
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CardDetail from './pages/CardDetail';
import Container from '@mui/material/Container'

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar></Navbar>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home/>}></Route>        
          <Route path="/card/:id" element={<CardDetail/>}></Route>        
        </Routes>
        </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
