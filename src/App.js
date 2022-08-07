import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './auth/login';
import Signup from './auth/signup';
import TodoContext from './TodoContext';
import TodoLayout from './components/TodoLayout';
import './App.css';

function App() {
  return (
    <TodoContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoLayout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/todos:id' element={<TodoDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </TodoContext>
  );
}

export default App;
