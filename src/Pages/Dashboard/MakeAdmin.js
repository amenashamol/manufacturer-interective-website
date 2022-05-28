import React,{ useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const MakeAdmin = () => {
    const [user] =useAuthState(auth)
    const[users,setUsers]=useState([]);
    
    
    
    useEffect(()=>{
        
            fetch('https://mysterious-garden-19362.herokuapp.com/alluser')
            
            .then(res=>res.json())
            .then(data=>setUsers(data))
        
        },[])

   const makeAdmin=()=>{
    fetch(`https://mysterious-garden-19362.herokuapp.com//user/admin/${user.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
     } )
            
    .then(res=>res.json())
    .then(data=>{
        
        toast.success('successfully made an admin')

    } )
   }
    
    
    
    

    return (

        <div> 
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            users.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                               
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.education}</td>
                                <td>{a.location}</td>
                                <td>{a.linkedIn}</td>
                                <td>{a.role!=='admin' && <button className='btn btn-xs' onClick={makeAdmin}>MakeAdmin</button>}</td>
                                <td><button className='btn btn-xs'>RemoveAdmin</button></td>
                                
                               
                                
                            </tr>)
                        } 
                                
                           
                        


                    </tbody>
                    
                </table>
            </div>

            
        </div>

        
    );
};

export default MakeAdmin;