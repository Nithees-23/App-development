import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import "../pages/inventory.css"

const Inventory = () => {
    
        const data=[
            {
                sno:'1',
                stock_name:'paste',
                category_id:'101',
                qty:'10',
                price:'40'
            },
            {
                sno:'1',
                stock_name:'paste',
                category_id:'101',
                qty:'10',
                price:'40'
            },
            {
                sno:'1',
                stock_name:'paste',
                category_id:'101',
                qty:'10',
                price:'40'
            },
            {
                sno:'1',
                stock_name:'paste',
                category_id:'101',
                qty:'10',
                price:'40'
            },
        ]
    return (
        <div >
            <Sidebar />
            <Navbar />
        <div className='invcon'>
            <div>
                <table>
                    <tr>
                        <th>sno</th>
                        <th>stock name</th>
                        <th>category id</th>
                        <th>qty</th>
                        <th>price</th>
                    </tr>
                    {data.map((val,key)=>{
                         return(
                            <tr key={key}>
                            <td>{val.sno}</td>
                            <td>{val.stock_name}</td>    
                            <td>{val.category_id}</td>
                            <td>{val.qty}</td>
                            <td>{val.price}</td>
                            </tr>
                         ) 
                    }
                    )}
                </table>
            </div>
        </div>
        </div>
      )
}

export default Inventory;



;