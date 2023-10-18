import React from 'react';
import './Main.css'

function Main() {
    return (
        <div className="main-container">
            <section className="bio">
                <h1>About Me</h1>
                <p>
                    Hello, I'm Alejandro Ahijado. With a background in French philology and experience as a KYC analyst, I've made a bold career pivot into software development. My completion of the Ironhack bootcamp has equipped me with proficiency in the MERN stack and has made me confident in taking on any IT obstacle that comes my way.
                </p>
            </section>

            <section className="skills">
                <h2>My Skills</h2>
                <ul>
                    <li>Web Development</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Node.JS</li>
                    <li>Terminal management</li>
                    <li>Linux</li>
                    <li>NoSQL (MongoDB)</li>
                    <li>Handlebars</li>
                    <li>Express.JS</li>
                </ul>
            </section>

            <section className="education">
                <h2>Education</h2>
                <p>
                    - Web Development Bootcamp, <span>Ironhack</span>, 2023
                </p>
                <p>
                    - React - The Complete Guide 2023 (incl. React Router &
                    Redux), <span>Udemy</span>, 2023
                </p>
                <p>
                    - Modern Languages and Literatures (French and German), <span>Universidad de Valladolid</span>, 2014-2019
                </p>
            </section>

            <section className="experience">
                <h2>Work Experience</h2>
                <p>
                    - Volunteer Frontend Developer, <span>Projects For Life</span>, 2023, Remote
                </p>
                <p>
                    - Senior KYC Analyst, <span>Citibank</span>, 2022, Warsaw (Poland)
                </p>
                <p>
                    - KYC Analyst, <span>MoneyGram</span>, 2021-2022, Warsaw (Poland)
                </p>
                
            </section>
        </div>
    );
}

export default Main;
