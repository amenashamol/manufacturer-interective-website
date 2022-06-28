import React from 'react';
import { toast } from 'react-toastify';

const DeleteConModal = ({ refetch,deletingOrder,setDeletingOrder}) => {
    
    const {_id, orderName} = deletingOrder;
           
    const handleDelete = (id) => {
        fetch(`https://aqueous-harbor-99423.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`order: ${orderName} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal"className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg ">Are you sure you want to delete <span className='text-red-500'>${orderName}!</span> </h3>
                    
                    <div className="modal-action">
                    <button onClick={() => handleDelete(_id)}className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal"className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConModal;