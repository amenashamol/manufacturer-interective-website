import { signOut } from 'firebase/auth';
import React,{useState} from 'react';
import logo from '../../images/n3.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Navbar = () => {
    //const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(true);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        
      };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">MyPortfolio</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
       
        </>

const dashMenuItems = <>

                 
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
                 
            
             </>
   
   return (
        <div className="navbar bg-info">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        <li > {user && <button  onClick={onClick}>Dashboard</button>}</li>
                    </ul>
                   
                </div>
                <Link to="/">
        <img style={{height:'60px',borderRadius:"20px" }} src={logo} alt="" />
        </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
            <div className="navbar-end">
            <ul className="menu menu-horizontal p-0">
            <li>{user ? <><button  className="btn btn-ghost"  onClick={logout} >Sign Out</button></> : <Link to="/login">Login</Link>}</li>
            
    <li  className='hidden lg:flex '> {user && <Link to="/dashboard">Dashboard</Link>}</li>
            
            </ul>
            {isActive &&
                
                <div className="dropdown">
                    
                    <label tabIndex="1" htmlFor="dashboard sidebar"  className='btn btn-ghost lg:hidden ' aria-labelledby="dropdownDefault">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 '>
                        {dashMenuItems}
                    </ul>
                </div>
              }   
            </div>
        </div>
    );
};

export default Navbar;
 