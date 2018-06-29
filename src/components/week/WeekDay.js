import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import WeekTimeSlot from './WeekTimeSlot'
import Event from '../Event'

class WeekDay extends React.Component {
	renderTimeSlots() {
		const times = []
		for (let i = 0; i < 24; i++) {
			times.push(
				<WeekTimeSlot
					key={i}
					time={i}
				/>
			)
		}
		return times
	}

	renderEvents() {
        return this.props.events.map(event => {
            const duration = moment.duration(event.end.diff(event.start)).as('hours'),
            	beginning = moment.duration(event.start.diff(moment(event.start).startOf('day'))).as('hours')
			return <Event
            	event={event}
            	key={event.id}
            	style={{
            		top: `calc((100% / 24) * ${beginning})`,
            		height: `calc((100% / 24) * ${duration} - 8px)`,
            	}}
            />
        })
	}

	renderHeader() {
		const day = this.props.date.format('ddd DD')
		return <div className="Calendar-Week-Grid-Day-Header">
			{day.charAt(0).toUpperCase() + day.slice(1)}
		</div>
	}

    render() {
        return <div className="Calendar-Week-Grid-Day">
        	{this.renderHeader()}
        	<div className="Calendar-Week-Grid-Day-Content">
	        	{this.renderTimeSlots()}
	        	{this.renderEvents()}
        	</div>
        </div>
    }
}

WeekDay.propTypes = {
    date: PropTypes.object.isRequired,
}

export default WeekDay
