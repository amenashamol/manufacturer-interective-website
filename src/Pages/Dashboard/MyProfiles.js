import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Purchase = () => {
    const [user] =useAuthState(auth)
    const {
        register,
        handleSubmit,
        } = useForm();
    
        const onSubmit = (data) =>{
            console.log(data);
         
            const url='http://localhost:4000/user'
            fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
         
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
            })
         
         }

   

   
    
    

    

    return (
        <div className='login-container'>
            
            <div>
                <h2 className='login-title'>User Information</h2>

                <form className='login-form' onSubmit={handleSubmit(onSubmit)} >
                    
                <input className="mb-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                   
                        <input value={user?.email} readOnly type='eamil' name='email' id='' required/>
                        <input type='text' name='education' id='' placeholder='your Education' {...register("education")}/>
                   
                        <input type='text' name='address' id='' placeholder='your Location' {...register("location")}/>
                   
                        <input  type='text' name='phone' id='' placeholder='your Phone' {...register("phone")}/>
                        <input  type='text' name='linkedIn' id='' placeholder='your LinkedIn' {...register("linkedin" )}/>
                        <button>Add Data</button>
                    
                   
                    
                </form>
                
            
            </div>
            
        </div>
    );
};

export default Purchase;