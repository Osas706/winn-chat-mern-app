import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import Background from "../src/components/Background"
import SignUp from './pages/signup/SignUp';

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <SignUp />
      <Background />
    </div>
  )
}

export default App;
