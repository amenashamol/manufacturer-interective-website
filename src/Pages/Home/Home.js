import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navber';

import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Contact from './Contact';
import Experts from './Experts';
import Reviews from './Reviews';
import Parts from './Tools/Parts';


const Home = () => {
    
    return (
        <div>
           
         <Banner></Banner>
         <Parts></Parts>
        
         <Reviews></Reviews>
         <Experts></Experts>
         
         
         <BussinessSummery></BussinessSummery>
         <Contact></Contact>
         <Footer></Footer>  

        </div>
    );
};

export default Home;
