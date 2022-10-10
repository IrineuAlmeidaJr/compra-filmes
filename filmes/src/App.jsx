import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Administrador } from './pages/Administrador';
import { Assinaturas } from './pages/Assinaturas';
import { Home } from './pages/Home';

import { Login } from './pages/Login';
import { MeusFilmes } from './pages/MeusFilmes';
import { Pagamento } from './pages/Pagamento';

export default function  App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/meusfilmes" element={<MeusFilmes />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/administrador" element={<Administrador />} />
      </Routes>
    </Router>
  )
}

