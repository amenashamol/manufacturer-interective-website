import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({setDeletingOrder,index,a}) => {
    return (
       
            <tr key={a._id}>
                               <th>{index+1}</th>
                               <td>{a.formattedDate}
                               </td>
                                <td>{a.orderName}</td>
                                <td>{a.quantity}</td>
                                 <td>{a.amount}</td>
                                 
                                <td>
                                    {(a.amount && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.amount && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                                {/* <td>{!a.paid && <button className="btn btn-xs" onClick={()=>handleDelete(a._id)}>Delete</button>}</td>  */}
                                <td>{!a.paid && <label onClick={() => setDeletingOrder(a)} for="delete-confirm-modal"className="btn btn-xs btn-error">Delete</label>}</td> 
                            </tr>
       
    );
};

export default MyOrder;