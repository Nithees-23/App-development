import React from 'react'
import "./Landingnav.css"
import logo from "../assets/log2.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
const Landingnavbar = () => {
  const navigate=useNavigate();
  return (
    <div className='lannav'>
        <div><img src={logo} /></div>
        <div>
          <button className='home' onClick={()=>navigate("/lan")}>Home</button>
          <button className='abt' onClick={()=>navigate("/about")}>aboutUs</button> 
          <button className='cntus' onClick={()=>navigate("/contactus")}>contactUs</button> 
          <button className='prd'>products</button> 
          <button className='btns1'>signup</button> 
          <button className='btnl1'><AccountCircleIcon className='acc'/>login</button>
        </div>
    </div>
  )
}

export default Landingnavbar;