import { Link } from '@mui/material';
import React, { useState } from 'react'
import { ReactDOM } from 'react';
import "./signup.css"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';


const Signup = () => {
  const navigate = useNavigate();
  const[signup,setSignup]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
  });
  const handlechange =(e)=>{
    const{name,value}=e.target;
    setSignup({...signup,[name]:value});
    console.log(signup.name);
    console.log(signup.email);
    console.log(signup.password);
    console.log(signup.cpassword);
  }
  const Signup =(e)=>{
    e.preventDefault();
    if(signup.name===""||signup.email===""||signup.password===""||signup.cpassword==="")
    {
      toast.error("Enter all fields");
    }
    else if(signup.password.length<8){
      toast.error("password should contain 8 character");
    }
    else if(signup.password!==signup.cpassword){
      toast.error("password should be same");
    }
    else{
      navigate("/");
    }
  }
  return (
    <div className='cover2'>
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
     <h1>Sign up</h1>
     <div><input type='text'placeholder='fullname' className='name' name='name' id='name' onChange={handlechange} value={signup.name}/><PersonIcon className='icon3'/></div>
     <div><input type='email' placeholder='mail' className='mail'name='email' id='email'onChange={handlechange} value={signup.email}/><MailIcon className='icon4'/></div>
     <div><input type='password' placeholder='password' className='password'name='password' id='password'onChange={handlechange} value={signup.password}/><LockIcon className='icon5'/></div>
     <div><input type='password' placeholder='confirm password' className='cpassword' name='cpassword' id='cpassword'onChange={handlechange} value={signup.cpassword}/><CheckIcon className='icon6'/></div>
     <div className='lo'>Alreary have an account?<span onClick={()=>navigate('/')} className='sp'>Login</span></div>
     <button className='btn'onClick={Signup}>signup</button>
    </div>
  )
}

export default Signup;