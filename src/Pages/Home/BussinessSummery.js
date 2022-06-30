import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench,faMagnifyingGlassDollar,faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faIntercom } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

const BussinessSummery = () => {
    return (
      <div className='my-15 '>  
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
          
         
              <div className=" card-body  bg-base-100  " > 
               
               <h3 className='text-2xl font-bold  '>Business <span className='text-indigo-800'> Summery :</span></h3>
                <p className="py-1">In the past three years, Drill Machine has grown by 150%. We attribute that growth to our commitment to identifying new clients and markets and hope to double that within the next two years. Currently, we are seeking an investment of $60,000 to help scale our company and grow our team across the United States. To date, the Company has raised approximately $6.0 million to support research and development, product introduction to the Telco market and initial sales. The Company seeks to raise an additional $5.0 million to fund its growth. </p>

              </div>

              <div className=" card-body  bg-base-100 " > 
               <div className='border-l-4 border-indigo-600 my-1'>
               <h1 className='my-5 font-semibold text-xl mx-8'>overall Statement</h1>
                
                  <div className="overflow-x-auto mx-8 ">
  <table className="table w-full">
   
     <thead>
       <tr>
         <th><h4 className='text-2xl'><FontAwesomeIcon icon={faIntercom} />
         </h4><h4 className='my-1 font-semibold'>Served</h4></th>
         <th><h4 className='text-2xl'><FontAwesomeIcon icon={faCalendarDays} />
         </h4><h4 className='my-1 font-semibold'>Annual Revenue</h4></th>
         <th><h4 className='text-2xl'><FontAwesomeIcon icon={faMagnifyingGlassDollar} />
         </h4><h4 className='my-1 font-semibold'>Reviews</h4></th>
         <th><h4 className='text-2xl'><FontAwesomeIcon icon={faScrewdriverWrench } />
         </h4><h4 className='my-1 font-semibold'>Tools</h4></th>
       </tr>
     </thead >
     <tbody>
     
      <tr  className="active">
         <th>100+ customers</th>
         <td>120M+</td>
         <td>33K+</td>
         <td>50+</td>
       </tr>
     
      
     </tbody>
   </table>
 </div>
              </div>
              
              
             

            
               
              </div>
          
      </div> 

  </div>

    );
};

export default BussinessSummery;