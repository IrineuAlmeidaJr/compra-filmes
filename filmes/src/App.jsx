import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Assinaturas } from './pages/Assinaturas';
import { Home } from './pages/Home';

import { Login } from './pages/Login';
import { MeusFilmes } from './pages/MeusFilmes';

export default function  App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/meusfilmes" element={<MeusFilmes />} />
      </Routes>
    </Router>
  )
}

