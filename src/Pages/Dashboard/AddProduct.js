import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const  AddProduct = () => {
  const {
    register,
    handleSubmit,
    } = useForm();

  const onSubmit = (data) =>{
  

   const url='http://localhost:4000/product'
   fetch(url,{
       method:'POST',
       headers:{
        'content-type':'application/json'
    },
       body:JSON.stringify(data)

   })
   .then(res=>res.json())
   .then(result=>{
  
     toast.success('product insert is success')
   })

}

  return (
    <div className="card  lg:max-w-lg bg-base-100 shadow-xl  ">
        <h2 className="card-title items-center card-actions justify-center">Add product</h2>
      <div className=" card-body  " > 
     <form className="card-actions justify-center" onSubmit={handleSubmit(onSubmit)}>
      <input className="input input-bordered input-xs w-full max-w-xs my-2 " placeholder="photo url" type="text" {...register("img")} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  placeholder="name" {...register("name")} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  placeholder="description" {...register("description", )} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  placeholder="maximum_order_quantity" type="number" {...register("maximum_order_quantity")} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  placeholder="miniimum_order_quantity" type="number" {...register("minimum_order_quantity")} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  placeholder="available_quantity" type="number" {...register("available_quantity")} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  placeholder="price" type="number" {...register("price")} />
      <input className="input input-bordered input-xs w-full max-w-xs my-2"  type="submit"  value="add submit"/>
    </form>
    </div> 
    </div>
  );
};

export default AddProduct;
