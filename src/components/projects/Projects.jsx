import React from 'react'
import "./projects.css"
const Projects = () => {
  return (
    <section id='projects'>
      <h5>My recent projects</h5>
      <div className="project-container">
        <article className='project-item'>
          <div className="project-image"></div>
          <h3>Project name</h3>
          <a href="http://github.com" className='btn' target="_blank" rel="noreferrer">Github</a>
           <a href="http://github.com" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a> {/*image projects link */}

        </article>
      </div>
    </section>
  )
}

export default Projects