import React,{useState,useEffect} from 'react';
import PartsCard from '../Home/Tools/PartsCard';




const ManageProduct = () => {
    const [parts, setParts]=useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/allproduct')
        .then(res=>res.json())
        .then(data=>setParts(data)) 
     }, [])
    return (
        <div className='my-5'>
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  parts.map(part=> <PartsCard
                    part={part}
                    
                    
                    >
                  </PartsCard>
                   
                   
                    
                   ) 
               }
              
           </div>

           
       
        </div>
    );
};

export default ManageProduct;