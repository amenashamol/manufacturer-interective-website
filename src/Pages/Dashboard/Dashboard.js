import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
     const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 text-center my-3'>Welcome to Our Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                 
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <>
                    <li><Link to="/dashboard/review">Add A Review</Link></li>
                    <li><Link to="/dashboard/order"> My Orders</Link></li>

                    </>}
                   
                    { admin && <>

                        <li><Link to="/dashboard/product"> Add A product</Link></li>
                    <li><Link to="/dashboard/manageorder"> Manage Orders</Link></li>
                    <li><Link to="/dashboard/manageproduct"> Manage products</Link></li>
                    <li><Link to="/dashboard/makeadmin"> Make Admin</Link></li>
                    
                    </>}
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;