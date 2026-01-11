// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projectList = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' },
    ];

    return (
        <section id="projects" >
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;