import React from 'react'
import Landingnavbar from './Landingnavbar';
import "./Contactus.css";
import collab from "../assets/collaboration.png"
import cust from "../assets/customer.png"
import feedback from "../assets/feedback.png"
import Lanfooter from './Lanfooter';
const Contactus = () => {
  return (
    <div>
        <Landingnavbar/>
        <div className='contact'>
            <div className='cntcont'>
                <h1></h1>
                <div className='stcnt1'><img src={collab} width={70} height={70}/><p className='cimg1'>If you have a collaboration idea or would like to discuss potential partnerships, please get in touch.</p></div>
                <div className='stcnt2'><img src={cust} width={70} height={70}/><p className='cimg2'>Our support team is available 24/7 to assist our valued clients with any technical issues</p></div>
                <div className='stcnt3'><img src={feedback} width={70} height={70}/><p className='cimg3'>If you have any ideas for improving our services or if you've had a positive experience with our team, we'd love to hear from you</p></div>
            </div>
            <div className='cntcont1'>
                <p>Get in touch</p>
                <form className='ctnform'>
                    <div className='cntin1'>
                       <div><input type='text' placeholder='firstname'/></div>
                        <div><input type='text' placeholder='lastname'/></div>
                    </div>
                    <div className='cntin2'>
                        <input type='text' placeholder='934123456'/>
                        <input type='text' placeholder='email'/></div>
                    <div className='cntin3'>
                        <textarea placeholder='sendmessage'/>
                    </div>
                    <div >
                        <button className='btn1'>send message</button>
                    </div>
                </form>
            </div>
        </div>
            <div className='ftcntcont'>
                <h1>Start Your journey with our stock Management platform</h1>
                <button className='exbtn'>explore now</button>
            </div>
            <div className='cntfoot'>
            <Lanfooter />
            </div>
    </div>
  )
}

export default Contactus;