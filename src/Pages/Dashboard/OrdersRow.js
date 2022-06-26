import React from 'react';

const OrdersRow = ({allOrder,index}) => {
    
    return (
        
          <tr>
            <th>{index+1}</th>
            <th>{allOrder.email}</th>
            <td>{allOrder.formattedDate}</td>
            <td>{allOrder.orderName}</td>
            <td>{allOrder.quantity}</td>
            <td>{allOrder.amount}</td>
             <td>{!allOrder.paid && <p><span className='text-success'>unPaid</span></p>}
             {allOrder.paid && <p><span className='text-success'>Paid</span></p>}
                                    </td>
             
        </tr>  
        
    );
};

export default OrdersRow;