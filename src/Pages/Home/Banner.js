import React from 'react';
import drill from '../../images/drill.jpg';


const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={drill} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Increase your Productivity with quick acting Professional tools that save your valuable time</h1>
                    <p className="py-6">A hammer drill is a convenient device to have in your toolbox, as you can use it for several different applications. These tools are handy and help in carrying out relatively light-duty jobs. They are competent to drill holes in concrete, brick, wood, stone, and other hard materials. You can effortlessly drill holes into your house’s masonry for various requirements, such as hanging a photo frame, installing a floating shelf, and more.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;