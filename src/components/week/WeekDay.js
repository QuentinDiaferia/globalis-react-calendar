import React from 'react'
import PropTypes from 'prop-types'

import WeekTimeSlot from './WeekTimeSlot'

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

    render() {
        return <div className="Calendar-Week-Grid-Day">
        	{this.renderTimeSlots()}
        </div>
    }
}

WeekDay.propTypes = {
    date: PropTypes.object.isRequired,
}

export default WeekDay
