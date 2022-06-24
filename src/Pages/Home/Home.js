import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navber';

import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Contact from './Contact';
import Experts from './Experts';
import Reviews from './Reviews';
import DrillParts from './Tools/DrillParts';



const Home = () => {
    
    return (
        <div>
           
         <Banner></Banner>
         <DrillParts></DrillParts>
        
         <Reviews></Reviews>
         <Experts></Experts>
         
         
         <BussinessSummery></BussinessSummery>
         <Contact></Contact>
         <Footer></Footer>  

        </div>
    );
};

export default Home;
