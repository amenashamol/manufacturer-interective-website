import { signOut } from 'firebase/auth';
import React ,{ useEffect, useState }from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
     const navigate = useNavigate()

     useEffect(() => {
    if (user) {
        fetch(`http://localhost:4000/order?email=${user.email}` ,{
            method: 'GET',
             headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res => {
           
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
        })
         .then(data=>setMyOrders(data))
    }
  
}, [user])

    return (
        <div>
            <div>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Info</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((a, index) => <tr key={a._id}>
                               <th>{index+1}</th>
                               <td>{a.formattedDate}</td>
                                <td>{a.orderName}</td>
                                <td>{a.quantity}</td>
                                 <td>{a.amount}</td>
                                 <td><button className="btn btn-xs">Delete</button></td> 
                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyOrders;