import React, { useState } from 'react'
import logo from '../assets/log2.png'
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import { Navigate, useNavigate } from 'react-router-dom';
 import AddBusinessIcon from '@mui/icons-material/AddBusiness';
 import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import Inventory from '../pages/Inventory';
const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div>
        <div className='container1'>
            <div className='imgc'> <img src={logo}  alt='logo'/> <span className='logo-name' >Red wings</span></div>
            <div><button  className='das' onClick={()=>navigate("/admin")}><DashboardIcon /><span className='dicon'> Dashboard</span></button></div>
            <div><button  className='addproducts' onClick={()=>navigate("/addproduct")}><AddBusinessIcon /> <span className='aicon'>Addproducts</span></button></div>
            <div><button  className='view' onClick={()=>navigate("/viewproduct")}><ViewCarouselIcon /> <span className='vicon'>ViewProduct</span></button></div>
            <div ><button className='inv' onClick={()=>navigate("/inv")}><InventoryIcon /> <span className='iicon' >Inventory</span></button></div>
            <div><button  className='cus' onClick={()=>navigate("/cust")}><PersonIcon  /> <span className='picon'>customers</span></button></div>
        </div>
    </div>
  )
}

export default Sidebar;