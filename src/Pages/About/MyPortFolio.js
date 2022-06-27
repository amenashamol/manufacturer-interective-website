import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../images/me.jpg'
import Footer from '../Shared/Footer';
import './MyPortFolio.css'

const MyPortFolio = () => {
    return (
        <div>
           <div >
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <img src={logo} className="max-w-sm rounded-lg  " />
                
               
                <div className=" card-body  bg-base-100 " > 

                 <div className='border-l-4 border-indigo-500/75 '>
                <h2 className="text-4xl font-bold "> Mt <span className='text-blue-600/100' > Amena Khatun</span></h2>
                <h3 className="text-xl font-semibold my-3 mx-8 text-orange-700 ">Full Stack Wev Development</h3>
                <p className='my-3 mx-8 '>I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>
                </div>
                </div>          
                
            </div>
        </div>

        <div className="divider "></div>
         
          {/* Academic Information */}
    <div className='my-15 '>  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            
           
                <div className=" card-body  bg-base-100 " > 
                 <h3 className='text-2xl font-bold'>Github: <span className='text-xl '><a href="https://github.com/amenashamol">AmenaShamol</a></span></h3>
                 <h3 className='text-2xl font-bold'>Email: <span className='text-xl '>amena.ruet@gmail.com</span></h3>
                 <h3 className='text-2xl font-bold'>Phone: <span className='text-xl '>01723566598</span></h3>
                 <div className="divider"></div>
                 <h3 className='text-4xl font-bold  '>My <span className='text-indigo-800'> Mission :</span></h3>
                  <p className="py-1">Being aligned with the Intended Learning Outcomess of my program, I hope to improve my critical thinking ability. I believe, regardless the field, we need to be able to think critically in terms of evaluating what is observed or expressed. I  apply this to my major study as well as my own learning and development at a higher level. I  reflective on my own development by assessing it critically. The reflective judgment help me to improve in the long run.</p>

                </div>

                <div className=" card-body  bg-base-100 " > 
                 <div className='border-l-4 border-orange-500 my-1'>
                    <h2 className="text-4xl font-bold  my-4 ">My <span className='text-green-500 '>Education :</span> </h2>
                <h4 className="text-2xl font-semibold mx-8 ">Bachelor In <span className='text-primary'>Computer Engineering</span> </h4>
                </div>
                <div className="divider "></div>
                <div className='border-l-4 border-orange-500/75'>
                    <h2 className="text-4xl font-bold  my-4 ">My <span className='text-green-500 '>Skils :</span> </h2>
                    <ul class="list-disc mx-12">
                    <li>Html,CSS</li>
                    <li>Boostrap</li>
                    <li>Tailwind</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Next.js</li>
                    <li>Mongodb</li>
                    
                    </ul>
                </div>
                
               

              
                 
                </div>
            
        </div> 

    </div>
         
        {/* project live link */}
        <div className="divider"></div>
        <div className='my-15 '>  <h2 className='text-success  text-2xl font-bold uppercase text-center my-3'>My Three Project</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
            <div className="card  lg:max-w-lg bg-base-100 shadow-xl  ">
           
                <div className=" card-body  bg-success " > 
                 <a href="https://fruites-wirehouse.web.app" className='text-4xl font-bold text-neutral '>fruites-wirehouse</a>
                 
                </div> 
            </div> 

            <div className="card  lg:max-w-lg bg-base-100 shadow-xl  ">
           
                <div className=" card-body bg-success " > 
                 
                 <a href="https://online-it-service.web.app" className='text-4xl font-bold text-neutral'>online-it-service</a>
                
                </div> 
            </div>

            <div className="card  lg:max-w-lg bg-primary-100 shadow-xl  ">
           
                <div className=" card-body  bg-success" > 
                 <a  href="https://flourishing-marzipan-827430.netlify.app/blogs" className='text-4xl font-bold text-neutral'>Product-analysis</a>
                </div> 
            </div>
        </div>
        </div>
        <footer>
        <h1> Copyright © 2022</h1>
        <h1 className='text-4xl '> By  <span className="spn ">Drill Machine</span></h1>
        
    </footer>
    </div>
    );
};

export default MyPortFolio;