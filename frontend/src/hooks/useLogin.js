import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser} = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors({ username, password});
    if(!success) return;

    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        //save to localstorage
        localStorage.setItem("chat-user", JSON.stringify(data));
        //useContext
        setAuthUser(data);
    } catch (error) {
        toast.error(error.message)
        //console.log(error);
    }  finally{
        setLoading(false);
    }
  };

  return {login, loading};
};

export default useLogin;


const handleInputErrors = ({ username, password}) => {
    if( !username || !password){
       toast.error('Please fill in all the fields');
       return false
    };

    if(password.length < 5){
        toast.error('Password must be at least 6 charaters');
        return false;
    };

    return true;
};
