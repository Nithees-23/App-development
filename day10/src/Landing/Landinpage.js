import React from 'react'
import Landingnavbar from './Landingnavbar';
import "./Landinpage.css";
import lanpic11 from "../assets/lanpic11.svg";
import { Navigate, useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Landinpage = () => {
  const navigate=useNavigate();
  return (
    <div>
    <Landingnavbar/>
    <div className='lancont'>
        <div className='landcont'>
         <div><h1>Welcome to the Future of Inventory Management!</h1>
         <h2>We're thrilled to have you on board 🚀</h2>
         <h3>Stay in touch with your team and partners through our integrated chat and communication tools.ur dedicated team is here to assist you every step of the way. If you ever have questions or need assistance, don't hesitate to reach out.</h3>
         <button className='btns12'>start now</button>
         </div> 
        <img src="https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_640.png"  alt="" width="600" height="512" loading="lazy"/>
        </div>
          <div className='t'>Trusted by Over 36,000 Companies Worldwide</div>
        <div className='mi'>
          <marquee >
            <img src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg " width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg"width={150} height={100} />
            <img src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg"width={150} height={100} />
            <img src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg"width={150} height={100} />
            <img src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg"width={150} height={100} />
            <img src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg"width={150} height={100} />
            <img src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" width={150} height={100}/>
            <img src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg"width={150} height={100} />
            <img src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" width={150} height={100}/>
          </marquee>
        </div>
        {/* <div className='ancont'>
          <div className='border'>
          <div className='form1'></div>
          </div >
        </div>  */}
        <div className='contimg'>
            <h1>Get ready to:</h1>
            <ul>
              <li><h3>📦 Take control of your inventory like never before.</h3></li>
              <li><h3>💼 Streamline your operations for maximum productivity.</h3></li>
              <li><h3>📈 Unlock valuable insights to make informed decisions.</h3></li>
              <li><h3>🌐 Expand your business horizon effortlessly.</h3></li>
            </ul>
            <button onDoubleClick={()=>navigate("/")} className='start'>start now <ArrowRightAltIcon className='arric'/></button>
          </div>
         <div className='form2'><img src="https://connecteam.com/wp-content/uploads/2021/06/Manufacturing.png" height="700" width="850"/></div>
         <div className='form3'><img src="https://connecteam.com/wp-content/uploads/2021/06/Manufacturing_scheduling-_Work-Announcements_-Chat_-and-Training.png" height="700" width="850"/></div>
         <div className='contimg1'>
          <h1>Our Story</h1>
          <p>Redwings has grown from a small startup to a leading name in the inventory management industry.
             Our founders, lingesh, shared a passion for technology and a deep understanding of the challenges businesses face when it comes to managing their inventory.
              Their combined expertise laid the foundation for our innovative solutions.</p>
         </div>
    </div>
    </div>
  )
}

export default Landinpage;