import React from 'react';
import { Link } from 'react-router-dom';

const PartsCard = ({img, name, bgClass, description,minimum_order_quantity ,available_quantity,price}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum_order:{minimum_order_quantity}</p>
                <p>Available:{available_quantity}</p>
                <p>Price:{price}</p>
                <Link to='/purchase'>
                <button class="btn btn-info">Purchase</button>
            </Link>
                
            </div>
        </div>
    );
};

export default PartsCard;