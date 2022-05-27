import React from 'react';
import Expert1 from '../../images/E1.jpg';
import Expert2 from '../../images/E2.jpg';
import Expert3 from '../../images/E3.jpg';
import Expert from './Expert';

const Experts = () => {
    const experts = [
        {
            _id: 1,
            name: 'Jack Farnes',
            description: 'Manager of Company',
            img: Expert1
        },
        {
            _id: 2,
            name: 'Adam Meir',
            description: 'Lead Developer',
            img: Expert2
        },
        {
            _id: 3,
            name: 'Andres Pedlock',
            description: 'CEO, Company',
            img: Expert3
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'> Team</h3>
                <h2 className='text-4xl'>Our Expert Team</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    experts.map(expert =><Expert
                        key={expert._id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;