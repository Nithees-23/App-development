import React from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from './components/userSlice';
import "./Layout.css";
import total from "./assets/totalcustomer.png"
import tstock from "./assets/totalstock.png"
import ostock from "./assets/outofstock.png"
const Layout = () => {
    const user = useSelector(selectUser)
    console.log(user);
  return (
    <div>
        <Sidebar />
        <Navbar />
        <div className='ename'>
            <div><p >Welcome! <span>{user? user.email : "Admin"}</span></p></div>
            <div className='gridcon'>
            <div className='laycont'><img src={tstock} alt='img'/><span className='layspan1'>Total Stocks</span></div>
            <div className='laycont1'><img src={total} alt='img'/> <span className='layspan'> Total customers </span></div>
            <div className='laycont2'><img src={ostock} alt='img' width={80} height={80}/><span className='layspan2'> Out of stocks</span> </div>
            </div>
        </div>
    </div>
  )
}

export default Layout;