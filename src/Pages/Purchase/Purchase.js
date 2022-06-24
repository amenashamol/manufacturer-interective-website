import React, {useEffect,useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Purchase.css'

const Purchase = ({partInf,setPartInf}) => {
    const{_id,img,name,description,maximum_order_quantity, minimum_order_quantity, available_order_quantity} =partInf
    const [user] =useAuthState(auth)
   
    
    
            
            
                
            
        
        
    

    // const handleCreateUser=event=>{
    //     event.preventDefault()
       
    //     console.log('shipping')
        
    // }

    return (
        <div className="hero min-h-screen">
            
        <div className="hero-content flex-col lg:flex-row ">
             <div className="card  shadow-xl h-50">
                   <div className="card-body">
                       <h2 className="card-title uppercase">Cheak</h2>

                        
                           
                            <p> {img} </p>
                            <p> {name} </p>
                            <p>Education: {description}</p>
                            <p>maximum_order_quantity: {maximum_order_quantity} </p>
                            <p>minimum_order_quantity: {minimum_order_quantity} </p>
                            <p>available_order_quantity: {available_order_quantity} </p>
                    
                       
                     </div>

             </div>
             <div className='login-container'>
            
            <div>
                <h2 className='login-title'>Update User Information</h2>
    
                {/* <form className='login-form' onSubmit={HandleUpdate} >
                    
                <input className="mb-2" name='name' placeholder="name" value={updateData.name} onChange={(e)=>{setUpdateData(e.target.value)}} />
                   
                        <input value={user?.email} readOnly type='eamil' name='email' />
                        
                        <input type='text' name='education' value={updateData.education} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your Education'/>
                   
                        <input type='text' name='address' value={updateData.address} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your Location' />
                   
                        <input  type='text' name='phone' value={updateData.phone} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your Phone' />
                        <input  type='text' name='linkedIn' value={updateData.linkedIn} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your LinkedIn'/>
                        <input type='submit' value="update"/>
                       
                       
                    
                   
                    
                </form> */}
                
            
            </div>
            
        </div>
             </div>

             </div>
    );
};

export default Purchase;