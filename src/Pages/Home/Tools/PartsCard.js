import React from 'react';
import { Link } from 'react-router-dom';

const PartsCard = ({part,setPartInf}) => {
    const{_id, img, name, description,minimum_order_quantity ,maximum_order_quantity,available_quantity,price}=part
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className='h-64'>
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded" />
            </figure>
            </div>
           
            <div className="card-body items-center  ">
                <div className='h-60 '>
                <h2 className="card-title">{name}</h2>
                 <p>{description}</p>
                 <p>maximum_order_quantity:{maximum_order_quantity}</p>
                 <p>Minimum_order:{minimum_order_quantity}</p>
                 <p>Available:{available_quantity}</p>
                 <p>Price:{price}</p>
                 <div className='my-5'>
                 <label
                        htmlFor="booking-modal"
                        
                        onClick={() => setPartInf(part)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book</label>
                 </div>
                
                </div>
            
            </div>
        </div>
        
    );
};

export default PartsCard;