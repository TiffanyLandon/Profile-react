import React from 'react';
import meImage from '../asset/about/me.jpg';

const About = () => {
    return (
        <div className="about">
            <h2 style={{
                fontSize: "1.5cm",
                color: "#f1356d",
            }}>About Me</h2>
            <img src={meImage} className="aboutme" alt="me" />
            <p className='abouttext'>
                My name is Tiffany Marie Bryan and I currently enrolled in a Florida Intenational Unversity to gain a B.A degree in psychology.
                I have a A.A degree from Broward College in psychology. I have a background in customer service and pharmacy. I'm currently working
                at Sam's Club as member assistant. I was a ecommerce manager at my past walmart which I had a staff of ten people and more. Also as
                I have a background in pharmacy as a OTC manager in which I help customers with medication over the counter and sometimes dispense medication.
                Beside my work history I'm also a working mother and I'm organize and skilled in microsoft.
            </p>
        </div>
    );
}

export default About;