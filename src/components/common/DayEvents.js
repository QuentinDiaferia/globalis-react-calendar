import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Event from './Event'
import TimeSlot from './TimeSlot'

class DayEvents extends React.Component {

	onDragStart(e, eventId) {
		e.dataTransfer.setData('eventId', eventId)
	}

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
            	draggable={true}
            	onDragStart={e => this.onDragStart(e, event.id)}
            />
        })
	}

	calculateCoordinates() {
		const events = this.props.events.map(event => Object.assign({}, event))
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
        		<TimeSlot
        			key={i}
        			hour={i}
        			date={this.props.date}
        			onDropEvent={this.props.onDropEvent}
        		/>
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
    events: PropTypes.array.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    onDropEvent: PropTypes.func.isRequired,
}

export default DayEvents
