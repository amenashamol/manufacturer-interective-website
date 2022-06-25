import logo from './logo.svg';
import Navber from './Pages/Shared/Navber';
import { Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp';
import './App.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAuth';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfiles from './Pages/Dashboard/MyProfiles';
import Manageorders from './Pages/Dashboard/Manageorders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import Purchase from './Pages/Purchase/Purchase';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import Payment from './Pages/Purchase/Payment';
import MyPortFolio from './Pages/MyPortFolio';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/portfolio" element={<MyPortFolio></MyPortFolio>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="dashboard" element={
          <RequireAuth>
           <Dashboard></Dashboard>  
          </RequireAuth>
        } >
              <Route index element={<MyProfiles></MyProfiles>}></Route>
              <Route path="review" element={<AddReview></AddReview>}></Route>
              <Route path="users" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
              <Route path="order" element={<MyOrders></MyOrders>}></Route>
              <Route path="product" element={<AddProduct></AddProduct>}></Route>
              <Route path="manageorder" element={<Manageorders></Manageorders>}></Route>
              <Route path="manageproduct" element={<ManageProducts></ManageProducts>}></Route>
              <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path="payment/:id" element={<Payment></Payment>}></Route>
               
               
          </Route>
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        {/* <Route path="/update/:id" element={<UpdateUser></UpdateUser>}></Route> */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      
     
    </div>
  );
}

export default App;
