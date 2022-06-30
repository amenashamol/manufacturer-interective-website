import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const  Addreview = () => {
  const {
    register,
    handleSubmit,
    } = useForm();

  const onSubmit = (data) =>{
  

   const url='https://evening-woodland-05842.herokuapp.com/review'
   fetch(url,{
       method:'POST',
       headers:{
           'content-type':'application/json'
       },
       body:JSON.stringify(data)

   })
   .then(res=>res.json())
   .then(result=>{
     toast.success('review insert is success')
   })

}

  return (
    <div className="card  lg:max-w-lg bg-base-100 shadow-xl  ">
        <h2 className="card-title card-actions justify-center">Add product</h2>
      <div className=" card-body  " > 
     <form className="card-actions justify-center" onSubmit={handleSubmit(onSubmit)}>
        
   
      <input className="input input-bordered input-xs w-full max-w-xs my-2 " name="Rating" placeholder="Rating out of 5" type="number" max={5} min={1} {...register("Rating",{ required: true })} />
      
      <textarea className="input input-bordered input-lg w-full max-w-xs my-2" name="Review" placeholder="Review" minLength="50" type="text"{...register("Review", { required: true })} />
     
      <input className="input input-bordered input-xs w-full max-w-xs my-2 text-success"  type="submit"  value="SUBMIT"/>
    </form>
    </div> 
    </div>
  );
};

export default Addreview ;
