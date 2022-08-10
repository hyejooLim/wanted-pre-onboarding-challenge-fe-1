import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './auth/login';
import Signup from './auth/signup';
import { TodoProvider } from './TodoContext';
import TodoLayout from './components/TodoLayout';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoLayout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/todos:id' element={<TodoDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
