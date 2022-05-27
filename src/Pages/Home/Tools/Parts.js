import React from 'react';
import PartsCard from './PartsCard';
import head from '../../../images/head.jpg';
import radial from '../../../images/radial.png';
import speed from '../../../images/speed.png';

const Parts = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <PartsCard name="Drill Head" bgClass="bg-gradient-to-r from-secondary to-primary" img={head} description="Drill Head is mounted on the redial arm and drives the drill spindle" minimum_order_quantity="100" available_quantity="200" price="500"></PartsCard>
            <PartsCard name="Radial Arm" bgClass="bg-neutral" img={radial} description="Drill Radial Arm is mounted on the column and extends horizontally over the base. It has guideways on which drill head slides" minimum_order_quantity="100" available_quantity="200" price="500"></PartsCard>
            <PartsCard name="Spindle speed" bgClass="bg-gradient-to-r from-secondary to-primary" img={speed} description="The motor at the top of the drill head drives the horizontal spindle and the motion is transmitted to the drill head through a group of bevel gears" minimum_order_quantity="100" available_quantity="200" price="500"></PartsCard>
        </div>
    );
};

export default Parts;