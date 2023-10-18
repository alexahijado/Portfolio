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
            description: `I wanted to practice the backend using Express.JS and Node.JS, so I developed a Spotify clone using Spotify's developer's API`,
            imageUrl: '/project3.png',
            projectUrl: 'https://github.com/alexahijado/Spotify-Clone',
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