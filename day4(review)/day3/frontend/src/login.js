import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { ReactDOM } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [login,setLogin]= useState({
    email:"",
    password:"",
  });
  const handlechange =(e)=>{
    const {name,value}=e.target;
    setLogin({...login,[name]:value});  
    console.log( "Email "+login.email);
    console.log( "Password "+login.password);
  };
  const Login=(e)=>{
    e.preventDefault();
    if(login.email===""||login.password==="")
    {
     // console.log("Enter all fields");
      toast.error("Enter all fields");
    }
    else if(login.password.length<8){
      toast.error("password should contain 8 character");
    }
    else{
      navigate("/s");
    }
  }
  return (
    <div className="cover">
      <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
        <h1>login</h1>
       <div><input type="text" placeholder='username'className='lusername' name='email' id='mail' onChange={handlechange} value={login.email}/><PersonIcon className='icon1'/></div>
       <div ><input type="password" placeholder='password'className='paa' name='password' id='password' onChange={handlechange} value={login.passsword}/><LockIcon className='icon2'/></div>
       <div><input type="checkbox" className='qt'/>Remember me</div>
       <button type='submit' className='btn' onClick={Login}>login</button>
       <div className='ls'>Don't have an account?<span className='sp' onClick={()=>navigate("/s")}>signup</span></div>
    </div>
  )
}

export default Login;