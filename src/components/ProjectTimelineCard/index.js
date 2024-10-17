import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectObjectDataCard} = props
  const {projectTitle, description} = projectObjectDataCard
  const {imageUrl, duration, projectUrl} = projectObjectDataCard

  return (
    <div className="project-card-container">
      <img
        alt="project card"
        className="project-card-image-style"
        src={imageUrl}
      />
      <div className="project-title-and-duration-container">
        <h1 className="projectTitle-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="description-style">{description}</p>
      <a
        className="link-style"
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
