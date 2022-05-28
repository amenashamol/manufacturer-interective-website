import React ,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";


const UpdateUser = () => {
    const {id}=useParams()
    const[user,setUser]=useState({})
    const {
        register,
        handleSubmit,
        } = useForm();

    useEffect(()=>{
        const url=`https://mysterious-garden-19362.herokuapp.com/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
        },[])

        const HandleUpdate = (data) =>{
            
            const url=`https://mysterious-garden-19362.herokuapp.com/user/${id}`
                fetch(url,{
                    method:'PUT',
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
            <h2 className='login-title'>Update User Information</h2>

            <form className='login-form' onSubmit={ handleSubmit(HandleUpdate)} >
                
            <input className="mb-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
               
                    <input value={user?.email} type='eamil' name='email' id=''{...register("email")}/>
                    <input type='text' name='education' id='' placeholder='your Education' {...register("education")}/>
               
                    <input type='text' name='address' id='' placeholder='your Location' {...register("location")}/>
               
                    <input  type='text' name='phone' id='' placeholder='your Phone' {...register("phone")}/>
                    <input  type='text' name='linkedIn' id='' placeholder='your LinkedIn' {...register("linkedIn" )}/>
                   
                    <button>Update</button>
                
               
                
            </form>
            
        
        </div>
        
    </div>
    );
};

export default UpdateUser;