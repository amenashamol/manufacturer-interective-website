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
    
     
    //  useEffect(() => {
    //     fetch("http://localhost:4000/loginuser")
    //       .then((res) => res.json())
    //       .then((data) => setUsers(data));
    //   }, [isReload]);
    
    
        
    
        useEffect(()=>{
                if (authuser) {
                    fetch(`http://localhost:4000/loginuser?email=${authuser.email}` ,{
                        method: 'GET',
                         headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
        
                    })
                .then(res=>res.json())
                .then(data=>setUsers(data))
                 }
                
                 },[])

        
    return (
        
               
             
              

               
             
        <div>
       {users.map(user=> 
       <LoginUser
                setIsReload={setIsReload} isReload={isReload}  user={user}
                />
                )}
        </div>
       
    );
};

export default Profile;
