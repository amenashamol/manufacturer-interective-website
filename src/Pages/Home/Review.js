import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review, date }) => {
    const formattedDate = format(date, 'PPP');
    const {Rating ,Review}=review
    const[user]=useAuthState(auth)
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title">
      {Rating} out of 5
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>{Review}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{formattedDate}</div> 
      <div class="badge badge-outline">{user?.displayName}</div>
    </div>
  </div>
</div>
    );
};

export default Review;