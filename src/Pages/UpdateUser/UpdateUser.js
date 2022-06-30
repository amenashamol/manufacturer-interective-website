import React ,{useState,useEffect}from 'react';

import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


 const UpdateUser = ( { setIsReload, isReload,id}) => {
      const[updateData,setUpdateData]=useState('')
      const [user]=useAuthState(auth)
     
   
    
    
    const {
        register,
        handleSubmit,
        } = useForm();

       useEffect(()=>{
         fetch(`https://evening-woodland-05842.herokuapp.com/updateuser/${id}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
         })
         .then(result=>result.json())
        .then(data=>setUpdateData(data))
         
       },[])
    

         const HandleUpdate = event =>{
            event.preventDefault()
            const name=event.target.name.value 
            const email=event.target.email.value 
            
             
            const education=event.target.education.value 
            const address=event.target.address.value 
            const phone=event.target.phone.value 
            const LinkedIn=event.target.linkedIn.value
            
            const updateUser={name,education,address,phone,email, LinkedIn}
            
            const url=`https://evening-woodland-05842.herokuapp.com/updateuser/${id}`
                fetch(url,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updateUser)
             
                })
                .then(res=>res.json())
                .then(data=>{
                    //   setIsReload(!isReload)
                  alert('users update success')
                   event.target.reset()
                })
             
             } 

    return (
        
        
     <div className='login-container'>
            
        <div>
            <h2 className='login-title'>Update User Information</h2>

            <form className='login-form' onSubmit={HandleUpdate} >
                
            <input className="mb-2" name='name' placeholder="name" value={user?.displayName} onChange={(e)=>{setUpdateData(e.target.value)}} />
               
                    <input value={user?.email} readOnly type='eamil' name='email' />
                    {/* <input value={user?.name} readOnly type='name' name='email' /> */}
                    <input type='text' name='education' value={updateData.education} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your Education'/>
               
                    <input type='text' name='address' value={updateData.address} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your Location' />
               
                    <input  type='text' name='phone' value={updateData.phone} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your Phone' />
                    <input  type='text' name='linkedIn' value={updateData.linkedIn} onChange={(e)=>{setUpdateData(e.target.value)}} placeholder='your LinkedIn'/>
                    <input type='submit' value="update"/>
                   
                   
                
               
                
            </form>
            
        
        </div>
        
    </div>
            
     

    );
};

export default UpdateUser;