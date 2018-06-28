import React from 'react'
import PropTypes from 'prop-types'

class WeekHeader extends React.Component {
    render() {
        return <div className="Calendar-Week-Header">
        	<div className="Calendar-Week-Header-Cell"></div>
        	{this.props.days.map((day, index) => {
        		const weekDay = day.format('ddd DD')
        		return <div className="Calendar-Week-Header-Cell" key={index}>
	        		{weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}
	        	</div>
	        })}
        </div>
    }
}

WeekHeader.propTypes = {
    days: PropTypes.array.isRequired,
}

export default WeekHeader
