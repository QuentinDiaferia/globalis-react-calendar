import React from 'react'
import PropTypes from 'prop-types'

class TimeSlotsHeader extends React.Component {
	renderHeader() {
		const times = []
		for (let i = this.props.startTime; i < this.props.endTime; i++) {
			times.push(i)
		}
		return times.map(i => {
			return <div className="Calendar-Day-TimeHeader-TimeSlot" key={i}>
				{i > 9 ? i : "0" + i}:00
			</div>
		})
	}

    render() {
        return <div className="Calendar-Day-TimeHeader">
       		<div className="Calendar-Day-TimeHeader-TimeSlot"></div>
        	{this.renderHeader()}
        </div>
    }
}

TimeSlotsHeader.propTypes = {
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
}

export default TimeSlotsHeader
