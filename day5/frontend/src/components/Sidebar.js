import React, { useState } from 'react'
import logo from '../assets/log2.png'
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import { Navigate, useNavigate } from 'react-router-dom';
import Inventory from '../pages/Inventory';
const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div>
        <div className='container1'>
            <div className='imgc'> <img src={logo}  alt='logo'/> <span className='logo-name' >Red wings</span></div>
            <div><button  className='das' onClick={()=>navigate("/admin")}><DashboardIcon /><span className='dicon'> Dashboard</span></button></div>
            <div ><button className='inv' onClick={()=>navigate("/inv")}><InventoryIcon /> <span className='iicon' >Inventory</span></button></div>
            <div><button  className='cus' onClick={()=>navigate("/cust")}><PersonIcon  /> <span className='picon'>customers</span></button></div>
        </div>
    </div>
  )
}

export default Sidebar;