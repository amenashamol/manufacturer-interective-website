import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review }) => {
   
    const {Rating ,Review,formattedDate}=review
    const[user]=useAuthState(auth)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">
      {Rating} out of 5
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{Review}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{formattedDate}</div> 
      <div className="badge badge-outline">{user?.displayName}</div>
    </div>
  </div>
</div>
    );
};

export default Review;