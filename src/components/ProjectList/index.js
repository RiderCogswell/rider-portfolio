import React, { useState } from "react";
import Modal from '../Modal'

const ProjectList = ({ title }) => {    
    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            title: 'cmnt',
            technologies: 'Node.js, Express.js, MySQL, Sequelize, Handlebars, Heroku',
            description: 'Cmnt is a Node.js application that empowers anonymous users with a random topic that they can comment on, like, share, etc.',
            image: 'cmnt.png'
        },
        {
            title: 'loople',
            technologies: 'Vanilla JS, HTML, CSS, Foundation, Youtube API, The News API',
            description: 'Loople is an interactive webpage that allows a user to search a topic and be given a response on the latest news, videos, and in the future, social media posts',
            image: 'loople.png'
        },        
        {
            title: 'Deep Thoughts',
            technologies: 'GraphQL, React, Mongoose, MongoDB, Express.js, Node.js',
            description: 'Social network platform allowing users, to comment, friend, post and react!',
            image: 'loople.png'
        },
        {
            title: 'Food Festival',
            technologies: 'Node.js, WebPack, HTML, CSS, PWA',
            description: 'Website for local food festival where you can reserve tickets, check the schedule, and more!',
            image: 'loople.png'
        },
        {
            title: 'Social Network API',
            technologies: 'Mongoose, MongoDB, Express.js, Node.js',
            description: 'Backend for a modern social network that utilizes a Non-Relational database.',
            image: 'loople.png'
        },
        {
            title: 'Budget Tracker',
            technologies: 'Mongoose, MongoDB, IndexedDB, Express.js, Node.js',
            description: 'Modern application to help everyone track their finances with a Non-Relational databsase and smart design.',
            image: 'loople.png'
        }
    ];

    const currentProjects = projects.filter(project => project.title === title);

    const toggleModal = (project, i) => {
        // curent project
        setCurrentProject({ ...project, index: i })
        setIsModalOpen(!isModalOpen)
    }
    
    console.log(currentProjects);

    return(
        <div>
            {/* short circuit expression */}
            { isModalOpen && (
                <Modal currentProject={currentProject} onClose={toggleModal} />
            )}
            <div className='flex-row'>
                {projects.map((project, i) => (
                    <img 
                        src={`/assets/img/${project.image}`}
                        alt={project.title}
                        className='img-thumbnail mx-1'
                        onClick={() => toggleModal(project, i)}
                        key={project.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;