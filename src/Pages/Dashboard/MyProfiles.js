import React,{ useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { Link } from 'react-router-dom';


const Purchase = () => {
    const [user] =useAuthState(auth)
    const[users,setUsers]=useState([]);
    const {
        register,
        handleSubmit,
        } = useForm();
    
    useEffect(()=>{
        

        if (user) {
            fetch(`https://mysterious-garden-19362.herokuapp.com/user?email=${user.email}`)
            
            .then(res=>res.json())
            .then(data=>setUsers(data))
        }
        
       
    },[])

   
    
    
    
    const onSubmit = (data) =>{
            
        const url='https://mysterious-garden-19362.herokuapp.com/user'
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

        <div> 
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Education</th>
                            <th>location</th>
                            <th>LinkedIn</th>
                            <th>Update</th>
                            
                        </tr>

                    </thead>

                    <tbody>
                        
                                
                                {
                            users.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                               
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.education}</td>
                                <td>{a.location}</td>
                                <td>{a.linkedIn}</td>
                                <Link to={`/update/${a._id}`} ><button>Edit</button></Link>
                                
                               
                                
                            </tr>)
                        } 
                                
                           
                        


                    </tbody>
                    
                </table>
            </div>

            <div className='login-container'>
            
            <div>
                <h2 className='login-title'>User Information</h2>

                <form className='login-form' onSubmit={handleSubmit(onSubmit)} >
                    
                <input className="mb-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                   
                        <input value={user?.email} readOnly type='eamil' name='email' id=''{...register("email")}/>
                        <input type='text' name='education' id='' placeholder='your Education' {...register("education")}/>
                   
                        <input type='text' name='address' id='' placeholder='your Location' {...register("location")}/>
                   
                        <input  type='text' name='phone' id='' placeholder='your Phone' {...register("phone")}/>
                        <input  type='text' name='linkedIn' id='' placeholder='your LinkedIn' {...register("linkedIn" )}/>
                       
                        <button>Add Data</button>
                    
                   
                    
                </form>
                
            
            </div>
            
        </div>
        </div>

        
    );
};

export default Purchase;