import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Event from './Event'

class DayEvents extends React.Component {

	renderEvents() {
		const events = this.calculateCoordinates()
        const origin = moment(this.props.date).hour(this.props.startTime)
        const timeSpan = this.props.endTime - this.props.startTime

        return events.map(event => {
            const duration = moment.duration(
                event.end.diff(event.start)
            ).as('hours')

            const beginning = moment.duration(
                event.start.diff(origin)
            ).as('hours')

            const top = (100 / timeSpan) * beginning
            const height = (100 / timeSpan) * duration
            const width = 100 / event.maxOverlap
            const left = event.hindex * width

            const style = {
	    		top: `${top}%`,
	    		height: `${height}%`,
	        	width: `${width}%`,
	        	left: `${left}%`,
        	}

			return <Event
            	event={event}
            	key={event.id}
            	style={style}
            />
        })
	}

	calculateCoordinates() {
        const events = this.props.events
		const timeSpan = this.props.endTime - this.props.startTime
		const schedule = []

		for (let i = 0; i < timeSpan * 60; i++) {
			schedule.push([])
		}

		const origin = moment(this.props.date).hour(this.props.startTime)
		events.forEach((event, index) => {
			for (let minute = event.start.diff(origin, 'minutes'); minute < event.end.diff(origin, 'minutes'); minute++) {
				schedule[minute] && schedule[minute].push(index)
			}
		})

		schedule.forEach(minute => {
			let next_hindex = 0
			const nEvents = minute.length
			if (nEvents > 0) {
				minute.forEach(eventIndex => {
					if (!events[eventIndex].maxOverlap || events[eventIndex].maxOverlap <= nEvents) {
						events[eventIndex].maxOverlap = nEvents
						if (!events[eventIndex].hindex || events[eventIndex].hindex <= next_hindex) {
							events[eventIndex].hindex = next_hindex
							next_hindex++
						}
					}
				})
			}
		})

        return events
	}

	renderTimeSlots() {
		const times = []
		for (let i = this.props.startTime; i < this.props.endTime; i++) {
			times.push(
				<div key={i} className="Calendar-Day-Grid-Content-TimeSlot">
        		</div>
			)
		}
		return times
	}

	renderHeader() {
		const day = this.props.date.format('ddd DD')
		return <div className="Calendar-Day-Grid-Header">
			{day.charAt(0).toUpperCase() + day.slice(1)}
		</div>
	}

    render() {
        return <div className="Calendar-Day-Grid">
        	{this.renderHeader()}
        	<div className="Calendar-Day-Grid-Content">
	        	{this.renderTimeSlots()}
	        	{this.renderEvents()}
        	</div>
        </div>
    }
}

DayEvents.propTypes = {
    date: PropTypes.object.isRequired,
}

export default DayEvents
