import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div id="welcome" className='container'>
           <h1 className='text-center'> About Me </h1>
           <div className='d-flex justify-content-center'>
           <div id='card' className='card'>
            <p className='ps-2 pe-2 ms-3'>  Hello my name is Mindaugas Paškevičius. I study programming languages PHP and Javascript at "Baltic technology institute".</p>
           </div>
           </div>
        </div>
    );
};

export default About;