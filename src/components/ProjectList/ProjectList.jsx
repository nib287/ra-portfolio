import React from 'react';
import './ProjectList.css';

function ProjectList({projects}) {
    return (
        <ul className='ProjectList'>
            {projects.map((project, index) => 
                <li className='ProjectList-item' key={index}>
                    <img className='ProjectList-img' src={project.img} alt="" />
                </li>
            )}
        </ul>
    );
}

export default ProjectList;
