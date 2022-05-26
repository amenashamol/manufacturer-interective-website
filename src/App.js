import logo from './logo.svg';
import Navber from './Pages/Shared/Navber';
import { Routes, Route} from "react-router-dom";

import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfiles from './Pages/Dashboard/MyProfiles';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="dashboard" element={
         
           <Dashboard></Dashboard>  
          
        } >
              <Route index element={<MyProfiles></MyProfiles>}></Route>
              <Route path="review" element={<AddReview></AddReview>}></Route>
              {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route> */}
              <Route path="order" element={<MyOrders></MyOrders>}></Route>
               
               
          </Route>
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
      
     
    </div>
  );
}

export default App;
