import React, {useEffect,useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './Purchase.css'
import { useQuery } from 'react-query';
import { format } from 'date-fns';

import { toast } from 'react-toastify';


const Purchase = () => {
    const [date, setDate] = useState(new Date());
   
    const {id}=useParams()
    const [user] =useAuthState(auth)
    const formattedDate = format(date, 'PPP');
    
    const {data,isLoading,refetch}= useQuery(['use', id], ()=>fetch(`http://localhost:4000/part?id=${id}`)
    .then(res => res.json())
) 
 if(isLoading){
    return <Loading></Loading>
 }


 const handleOrder = event => {
    event.preventDefault();
    

    const order = {
        userName:event.target.name.value,
        formattedDate,
        orderName:  data.name,
        
         
         email:user.email,
        quantity:event.target.orderQuantity.value,
        amount:(event.target.orderQuantity.value) * (data.price)
        
        
    }
   
            
 const url='http://localhost:4000/orders'
 fetch(url,{
     method:'POST',
     headers:{
         'content-type':'application/json'
     },
     body:JSON.stringify(order)

 })
 .then(res=>res.json())
 .then(data=>{
     //   setIsReload(!isReload)
   toast.success('order success')
    event.target.reset()
 })

}      
      

    return (
        <div className="hero min-h-screen">
          
        <div className="hero-content flex-col lg:flex-row ">
             <div className="card  shadow-xl h-50">
             <h2 className="card-title uppercase text-center">Cheaking your information</h2>
             <div className="card-body">
                       
                             <img className='w-50'  style={{height:"200px"}} src={data.img} alt=""/> 
                            <p>name: {data.name} </p>
                            <p>description: {data.description}</p>
                            <p>maximum_order_quantity: {data.maximum_order_quantity} </p>
                            <p>minimum_order_quantity: {data.minimum_order_quantity} </p>
                            <p>available_order_quantity: {data.available_quantity} </p>
                            <p>price: {data.price} </p>
                           
                        </div>

             </div>
             <div className='login-container'>
            
            <div>
                <h2 className='login-title'>Update User Information</h2>
    
                <form onSubmit={handleOrder}>
                    
                <input className="mb-2" name='name' value={user?.name} placeholder="name"  />
                   
                        <input type='eamil' name='email' value={user?.email}/>
                        
                        <input type='text' name='phone'  placeholder='01723456345'/>
                         <textarea type='text' name='phone' placeholder='your complete address'/>
                        
                   
                         <input type='number' name='orderQuantity'  min={data.minimum_order_quantity} max={data.maximum_order_quantit} placeholder={data.minimum_order_quantity}  />
                         <input type='submit' className='bg-accentry'   value="Purchase" />
                      
                       
                       
                    
                   
                    
                </form>
                
            
            </div>
            
        </div>
             </div>

             </div>
    );
};

export default Purchase;