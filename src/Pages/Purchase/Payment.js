import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
    const{id}=useParams()
    return (
        <div>
            <h2>{id}</h2>
           {
            toast('order success')
           }
           
        </div>
    );
};

export default Payment;