import React from 'react';
import { useForm } from 'react-hook-form';
import UpdateUser from './UpdateUser';

const LoginUser = ({user,setIsReload, isReload,authuser}) => {
    //    console.log(user)
    const {
        register,
        handleSubmit,
        } = useForm()
    return (
        
        <div className="hero min-h-screen">
            
        <div className="hero-content flex-col lg:flex-row ">
             <div className="card  shadow-xl h-50">
                   <div className="card-body">
                       <h2 className="card-title uppercase">{user.name}          Profile!</h2>

                        
                        
                            <p>Name: {user.name} </p>
                            <p>Email: {user.email} </p>
                            <p>Education: {user.education}</p>
                            <p>Location: {user.address} </p>
                            <p>phone: {user.phone} </p>
                            <p>LinkInd: {user.linkedIn} </p>
                    
                       
                      
                       
 
                      
                    </div>

             </div>
             <UpdateUser setIsReload={setIsReload} isReload={isReload} id={user._id}/>
             </div>

             </div>
    );
};

export default LoginUser;