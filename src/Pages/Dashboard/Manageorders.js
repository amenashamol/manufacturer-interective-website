import React,{useState,useEffect} from 'react';
import OrdersRow from './OrdersRow';

const Manageorders = () => {
    const [allOrders,setAllOrders]=useState([])

    useEffect(()=>{
    fetch('http://localhost:4000/allorders')
    .then(res=> res.json())
    .then(data=>setAllOrders(data))
 

 },[])

    return (
        <div>
        <h2 className="text-2xl"></h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Info</th>
                        <th>date</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>payment</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       allOrders.map((allOrder,index)=><OrdersRow
                       index={index}
                       key={allOrder._id}
                       allOrder={allOrder}
                      
                       ></OrdersRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Manageorders;
