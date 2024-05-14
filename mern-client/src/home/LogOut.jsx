import React, { useContext } from 'react'
import { Alert } from "flowbite-react";
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handlelogout = () =>{
        logOut().then(() => {
            // Sign-out successful.
            <Alert color="info">
              <span className="font-medium">Info alert!</span> Sign-out successful !!!
            </Alert>
            alert('Sign-out successful !!!');
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-600 px-8 py-2 text-white rounded'
        onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default LogOut