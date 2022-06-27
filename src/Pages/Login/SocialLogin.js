import React from 'react';
import google from '../../images/google1.png'
import useToken from '../../hooks/useToken';

import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [token] = useToken(googleUser)
    const navigate=useNavigate()
     let errorMessage

     if(googleLoading ){
        return <Loading></Loading>
    }
    
    if (googleError ) {
        errorMessage=
          
            <p className='text-danger'>Error: {googleError?.message}</p>
        
        
      }

     

      if (token) {
        navigate('/')
    }

      

    return (
        <div >
            
            {errorMessage}

            <div className='text-center'>
                <button onClick={()=> signInWithGoogle()} className='btn btn-info d-block w-50 mx-auto my-2 '>
                   <img style={{height:'30px', width:'30px'}} src={google} alt=""/> 
                   <span className='px-2'>Google Sign In </span>
                  
                </button>

                

                
            </div>
        </div>
    );
};

export default SocialLogin;