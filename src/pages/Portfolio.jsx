import React from 'react';
import './Portfolio.css'

function Portfolio() {
    const projects = [
        {
            title: 'Space Invaders',
            description: 'This was my first project at the Ironhack bootcamp. I tried to make hommage to the 80s and 90s videogames with retro sounds, adding a humor point of view.',
            imageUrl: '/project1.png',
            projectUrl: 'https://alexahijado.github.io/SpaceInvaders/',
        },
        {
            title: 'PHOENIX - Fitness App',
            description: `This was the second project at Ironhack and the first co-programming. I did it with my colleague Julia, who worked long hours to make it work. I'm very proud of the result.`,
            imageUrl: '/project2.png',
            projectUrl: 'https://phoenix.adaptable.app',
        },
        {
            title: 'Spotify Clone',
            description: `I wanted to practice the backend using Express.JS and Node.JS, so I developed a Spotify clone using Spotify's developer's API.`,
            imageUrl: '/project3.png',
            projectUrl: 'https://spotifyclone.adaptable.app/',
        },
        {
            title: 'Simple TODO List (HTML and JS)',
            description: `I wanted to keep practicing my skills with interactive HTML and JS event listeners, so I made this simple app.`,
            imageUrl: '/project4.png',
            projectUrl: 'https://alexahijado.github.io/Simple-TODO-List/',
        },
        {
            title: 'Weather App',
            description: `Responsive weather app made on React, scalable to multiple screen sizes and fast to respond.`,
            imageUrl: '/project5.png',
            projectUrl: 'https://fast-weather-app.netlify.app/',
        },
        {
            title: 'Interactive Quiz App',
            description: `I always liked quiz apps, such as Trivia, so here's my take on it.`,
            imageUrl: '/project6.png',
            projectUrl: 'https://alexahijado.github.io/Quiz-game/',
        },
        {
            title: 'Simple Note-taking app (ReactJS)',
            description: `I made a note taking app in React with browser session storage, so that the notes are always available, no matter if you close or restart the browser. Also, the notes have full CRUD functionality.`,
            imageUrl: '/project7.png',
            projectUrl: 'https://simple-note-taking-site.netlify.app/',
        },
        
    ];

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <img src={project.imageUrl} alt={project.title} />
                        <p>{project.description}</p>
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
