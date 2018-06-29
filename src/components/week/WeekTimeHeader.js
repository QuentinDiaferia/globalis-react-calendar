import React from 'react'
import PropTypes from 'prop-types'

class WeekTimeHeader extends React.Component {
	renderHeader() {
		const times = []
		for (let i = this.props.startTime; i < this.props.endTime; i++) {
			times.push(i)
		}
		return times.map(i => {
			return <div className="Calendar-Week-Grid-TimeHeader-Time" key={i}>
				{i > 9 ? i : "0" + i}:00
			</div>
		})
	}

    render() {
        return <div className="Calendar-Week-Grid-TimeHeader">
       		<div className="Calendar-Week-Grid-TimeHeader-Time"></div>
        	{this.renderHeader()}
        </div>
    }
}

WeekTimeHeader.propTypes = {
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
}

export default WeekTimeHeader
