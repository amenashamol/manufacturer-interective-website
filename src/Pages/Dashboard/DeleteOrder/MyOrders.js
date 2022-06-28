import { signOut } from 'firebase/auth';
import React ,{ useEffect, useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MyOrder from './MyOrder';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder]=useState(null)
    const [user] = useAuthState(auth);
     const navigate = useNavigate()

     
    
        const {data,isLoading,refetch}= useQuery([[], user.email], ()=> fetch(`https://mysterious-garden-19362.herokuapp.com/order?email=${user.email}` ,{
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
        

    return (
        
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
                        <th>Payment</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           data.map((a, index) => <MyOrder
                           key={a._id}
                           a={a}
                           setDeletingOrder={setDeletingOrder}
                           index={index}
                           refetch={refetch}
                           >

                           </MyOrder>)
                        }


                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteConfirmModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteConfirmModal>}
        </div>
       
    
    );
};

export default MyOrders;