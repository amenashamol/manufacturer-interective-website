import React ,{useState,useEffect}from 'react';
import { useForm } from "react-hook-form";

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import LoginUser from '../UpdateUser/LoginUser';


 const Profile = () => {
     const [users, setUsers] =useState([])
     const [isReload, setIsReload] = useState(false);
     const [authuser]=useAuthState(auth)
     
    
     
          useEffect(()=>{
                if (authuser) {
                    fetch(`https://evening-woodland-05842.herokuapp.com/loginuser?email=${authuser.email}` ,{
                        method:'GET',
                        headers:{
                            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                        }
                     })
                .then(res=>{
                    return res.json()})
                .then(data=>setUsers(data))
                 }
                
                 },[])

        
    return (
        
               
             
              

               
             
        <div>
       {users.map(user=> 
       <LoginUser
                setIsReload={setIsReload} isReload={isReload}  user={user} authuser={authuser} key={user._id}
                />
                )}
        </div>
       
    );
};

export default Profile;
