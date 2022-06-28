import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
 import CheckoutForm from './CheckoutForm';

 const stripePromise = loadStripe('pk_test_51LEYIlA4ZvOXwqZLaG36ithhGcZERKGgXT5fvVSSanynZNjMJs68DsISjBTToWO87pUcLfwRsBb7mAiTiy3F8LoZ00s6Ko0gV2');

const Payment = () => {
    const { id } = useParams();
    const url = `https://aqueous-harbor-99423.herokuapp.com/booking/${id}`;

    const { data: product, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {product.userName}</p>
                    <h2 class="card-title">Please Pay for<span className="text-success font-bold" >{product.orderName}</span>  product</h2>
                    <p>Booking Date: <span className='text-orange-700'>{product.formattedDate}</span></p>
                    <p> Quantity : {product.quantity}</p>
                    <p>Please pay: ${product.amount}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;