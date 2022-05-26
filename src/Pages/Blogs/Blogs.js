import React from 'react';

import './Blogs.css'

const Blogs = () => {
    
    return (
        <div>
         <div className='react-application'>
                <h2> # Improveing the performance of a React Application:</h2>
                <div className='list'>
                <li>Keeping component state local where necessary.</li> 
                <li>Memoizing React components to prevent unnecessary re-renders.</li> 
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React.</li> 
                </div>
                
                   
            </div>
   
          <div className='react-app'>
            <h2> #There are four main types of state you need to properly manage in your React apps:</h2>
            <div className='list'>
                <li>Local state..</li> 
                <li>Global state.</li> 
                <li>Server state.</li>
                <li>URL state</li>
                
                </div>
             
               
               
          </div> 

           <div className='prototypical-inheritance'>
            <h2> # how does prototypical inheritance work:</h2>
            <p >
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
            
            </p> 
                 
               
          </div> 

          <div className='state'>
            <h2> #One should never update the state directly because of the following reasons:</h2>
            <div className='list'>
                <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li> 
                <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li> 
                <li>creates a pending state transition, and accessing it after calling this method will only return the present value.
                 You will lose control of the state across all components.</li>
                
                
            </div>
        </div>


          <div className='Unit-Test'>
            <h2> # Unit Test:</h2>
            <p >
            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount.

            
            </p> 
                 
               
          </div>
           
        </div>
    );
};

export default Blogs;