import React,{useState} from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
 import DeleteConfirmModal from './DeleteConfirmModal';
import AllProduct from './AllProduct';




const ManageProduct = () => {
    const [deletingProducts, setDeletingProducts]=useState(null)
    
    const { data: products, isLoading, refetch } = useQuery([], () => fetch('https://tranquil-eyrie-90418.herokuapp.com/allproduct', {
        method:'GET', 
       headers: {
             authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
     }).then(res => res.json()));

     
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-5'>
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  products.map(product=> <AllProduct
                    key={product._id}
                    product={product}
                    refetch={refetch}
                    setDeletingProducts={setDeletingProducts}
                    
                    >
                  </AllProduct>
                   
                   
                    
                   ) 
               }
              
           </div>

           {deletingProducts && <DeleteConfirmModal
                deletingProducts={deletingProducts}
                refetch={refetch}
                setDeletingProducts={setDeletingProducts}
            ></DeleteConfirmModal>}
       
        </div>
    );
};

export default ManageProduct;