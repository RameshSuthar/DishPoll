import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import PrivateRoute from './components/ProtectedRoute';
import Home from './components/Home/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
