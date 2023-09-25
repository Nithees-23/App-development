import React from 'react';
import "./Lanfooter.css";
import {Link} from 'react-router-dom';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png"
const Lanfooter = () => {
  return (
    <div className=''>
        <div className="mainfoot">
            <div className='footercont'>
              <input type='text' placeholder='email'></input>
                <button>subscribe</button>
            </div>
            <div className='fotcon'>
              <Link to="/about"> aboutUs</Link>
              <Link to="/contactus">Contactus</Link>
              <Link to="/terms">terms and condition</Link>
              <Link to="/faq">FAQ</Link>
            </div>
        </div>
        <div className='mainfoot1'>
          <div className='linik'>© Copyright 2023 Selfmade Ninja Academy Pvt ltd</div>
          <div className='linic'>
            <Link to="https://www.instagram.com/"><img src={instagram} height={23}/></Link>
            <Link to="https://www.youtube.com/watch?v=jk8L4_Wx40U"><img src={youtube} height={25}/></Link>
            <Link to="https://www.facebook.com/campaign/landing.php?campaign_id=15316858002&extra_1=s%7Cc%7C589521711734%7Cb%7Cfacebook%7C&placement=&creative=589521711734&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D15316858002%26adgroupid%3D130780223435%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9298961%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw38SoBhB6EiwA8EQVLnPxq5v_Zwx8gAjJSooQCdXnaB883ovJJcPGDR2CmZ13LwhOnxl2QRoCoXQQAvD_BwE"><img src={facebook} height={25}/></Link>
           <Link to="https://www.linkedin.com/login"> <img src={linkedin} height={30 }/></Link>
          </div>
        </div>
    </div>
  )
}

export default Lanfooter;