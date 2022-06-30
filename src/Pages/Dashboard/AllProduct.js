import React from 'react';
import { toast} from 'react-toastify';

const AllProduct = ({product,setDeletingProducts}) => {
    const{_id, img, name, description,minimum_order_quantity ,maximum_order_quantity,available_quantity,price}=product
    
   
    return (
        
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className='h-64'>
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded" />
            </figure>
            </div>
           
            <div className="card-body items-center  ">
                <div className='h-60 '>
                <h2 className="card-title card-actions justify-center text-indigo-500">{name}</h2>
                 <p>{description}</p>
                 <p>maximum_order_quantity:{maximum_order_quantity}</p>
                 <p>Minimum_order:{minimum_order_quantity}</p>
                 <p>Available:{available_quantity}</p>
                 <p>Price:${price}</p>
                
            
                    <div className="card-actions justify-end">
                    <label onClick={() => setDeletingProducts(product)}htmlFor="delete-confirm-modal"className="btn btn-xs btn-error">Delete</label>
                    {/* <button onClick={() => handleDelete(_id)}htmlFor="delete-confirm-modal"className="btn btn-xs btn-error">Delete</button> */}
                    </div>
                </div>
            </div>
    </div>
                
                
               
        
        
    );
};

export default AllProduct;