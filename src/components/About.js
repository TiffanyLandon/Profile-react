import React from "react";
import Profilepic from "../profile-pic.jpg";

const About = () => {
    return (
        <section className="justify-content-center">
            <h1 id="about">About Me</h1>
            <img src={Profilepic} className="aboutimg" style={{ width: "30%" }} alt="cover" />
            <div className="abouttext">
                <p>
                   Tiffany Marie Bryan and I graudated from Broward College with a A.A in psychology. I'm currently working on my B.A in psychology 
                   at Florida International Unversity. Im currently working at Sam's Club as a club picker. In which I attend to customers by picking
                   their groceries. I have a background in leadership when I was a manager at Walmart over the pharmacy and Club pick. In which I had 
                   a staff of ten or more assoicates. I have skills in Microsoft words, excel, and powerpoint. 
                </p>
                <p>
                    I have been trained in using the forklift and have worked at the Post Office. I currently skilled in HTML,CSS, Javascript, and React. 
                </p>

            </div>
        </section>
    );
}

export default About ;