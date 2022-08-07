import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './auth/login';
import Signup from './auth/signup';
import TodoLayout from './components/TodoLayout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
