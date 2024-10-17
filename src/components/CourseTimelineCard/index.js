import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDataObject} = props
  const {courseTitle, description, duration, tagsList} = courseDataObject

  return (
    <div className="course-card-container">
      <div className="course-title-and-duration-container">
        <h1 className="courseTitle-heading">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="description-style">{description}</p>
      <ul className="tagslist-style">
        {tagsList.map(tag => (
          <li className="taglist-item" key={tag.id}>
            <p style={{padding: '0px'}}>{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
