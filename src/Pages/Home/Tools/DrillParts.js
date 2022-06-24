import React,{useState,useEffect} from 'react';
import Purchase from '../../Purchase/Purchase';
import PartsCard from './PartsCard';


const DrillParts = () => {
    const [parts, setParts]=useState([])
    const [partInf, setPartInf]=useState(null)
    useEffect(() => {
        fetch('http://localhost:4000/parts')
        .then(res=>res.json())
        .then(data=>setParts(data)) 
     }, [])
    return (
        <div className='my-5'>
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  parts.map(part=> <PartsCard
                    part={part}
                    setPartInf={setPartInf}
                    >
                  </PartsCard>
                   
                   
                    
                   ) 
               }
              
           </div>

           {partInf && <Purchase 
            setPartInf={setPartInf}
            partInf={partInf}></Purchase>}
       
        </div>
    );
};

export default DrillParts;