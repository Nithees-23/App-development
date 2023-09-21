import React, { useState } from 'react'
import "../components/Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from './userSlice';
import { useDispatch } from 'react-redux';
 

const Navbar = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch()
    const [select,setSelect]=useState();
    const handleLogout = () =>{
        dispatch(logout());
        navigate('/')
    }
  return (
    <div className='navcover'>
        <div className='searchbox'><input type='text' className='navtxt' placeholder='Type to search '/><SearchIcon className='navs'/></div>
        <button  className='btn-navlog' onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Navbar;