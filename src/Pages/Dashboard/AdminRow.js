import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({user,index,refetch}) => {

    const makeAdmin=()=>{
        fetch(`http://localhost:4000/adminuser/admin/${user.email}`,{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
         } )
                
        .then(res=>{
         
        if(res.status===403){
            toast.error('Faild to make an admin')
        }
        return   res.json()})
        .then(data=>{
            if(data.modifiedCount>0){
                refetch()
                toast.success('successfully made an admin')
            }
            
    
        } )
       }
    return (
        
            <tr >
                                <th>{index + 1}</th>
                               
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.education}</td>
                                <td>{user.location}</td>
                                <td>{user.linkedIn}</td>
                                <td>{user.role!=='admin' && <button className='btn btn-xs' onClick={makeAdmin}>MakeAdmin</button>}</td>
                                <td><button className='btn btn-xs'>RemoveUser</button></td>
                                
                               
                                
                            </tr>
    
    );
};

export default AdminRow;
