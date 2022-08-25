import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div id="welcome" className='container'>
           <h1 className='text-center'> Welcome </h1>
           <div className='d-flex justify-content-center'>
           <div id='card' className='card'>
            <p className='ps-2 pe-2 ms-3'>Welcome to my first react page. In it, you will find a well functional calculator and a todo list.</p>
           </div>
           </div>
        </div>
    );
};

export default Home;