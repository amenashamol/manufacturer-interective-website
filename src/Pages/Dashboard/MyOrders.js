import { signOut } from 'firebase/auth';
import React ,{ useEffect, useState }from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {toast} from 'react-toastify'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
     const navigate = useNavigate()

     
    
        const {data,isLoading,refetch}= useQuery([[], user.email], ()=> fetch(`http://localhost:4000/order?email=${user.email}` ,{
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
         
        
        )

        if(isLoading){
            return <Loading></Loading>
         }
        //  const events = data ?? []


const handleDelete=id=>{
    fetch(`http://localhost:4000/order/${id}`,{
        method:'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }
    })

    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            toast.success(`order is deleted`)
             refetch()
        }
    })
}

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
                           data.map((a, index) => <tr key={a._id}>
                               <th>{index+1}</th>
                               <td>{a.formattedDate}</td>
                                <td>{a.orderName}</td>
                                <td>{a.quantity}</td>
                                 <td>{a.amount}</td>
                                 <td><button className="btn btn-xs" onClick={()=>handleDelete(a._id)}>Delete</button></td> 
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