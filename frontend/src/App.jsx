import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Design from './pages/Design';
import Home from './pages/Home';
import Folio from './pages/Folio';
import Register from './pages/Register';
import Auth from './pages/auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Protected routes */}
      <Route element={<Auth />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/design' element={<Design />} />
      </Route>

      {/* Place dynamic route last to prevent overriding */}
      <Route path='/:id' element={<Folio />} />
    </Routes>
  );
}

export default App;
