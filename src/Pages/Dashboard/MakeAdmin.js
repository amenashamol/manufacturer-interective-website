import React,{ useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';



const MakeAdmin = () => {
   
  
const { data,isloading,refetch} = useQuery('user', ()=> 
                fetch('http://localhost:4000/adminuser'
                ,{
                 method: 'GET',
                 headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
                
            })
                )
            .then(res=>res.json())
                

            

            const events = data ?? []
            
            
    
               if(isloading){
                 <Loading></Loading>
                }
            
   
     return (
               
           <div>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Education</th>
                            <th>location</th>
                            <th>LinkedIn</th>
                            <th></th>
                            <th></th>
                            
                            
                        </tr>

                    </thead>

                    <tbody>
                        
                                
                                {
                            events?.map((user, index) => <AdminRow
                            key={user._id}
                            user={user} 
                            index={index}
                            refetch={refetch}
                            />
                       ) }  
                                
                           
                        


                    </tbody>
                    
                </table>
            </div>

            
        </div>

        
    );
};

export default MakeAdmin;