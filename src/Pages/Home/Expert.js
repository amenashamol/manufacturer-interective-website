import React from 'react';


const Expert = ({expert}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={expert.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{expert.name}</h2>
                <h2 className="card-title">{expert.description}</h2>
               
                
            </div>
        </div>
    );
};

export default Expert;