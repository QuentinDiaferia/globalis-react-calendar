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
		let totalOverlap = 1,
			currentOverlap = 1
        return this.props.events.map((event, index) => {
            const duration = moment.duration(event.end.diff(event.start)).as('hours')
            const beginning = moment.duration(event.start.diff(moment(event.start).startOf('day'))).as('hours')
            const style = {
        		top: `calc((100% / 24) * ${beginning})`,
        		height: `calc((100% / 24) * ${duration} - 8px)`,
	        	width: '100%',
	        	left: '0',
        	}

        	if (totalOverlap === 1 || currentOverlap === 0) {
            	totalOverlap = currentOverlap = this.checkOverlap(event, this.props.events.slice(index + 1))
        	}

            if (totalOverlap > 1) {
            	style.width = `calc((100% / ${totalOverlap}) - 8px)`
            	style.left = `calc((100% / ${totalOverlap}) * ${totalOverlap - currentOverlap})`
            	currentOverlap--
            }

			return <Event
            	event={event}
            	key={event.id}
            	style={style}
            />
        })
	}

	checkOverlap(event, list) {
		let overlap = 1
		list.forEach(e => {
			if (e.start.diff(event.end) < 0) {
				overlap++
			}
		})
		return overlap
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
