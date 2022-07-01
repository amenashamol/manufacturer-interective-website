import React , {useEffect,useState}from 'react';

import Review from './Review';
const Reviews = () => {
    const [date, setDate] = useState(new Date());
    
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
    fetch('https://ancient-taiga-17717.herokuapp.com/review')
    .then(res=> res.json())
    .then(data=>setReviews(data))
 

 },[])
            
   
    return (
             <div className='my-28 '>  <h2 className='text-primary  text-4xl font-bold uppercase text-center'>Our customer Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                        date={date}
                    ></Review>)
                }
            </div>
            </div>
       
    );
};

export default Reviews;