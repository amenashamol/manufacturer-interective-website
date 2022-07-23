import React,{useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";

import { format } from 'date-fns';

const  Addreview = () => {
  
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, 'PPP');
  const [user]=useAuthState(auth)
  const {
    register,
    handleSubmit,
    } = useForm();

  const onSubmit = (data) =>{
      const name=user.displayName
     const inf={data, name,formattedDate}
   const url='http://localhost:4000/review'
   fetch(url,{
       method:'POST',
       headers:{
           'content-type':'application/json'
       },
       body:JSON.stringify(inf)

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
