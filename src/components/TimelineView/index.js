import React from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="main-container">
      <h1 className="first-heading">
        MY JOURNEY OF
        <br />
        <span className="span-style">CCBP 4.O</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList.map(item => ({title: item.title}))}
        >
          {timelineItemsList.map(item => {
            if (item.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={item.id} courseDataObject={item} />
              )
            }
            if (item.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard
                  key={item.id}
                  projectObjectDataCard={item}
                />
              )
            }
            return null // In case neither is a match
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
