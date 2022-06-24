import React from 'react';

const OrdersRow = ({allOrder,index}) => {
    return (
        
          <tr>
            <th>{index+1}</th>
            <td>{allOrder.formattedDate}</td>
            <td>{allOrder.orderName}</td>
            <td>{allOrder.quantity}</td>
            <td>{allOrder.amount}</td>
            {/* <td>{role !== 'admin' && <button onClick={makeAdmin}className="btn btn-xs">Make Admin</button>}</td> */}
        </tr>  
        
    );
};

export default OrdersRow;