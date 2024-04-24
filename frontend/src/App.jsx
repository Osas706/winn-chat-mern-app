import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import Login from './pages/login/Login';
import Background from "../src/components/Background"
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { useAuthContext } from './context/AuthContext';


const App = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Background />
      <Toaster />

      <Routes>
        <Route path='/' element={authUser ?  <Home /> : <Navigate to={"/login"} /> } />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </div>
  )
}

export default App;
