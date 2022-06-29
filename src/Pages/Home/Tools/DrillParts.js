import React,{useState,useEffect} from 'react';
import Purchase from '../../Purchase/Purchase';
import PartsCard from './PartsCard';


const DrillParts = () => {
    const [parts, setParts]=useState([])
    
    useEffect(() => {
        fetch('https://tranquil-eyrie-90418.herokuapp.com/allparts',{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
         })
        .then(res=>res.json())
        .then(data=>setParts(data)) 
     }, [])
    return (
        <div className='my-5'>
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  parts.map(part=> <PartsCard
                    part={part}
                    key={part._id}
                    
                    >
                  </PartsCard>
                   
                   
                    
                   ) 
               }
              
           </div>

           
       
        </div>
    );
};

export default DrillParts;